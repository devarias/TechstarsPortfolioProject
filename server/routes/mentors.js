const { Router } = require('express');
const {
  getAllMentors,
  createMentor,
  deleteMentor,
} = require('../controllers/mentors.controller');
const router = Router();

router.get('/', getAllMentors);
router.post('/', createMentor);
router.delete('/', deleteMentor);

//export default router;
module.exports = router;
