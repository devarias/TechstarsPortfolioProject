"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Mentor_survey = _interopRequireDefault(require("./Mentor_survey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Mentor = _database.sequelize.define('mentor', {
  mentor_id: {
    type: _sequelize["default"].UUID,
    defaultValue: _sequelize["default"].UUIDV4,
    primaryKey: true
  },
  mentor_name: {
    type: _sequelize["default"].TEXT
  },
  email: {
    type: _sequelize["default"].TEXT
  }
}, {
  timestamps: false
});

Mentor.hasMany(_Mentor_survey["default"], {
  foreignKey: 'mentor_id',
  sourceKey: 'mentor_id'
});

_Mentor_survey["default"].belongsTo(Mentor, {
  foreignKey: 'mentor_id',
  sourceKey: 'mentor_id'
});

var _default = Mentor;
exports["default"] = _default;