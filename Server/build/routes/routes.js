'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = function routes(oApp) {
	oApp.get('/', function (req, res) {
		if (req.user !== null && req.user !== undefined) {
			res.sendFile(_path2.default.join(__dirname, '../../../App/build/com/bpw/complaints', 'index.html'));
		} else {
			res.sendFile(_path2.default.join(__dirname, '../../../App/build/com/bpw/complaints', 'index.html'));
		}
	});
};

exports.default = routes;