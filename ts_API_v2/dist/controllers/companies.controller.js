"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCompany = createCompany;
exports.getCompanies = getCompanies;
exports.getCompanyById = getCompanyById;
exports.deleteCompany = deleteCompany;
exports.updateCompany = updateCompany;

var _Companies = _interopRequireDefault(require("../models/Companies"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createCompany(_x, _x2) {
  return _createCompany.apply(this, arguments);
}

function _createCompany() {
  _createCompany = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, company_name, email, newCompany;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, company_name = _req$body.company_name, email = _req$body.email;
            _context.prev = 1;
            _context.next = 4;
            return _Companies["default"].create({
              company_name: company_name,
              email: email
            }, {
              fields: ['company_name', 'email']
            });

          case 4:
            newCompany = _context.sent;

            if (newCompany) {
              res.json({
                meassage: "Company Created Successfully",
                data: newCompany
              });
            }

            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(500).json({
              meassage: "Something goes wrong !",
              data: {}
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _createCompany.apply(this, arguments);
}

;

function getCompanies(_x3, _x4) {
  return _getCompanies.apply(this, arguments);
}

function _getCompanies() {
  _getCompanies = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var companies;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Companies["default"].findAll();

          case 3:
            companies = _context2.sent;
            res.json(companies);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getCompanies.apply(this, arguments);
}

;

function getCompanyById(_x5, _x6) {
  return _getCompanyById.apply(this, arguments);
}

function _getCompanyById() {
  _getCompanyById = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, company;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return _Companies["default"].findOne({
              where: {
                company_id: id
              }
            });

          case 3:
            company = _context3.sent;
            res.json(company);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getCompanyById.apply(this, arguments);
}

;

function deleteCompany(_x7, _x8) {
  return _deleteCompany.apply(this, arguments);
}

function _deleteCompany() {
  _deleteCompany = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            deleteRowCount = _Companies["default"].destroy({
              where: {
                company_id: id
              }
            });
            res.json({
              message: "Company Deleted Successfully",
              count: deleteRowCount
            });

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteCompany.apply(this, arguments);
}

;

function updateCompany(_x9, _x10) {
  return _updateCompany.apply(this, arguments);
}

function _updateCompany() {
  _updateCompany = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, company_name, email, companies;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _req$body2 = req.body, company_name = _req$body2.company_name, email = _req$body2.email;
            _context6.next = 5;
            return _Companies["default"].findAll({
              attributes: ['company_id', 'company_name', 'email'],
              where: {
                company_id: id
              }
            });

          case 5:
            companies = _context6.sent;

            if (companies.length > 0) {
              companies.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(company) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return company.update({
                            company_name: company_name,
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
              message: "Company Updated Successfully",
              data: companies
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
  return _updateCompany.apply(this, arguments);
}