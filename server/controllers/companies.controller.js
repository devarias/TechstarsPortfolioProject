const { companies } = require('../db.js');

exports.getAllCompanies = async (req, res) => {
  companies.findAll().then((companies) => res.json(companies));
};

exports.createCompany = async (req, res) => {
  const data = await req.body;
  for (row of data) {
    if (row.Company && row.Company.length > 0) {
      const check = await companies.findOne({
        where: { company: row.Company.trim() },
      });
      if (check === null) {
        const newCompany = {
          company: row.Company.trim(),
          email: row.Email.trim(),
        };
        await companies.create(newCompany);
      }
    }
  }
};