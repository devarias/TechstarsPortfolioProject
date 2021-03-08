const {
  schedule,
  companies,
  mentors,
  days,
  blocks,
  slots,
} = require('../db.js');
const { spawn } = require('child_process');
const { Op } = require('sequelize');
const { info } = require('console');
//const fs = require('fs')

exports.createReschedule = async (req, res) => {
  const data = await req.body;
  console.log(JSON.stringify(data));

  let currentSchedule = await schedule.findAll();
  currentSchedule = JSON.stringify(currentSchedule);
  console.log(currentSchedule);

  let currentCompanies = await companies.findAll();
  currentCompanies = JSON.stringify(currentCompanies);
  console.log(currentCompanies);

  let currentBlocks = await blocks.findAll();
  currentBlocks = JSON.stringify(currentBlocks);
  console.log(currentBlocks);

  let currentDays = await days.findAll();
  currentDays = JSON.stringify(currentDays);
  console.log(currentDays);

  let currentSlots = await slots.findAll();
  currentSlots = JSON.stringify(currentSlots);
  console.log(currentSlots);

  var dataFromPy = {};
  const python = spawn('python3', [
    './algorithm/reschedule.py',
    JSON.stringify(data),
    currentSchedule,
    currentCompanies,
    currentBlocks,
    currentDays,
    currentSlots,
  ]);
  python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    dataFromPy = data.toString();
    dataFromPy = JSON.parse(dataFromPy);
  });
  python.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  // in close event we are sure that stream from child process is closed
  python.on('close', async (code) => {
    console.log(`child process close all stdio with code ${code}`);
  });
};
