"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Data Acces Object design pattern
var Company = _database.sequelize.define('company', {
  companyId: {
    type: _sequelize["default"].UUID,
    defaultValue: _sequelize["default"].UUIDV4,
    primaryKey: true
  },
  companyName: {
    type: _sequelize["default"].VARCHAR
  },
  email: {
    type: _sequelize["default"].VARCHAR
  }
});

var _default = Company;
exports["default"] = _default;