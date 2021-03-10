import express, { json } from 'express';
import morgan from 'morgan';
//importing routes
import mentorRoutes from './routes/mentors';
import companieRoutes from './routes/companies';
import mentorSurveyRoutes from './routes/mentor_survey';
import companySurveyRoutes from './routes/company_survey';
import scheduleRoutes from './routes/schedule';
import rescheduleRoutes from './routes/reschedule';
import meetingsRoutes from './routes/meetings';
import cors from 'cors';
const bodyParser = require('body-parser');
//initialize server
const app = express();
//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(json());

//routes
app.use('/api/mentors', mentorRoutes);
app.use('/api/mentor_survey', mentorSurveyRoutes);
app.use('/api/companies', companieRoutes);
app.use('/api/company_survey', companySurveyRoutes);
app.use('/api/schedule', scheduleRoutes);
app.use('/api/reschedule', rescheduleRoutes);
app.use('/api/meetings', meetingsRoutes);
export default app;
