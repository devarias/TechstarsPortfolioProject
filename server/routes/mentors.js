const { Router } = require('express');
const { getAllMentors, createMentor } = require('../controllers/mentors.controller');
const router = Router();

router.get("/", getAllMentors);
router.post("/", createMentor);

//export default router;
module.exports = router