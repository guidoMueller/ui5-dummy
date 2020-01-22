'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Employees = require('./Routes/Employees');

var _Employees2 = _interopRequireDefault(_Employees);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index = function index(oApp) {
  (0, _Employees2.default)(oApp);

  oApp.get('/odata/service.svc', function (req, res) {
    res.sendFile(_path2.default.join(__dirname, 'service.xml'));
  });

  oApp.get('/odata/service.svc/([\\$])metadata', function (req, res) {
    res.sendFile(_path2.default.join(__dirname, 'metadata.xml'));
  });
};

exports.default = index;