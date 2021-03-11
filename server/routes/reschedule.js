const { Router } = require('express');
const {
  createReschedule,
  updateMeetings,
} = require('../controllers/reschedule.controller');
const router = Router();

//router.get("/", getSchedule);
router.post('/', createReschedule);
router.put('/', updateMeetings);

module.exports = router;
