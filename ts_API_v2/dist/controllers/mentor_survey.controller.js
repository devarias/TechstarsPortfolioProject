"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMenSurvey = createMenSurvey;
exports.getMenSurvey = getMenSurvey;
exports.deleteMenSurvey = deleteMenSurvey;
exports.updateMenSurvey = updateMenSurvey;
exports.getMenSurveyByMentor = getMenSurveyByMentor;
exports.getMenSurveyById = getMenSurveyById;

var _Mentor_survey = _interopRequireDefault(require("../models/Mentor_survey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createMenSurvey(_x, _x2) {
  return _createMenSurvey.apply(this, arguments);
}

function _createMenSurvey() {
  _createMenSurvey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, mentor_id, company_id, vote, feedback, preference, survey;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, mentor_id = _req$body.mentor_id, company_id = _req$body.company_id, vote = _req$body.vote, feedback = _req$body.feedback, preference = _req$body.preference;
            _context.next = 3;
            return _Mentor_survey["default"].create({
              mentor_id: mentor_id,
              company_id: company_id,
              vote: vote,
              feedback: feedback,
              preference: preference
            }, {
              fields: ['mentor_id', 'company_id', 'vote', 'feedback', 'preference']
            });

          case 3:
            survey = _context.sent;
            res.json({
              message: 'New Mentor Survey Created'
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createMenSurvey.apply(this, arguments);
}

;

function getMenSurvey(_x3, _x4) {
  return _getMenSurvey.apply(this, arguments);
}

function _getMenSurvey() {
  _getMenSurvey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var surveys;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Mentor_survey["default"].findAll({
              attributes: ['survey_id', 'vote', 'mentor_id', 'company_id', 'vote', 'feedback', 'preference']
            });

          case 2:
            surveys = _context2.sent;
            res.json({
              surveys: surveys
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getMenSurvey.apply(this, arguments);
}

;

function deleteMenSurvey(_x5, _x6) {
  return _deleteMenSurvey.apply(this, arguments);
}

function _deleteMenSurvey() {
  _deleteMenSurvey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, deleteCount;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _Mentor_survey["default"].destroy({
              where: {
                survey_id: id
              }
            });

          case 3:
            deleteCount = _context3.sent;
            res.json({
              message: "Mentor Survey Deleted",
              count: deleteCount
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _deleteMenSurvey.apply(this, arguments);
}

;

function updateMenSurvey(_x7, _x8) {
  return _updateMenSurvey.apply(this, arguments);
}

function _updateMenSurvey() {
  _updateMenSurvey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _req$body2, mentor_id, company_id, vote, feedback, preference, survey, updatedSurvey;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, mentor_id = _req$body2.mentor_id, company_id = _req$body2.company_id, vote = _req$body2.vote, feedback = _req$body2.feedback, preference = _req$body2.preference;
            _context4.next = 4;
            return _Mentor_survey["default"].findAll({
              attributes: ['mentor_id', 'company_id', 'vote', 'feedback', 'preference'],
              where: {
                survey_id: id
              }
            });

          case 4:
            survey = _context4.sent;
            _context4.next = 7;
            return _Mentor_survey["default"].update({
              mentor_id: mentor_id,
              company_id: company_id,
              vote: vote,
              feedback: feedback,
              preference: preference
            }, {
              where: {
                survey_id: id
              }
            });

          case 7:
            updatedSurvey = _context4.sent;
            res.json({
              message: "Survey Updated Successfully",
              updatedSurvey: updatedSurvey
            });

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _updateMenSurvey.apply(this, arguments);
}

;

function getMenSurveyByMentor(_x9, _x10) {
  return _getMenSurveyByMentor.apply(this, arguments);
}

function _getMenSurveyByMentor() {
  _getMenSurveyByMentor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, surveys;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.next = 3;
            return _Mentor_survey["default"].findAll({
              attributes: ['mentor_id'],
              where: {
                mentor_id: id
              }
            });

          case 3:
            surveys = _context5.sent;
            res.json({
              surveys: surveys
            });

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getMenSurveyByMentor.apply(this, arguments);
}

;

function getMenSurveyById(_x11, _x12) {
  return _getMenSurveyById.apply(this, arguments);
}

function _getMenSurveyById() {
  _getMenSurveyById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, survey;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _context6.next = 3;
            return _Mentor_survey["default"].findOne({
              where: {
                survey_id: id
              }
            });

          case 3:
            survey = _context6.sent;
            res.json({
              survey: survey
            });

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getMenSurveyById.apply(this, arguments);
}

;