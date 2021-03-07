const { Router } = require('express');
const { getAllCompanies, createCompany } = require('../controllers/companies.controller');
const router = Router();

router.get("/", getAllCompanies);
router.post("/", createCompany);

module.exports = router