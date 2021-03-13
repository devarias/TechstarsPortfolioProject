const { Router } = require('express');
const { getTable } = require('../controllers/table.controller');
const router = Router();

router.get('/', getTable);

//export default router;
module.exports = router;
