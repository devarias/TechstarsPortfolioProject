"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMentors = getMentors;
exports.createMentor = createMentor;
exports.getMentorById = getMentorById;
exports.deleteMentor = deleteMentor;
exports.updateMentor = updateMentor;

var _Mentors = _interopRequireDefault(require("../models/Mentors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getMentors(_x, _x2) {
  return _getMentors.apply(this, arguments);
}

function _getMentors() {
  _getMentors = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var mentors;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Mentors["default"].findAll();

          case 3:
            mentors = _context.sent;
            res.json(mentors);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getMentors.apply(this, arguments);
}

;

function createMentor(_x3, _x4) {
  return _createMentor.apply(this, arguments);
}

function _createMentor() {
  _createMentor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, mentor_name, email, newMentor;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, mentor_name = _req$body.mentor_name, email = _req$body.email;
            _context2.prev = 1;
            _context2.next = 4;
            return _Mentors["default"].create({
              mentor_name: mentor_name,
              email: email
            }, {
              fields: ['mentor_name', 'email']
            });

          case 4:
            newMentor = _context2.sent;

            if (newMentor) {
              res.json({
                message: "Mentor Created Successfully",
                data: newMentor
              });
            }

            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              message: "Something goes wrong !!",
              data: {}
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _createMentor.apply(this, arguments);
}

;

function getMentorById(_x5, _x6) {
  return _getMentorById.apply(this, arguments);
}

function _getMentorById() {
  _getMentorById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, mentor;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _Mentors["default"].findOne({
              where: {
                mentor_id: id
              }
            });

          case 3:
            mentor = _context3.sent;
            res.json(mentor);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getMentorById.apply(this, arguments);
}

;

function deleteMentor(_x7, _x8) {
  return _deleteMentor.apply(this, arguments);
}

function _deleteMentor() {
  _deleteMentor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return _Mentors["default"].destroy({
              where: {
                mentor_id: id
              }
            });

          case 3:
            deleteRowCount = _context4.sent;
            res.json({
              message: "Mentor Deleted Successfully",
              count: deleteRowCount
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteMentor.apply(this, arguments);
}

;

function updateMentor(_x9, _x10) {
  return _updateMentor.apply(this, arguments);
}

function _updateMentor() {
  _updateMentor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, mentor_name, email, mentors;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _req$body2 = req.body, mentor_name = _req$body2.mentor_name, email = _req$body2.email;
            _context6.next = 5;
            return _Mentors["default"].findAll({
              attributes: ['mentor_id', 'mentor_name', 'email'],
              where: {
                mentor_id: id
              }
            });

          case 5:
            mentors = _context6.sent;

            if (mentors.length > 0) {
              mentors.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(mentor) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return mentor.update({
                            mentor_name: mentor_name,
                            email: email
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x11) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.json({
              message: "Mentor Updated Successfully",
              data: mentors
            }));

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 10]]);
  }));
  return _updateMentor.apply(this, arguments);
}