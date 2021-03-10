const { Router } = require('express');
const {
  getSchedule,
  createSchedule,
  proof,
} = require('../controllers/schedule.controller');
const router = Router();

router.get('/', getSchedule);
router.post('/', createSchedule);
//router.post('/', proof);

module.exports = router;
