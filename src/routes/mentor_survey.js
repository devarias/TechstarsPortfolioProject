import { Router } from "express";
import { createMenSurvey, getMenSurvey, getMenSurveyById, deleteMenSurvey, updateMenSurvey, getMenSurveyByMentor } from "../controllers/mentor_survey.controller"
const router = Router();
//Mentors survey data
router.post("/", createMenSurvey);
router.get("/", getMenSurvey);
//Mentor survey data by id
router.get("/:id", getMenSurveyById);
router.delete("/:id", deleteMenSurvey);
router.put("/:id", updateMenSurvey);
//mentor survey data by mentor
router.get("/mentor/:id", getMenSurveyByMentor);
export default router;