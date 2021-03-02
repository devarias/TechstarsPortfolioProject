"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _mentor = require("../controllers/mentor.controllers");

var router = (0, _express.Router)(); //Mentors data

router.post("/", _mentor.createMentor);
router.get("/", _mentor.getMentors); //Mentor data by id

router.get("/:id", _mentor.getMentorById);
router["delete"]("/:id", _mentor.deleteMentor);
router.put("/:id", _mentor.updateMentor);
var _default = router;
exports["default"] = _default;