import express, { json } from 'express';
import morgan from 'morgan';
//importing routes
import mentorRoutes from './routes/mentors';
import companieRoutes from './routes/companies';
import mentorSurveyRoutes from './routes/mentor_survey';
import companySurveyRoutes from './routes/company_survey';
import cors from 'cors';
//initialize server
const app = express();
//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/mentors', mentorRoutes);
app.use('/api/mentor_survey', mentorSurveyRoutes);
app.use('/api/companies', companieRoutes);
app.use('/api/company_survey', companySurveyRoutes);
export default app;
