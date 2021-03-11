const express = require('express');
const bodyParser = require('body-parser');
const {
  days,
  blocks,
  slots,
  companies,
  mentors,
  schedule,
} = require('./db.js');

const mentorsRoutes = require('./routes/mentors');
const companiesRoutes = require('./routes/companies');
const meetingsRoutes = require('./routes/meetings');
const scheduleRoutes = require('./routes/schedule');
const rescheduleRoutes = require('./routes/reschedule');
//import companiesRoutes from './routes/companies';
const cors = require('cors');
const { spawn } = require('child_process');
const { Op } = require('sequelize');
const { info } = require('console');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', cors());

const port = process.env.PORT || 3033;

app.use('/api/mentors', mentorsRoutes);

app.use('/api/companies', companiesRoutes);

app.use('/api/schedule', scheduleRoutes);

app.use('/api/meetings', meetingsRoutes);

app.use('/api/reschedule', rescheduleRoutes);

if (require.main === module) {
  app.listen(port, () => {
    console.log(
      `Express started on http://localhost:${port}` +
        '; press Ctrl-C to terminate.'
    );
  });
} else {
  module.exports = app;
}
