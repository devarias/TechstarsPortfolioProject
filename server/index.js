const express = require('express');
const bodyParser = require('body-parser');
const multiparty = require('multiparty');
const {
  days,
  blocks,
  slots,
  companies,
  mentors,
  schedule,
} = require('./db.js');
const cors = require('cors');
const { spawn } = require('child_process');
const { Op } = require('sequelize');
const { info } = require('console');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', cors());

const port = process.env.PORT || 3033;

app.get('/api/mentors', (req, res) => {
  mentors.findAll().then((mentors) => res.json(mentors));
});

app.post('/api/mentors', (req, res) => {
  mentors.create(req.body).then((mentor) => res.json(mentor));
});

app.post('/api/companies', async (req, res) => {
  const info = await req.body;
  for (row of info) {
    if (row.Company && row.Company.length > 0) {
      const check = await companies.findOne({
        where: { company: row.Company.trim() },
      });
      //console.log(check)
      if (check === null) {
        const newCompany = {
          company: row.Company.trim(),
          email: row.Email.trim(),
        };
        await companies.create(newCompany);
      }
    }
  }
});

app.post('/api/schedule', async (req, res) => {
  const info = await req.body;
  for (row of info) {
    if (row.Name && row.Name.length > 0) {
      const check = await mentors.findOne({
        where: { mentor: row.Name.trim() },
      });
      if (check === null) {
        const newMentor = { mentor: row.Name.trim(), email: row.Email.trim() };
        await mentors.create(newMentor);
      }
    }
  }
  // Child process:
  var dataFromPy = {};
  const python = spawn('python3', ['schedule.py', JSON.stringify(info)]);
  python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    dataFromPy = data.toString();
    dataFromPy = JSON.parse(dataFromPy);
  });
  // in close event we are sure that stream from child process is closed
  python.on('close', async (code) => {
    console.log(`child process close all stdio with code ${code}`);
    const dataCopy = [...dataFromPy];

    //data to fill table schedule
    for (i in dataCopy[0]) {
      dataCopy[0][i].Slots = dataCopy[1][i];
    }
    for (j in dataCopy[2]) {
      dataCopy[2][j].Slots = dataCopy[3][j];
    }
    dataCopy.splice(1, 1);
    dataCopy.splice(2, 1);
    dataToFillTable = [];
    for (item of dataCopy) {
      for (elem of item) {
        dataToFillTable.push(elem);
      }
    }
    //data to send
    for (k in dataFromPy[0]) {
      const ks = Object.keys(dataFromPy[1][k]);
      for (key of ks) {
        dataFromPy[0][k][key] = dataFromPy[1][k][key];
      }
    }
    for (h in dataFromPy[2]) {
      const ks = Object.keys(dataFromPy[3][h]);
      for (key of ks) {
        dataFromPy[2][h][key] = dataFromPy[3][h][key];
      }
    }
    dataFromPy.splice(1, 1);
    dataFromPy.splice(2, 1);
    dataToSend = [];
    for (item of dataFromPy) {
      for (elem of item) {
        dataToSend.push(elem);
      }
    }
    //Send data to front
    res.json(dataToSend);

    //DELETE all records from schedule table, before filling it again with new file uploaded
    await schedule.destroy({ where: {} });
    console.log('Records deleted');

    //Process to get ids of mentors, days, blocks, companies and slots to populate schedule table
    for (meet of dataToFillTable) {
      const mentorId = await mentors.findOne({
        where: {
          mentor: meet.Mentor,
        },
        attributes: ['mentor_id'],
      });
      const dayId = await days.findOne({
        where: {
          day: meet.Day,
        },
        attributes: ['day_id'],
      });
      const blockId = await blocks.findOne({
        where: {
          block: meet.Block,
        },
        attributes: ['block_id'],
      });
      const slt = Object.keys(meet.Slots);
      for (key of slt) {
        if (meet.Slots[key] !== null) {
          const slotId = await slots.findOne({
            where: {
              slot: key,
            },
            attributes: ['slot_id'],
          });
          const companyId = await companies.findOne({
            where: {
              company: meet.Slots[key],
            },
            attributes: ['company_id'],
          });
          //console.log((mentorId.mentor_id), typeof(dayId), typeof(blockId), typeof(companyId), typeof(slotId))
          await schedule.create({
            mentor_id: mentorId.mentor_id,
            day_id: dayId.day_id,
            block_id: blockId.block_id,
            company_id: companyId.company_id,
            slot_id: slotId.slot_id,
          });
        }
      }
    }
  });

  //await mentors.findAll().then(mentors => res.json(mentors))
});

app.get('/api/schedule', async (req, res) => {
  const objects = await schedule.findAll({
    attributes: ['mentor_id', 'day_id', 'block_id'],
    group: ['mentor_id', 'day_id', 'block_id'],
  });
  for (obj of objects) {
    obj.dataValues.Slots = [];
    meets = await schedule.findAll({
      attributes: ['slot_id', 'company_id', 'created_at', 'updated_at'],
      where: {
        [Op.and]: [
          { mentor_id: obj.mentor_id },
          { day_id: obj.day_id },
          { block_id: obj.block_id },
        ],
      },
    });
    for (meet of meets) {
      obj.dataValues.Slots.push(meet);
    }
  }
  const dataToSend = [];
  for (ob of objects) {
    const objToPush = {};
    objToPush.mentor = await mentors.findOne({
      where: { mentor_id: ob.mentor_id },
      attributes: ['mentor', 'email'],
    });
    const email = objToPush.mentor.email;
    objToPush.mentor = objToPush.mentor.mentor;
    objToPush.email = email;

    objToPush.day = await days.findOne({
      where: { day_id: ob.day_id },
      attributes: ['day'],
    });
    objToPush.day = objToPush.day.day;

    objToPush.block = await blocks.findOne({
      where: { block_id: ob.block_id },
      attributes: ['block'],
    });
    objToPush.block = objToPush.block.block;

    objToPush.Slots = [];
    for (sl of ob.dataValues.Slots) {
      const slObj = {};
      slObj.slot = await slots.findOne({
        where: { slot_id: sl.slot_id },
        attributes: ['slot'],
      });
      slObj.slot = slObj.slot.slot;

      slObj.company = await companies.findOne({
        where: { company_id: sl.company_id },
        attributes: ['company'],
      });
      slObj.company = slObj.company.company;

      slObj.created_at = sl.created_at;
      slObj.updated_at = sl.updated_at;

      objToPush.Slots.push(slObj);
    }
    dataToSend.push(objToPush);
  }
  console.log(dataToSend);
  res.json(dataToSend);
});

app.get('/api/meetings', async (req, res) => {
  const meetings = await schedule.findAll();
  const dataToSend = [];
  for (meet of meetings) {
    const objToPush = {};
    objToPush.meet_id = meet.meet_id;

    objToPush.mentor = await mentors.findOne({
      where: { mentor_id: meet.mentor_id },
      attributes: ['mentor'],
    });
    objToPush.mentor = objToPush.mentor.mentor;

    objToPush.day = await days.findOne({
      where: { day_id: meet.day_id },
      attributes: ['day'],
    });
    objToPush.day = objToPush.day.day;

    objToPush.block = await blocks.findOne({
      where: { block_id: meet.block_id },
      attributes: ['block'],
    });
    objToPush.block = objToPush.block.block;

    objToPush.company = await companies.findOne({
      where: { company_id: meet.company_id },
      attributes: ['company'],
    });
    objToPush.company = objToPush.company.company;

    objToPush.slot = await slots.findOne({
      where: { slot_id: meet.slot_id },
      attributes: ['slot'],
    });
    objToPush.slot = objToPush.slot.slot;

    objToPush.created_at = meet.created_at;
    objToPush.updated_at = meet.updated_at;

    dataToSend.push(objToPush);
  }
  console.log(dataToSend);
  res.json(dataToSend);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(
      `Express started on http://localhost:${port}` +
        '; press Ctrl-C to terminate.'
    );
  });
} else {
  module.exports = app;
}
