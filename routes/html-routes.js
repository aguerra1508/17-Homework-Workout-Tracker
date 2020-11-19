// Dependencies
const path = require("path");

module.exports = function (app) {
	// Index route
	app.get("/", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});
	// Exercise route
	app.get("/exercise", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/exercise.html"));
	});
	// Stats route
	app.get("/stats", function (req, res) {
		res.sendFile(path.join(__dirname, "../public/stats.html"));
	});
};