"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _company_survey = require("../controllers/company_survey.controller");

var router = (0, _express.Router)(); //Mentors survey data

router.post("/", _company_survey.createComSurvey);
router.get("/", _company_survey.getComSurvey); //Mentor survey data by id

router.get("/:id", _company_survey.getComSurveyById);
router["delete"]("/:id", _company_survey.deleteComSurvey);
router.put("/:id", _company_survey.updateComSurvey); //mentor survey data by mentor

router.get("/mentor/:id", _company_survey.getComSurveyByMentor);
var _default = router;
exports["default"] = _default;