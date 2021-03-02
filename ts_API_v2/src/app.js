import express, { json } from "express";
import morgan from "morgan";
//importing routes
import mentorRoutes from "./routes/mentors";
import companieRoutes from "./routes/companies";
import mentorSurveyRoutes from "./routes/mentor_survey";
import companySurveyRoutes from "./routes/company_survey";

//initialize server
const app = express();
//middlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use("/api/info/mentors", mentorRoutes);
app.use("/api/info/mentor_survey", mentorSurveyRoutes);
app.use("/api/info/companies", companieRoutes);
app.use("/api/info/company_survey", companySurveyRoutes);
export default app;