"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require("./routes/routes.js");

var _routes2 = _interopRequireDefault(_routes);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _MockService = require("./MockService");

var _MockService2 = _interopRequireDefault(_MockService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
// body parser middleware to handle URL parameter and JSON bodies
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

// add & configure middleware

// client express routes
(0, _routes2.default)(app);
(0, _MockService2.default)(app);

var server = void 0;
app.use("/node_modules", function (req, res) {
	console.log(req.originalUrl);
	res.sendFile(_path2.default.join(__dirname, '../../', req.originalUrl));
});

app.use("/node_modules", function (req, res) {
	console.log(req.originalUrl);
	res.sendFile(_path2.default.join(__dirname, '../../', req.originalUrl));
});
app.use("/static/", function (req, res) {
	console.log(req.originalUrl);
	res.sendFile(_path2.default.join(__dirname, '../../App/build/', req.originalUrl.replace("/static", "")));
});

server = app.listen(process.env.PORT || 3000);