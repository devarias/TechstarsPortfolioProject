const { mentors } = require('../db.js');

exports.getAllMentors = async (req, res) => {
  mentors.findAll().then((mentors) => res.json(mentors));
};

exports.createMentor = async (req, res) => {
  mentors.create(req.body).then((mentor) => res.json(mentor));
};