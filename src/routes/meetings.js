const { Router } = require('express');
const { getMeetings } = require('../controllers/meetings.controller');
const router = Router();

router.get('/', getMeetings);

export default router;
