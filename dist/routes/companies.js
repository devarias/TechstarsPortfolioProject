"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _companies = require("../controllers/companies.controller");

var router = (0, _express.Router)(); //Company data

router.post("/", _companies.createCompany);
router.get("/", _companies.getCompanies); //Company data by id

router.get("/:id", _companies.getCompanyById);
router["delete"]("/:id", _companies.deleteCompany);
router.put("/:id", _companies.updateCompany);
var _default = router;
exports["default"] = _default;