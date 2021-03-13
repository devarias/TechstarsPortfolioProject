const { mentors } = require('../db.js');

exports.getAllMentors = async (req, res) => {
  mentors.findAll().then((mentors) => res.json(mentors));
};

exports.deleteMentor = async (req, res) => {
  const data = await req.body;
  const mentorId = await mentors.findOne({
    where: {
      mentor: data.Mentor.trim(),
    },
    attributes: ['mentor_id'],
  });
  const deleteRowCount = await mentors.destroy({
    where: {
      mentor_id: mentorId.mentor_id,
    },
  });
  res.json({
    message: 'Mentor Deleted Successfully',
    count: deleteRowCount,
  });
};

exports.createMentor = async (req, res) => {
  mentors.create(req.body).then((mentor) => res.json(mentor));
};
