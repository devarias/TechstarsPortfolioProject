"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Company_survey = _database.sequelize.define('company_survey', {
  survey_id: {
    type: _sequelize["default"].UUID,
    defaultValue: _sequelize["default"].UUIDV4,
    primaryKey: true
  },
  mentor_id: {
    type: _sequelize["default"].UUID
  },
  company_id: {
    type: _sequelize["default"].UUID
  },
  vote: {
    type: _sequelize["default"].INTEGER
  },
  feedback: {
    type: _sequelize["default"].TEXT
  },
  preference: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false,
  freezeTableName: true
});

var _default = Company_survey;
exports["default"] = _default;