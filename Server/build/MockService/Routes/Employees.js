'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Employees = require('../Entity/Employees.json');

var _Employees2 = _interopRequireDefault(_Employees);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getEmployee = function getEmployee(count) {
  var newEmployee = JSON.parse(JSON.stringify(_Employees2.default));
  newEmployee["__metadata"] = {
    "uri": "http://localhost:5000/odata/service.svc/Employees/Employees(" + count + ")",
    "type": "NorthwindModel.Employee"
  };

  var date = (0, _moment2.default)(new Date()).format("X");
  newEmployee.EmployeeID = count;
  newEmployee.LastName = _faker2.default.name.lastName();
  newEmployee.FirstName = _faker2.default.name.firstName();
  newEmployee.BirthDate = "\/Date(" + date + ")\/";

  return newEmployee;
};

var getEmployees = function getEmployees(count) {
  var returnObject = {
    d: {
      results: [],
      "__count": 10
    }
  };
  for (var i = 1; i <= count; i++) {
    returnObject.d.results.push(new getEmployee(i));
  }

  return returnObject;
};

var Employees = function Employees(oApp) {
  oApp.get('/odata/service.svc/Employees/([\\$])count', function (req, res) {
    res.send("10");
  });
  oApp.get(['/odata/service.svc/Employees', '/odata/service.svc/Employees?([\\$])*'], function (req, res) {
    //res.send( JSON.stringify( getEmployees( 10 ) ) )
    res.sendFile(_path2.default.join(__dirname, '../Entity/Employees.xml'));
  });
};

exports.default = Employees;