"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _mentor_survey = require("../controllers/mentor_survey.controller");

var router = (0, _express.Router)(); //Mentors survey data

router.post("/", _mentor_survey.createMenSurvey);
router.get("/", _mentor_survey.getMenSurvey); //Mentor survey data by id

router.get("/:id", _mentor_survey.getMenSurveyById);
router["delete"]("/:id", _mentor_survey.deleteMenSurvey);
router.put("/:id", _mentor_survey.updateMenSurvey); //mentor survey data by mentor

router.get("/mentor/:id", _mentor_survey.getMenSurveyByMentor);
var _default = router;
exports["default"] = _default;