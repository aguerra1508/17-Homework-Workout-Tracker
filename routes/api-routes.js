// Dependencies
const Workout = require("../models/Workout.js");
require("mongoose");

module.exports = function (app) {
	// Find workout
	app.get("/api/workouts", function (req, res) {
		Workout.find()
			.then(data => {
				res.json(data)
			})
			.catch(err => {
				res.json(err)
			})
	});
	// Update existing workout
	app.put("/api/workouts/:id", ({
		body,
		params
	}, res) => {
		Workout.findByIdAndUpdate(
				params.id, {
					$push: {
						exercises: body
					}
				}, {
					new: true,
					runValidators: true
				})
			.then(data => {
				res.json(data)
			})
			.catch(err => {
				res.json(err)
			})
	});
	// Create new workout
	app.post("/api/workouts", function (req, res) {
		Workout.create({})
			.then(data => {
				res.json(data)
			})
			.catch(err => {
				res.json(err)
			})
	});
	// Find workout in range
	app.get("/api/workouts/range", function (req, res) {
		Workout.find({})
			.then(data => {
				res.json(data)
			})
			.catch(err => {
				res.json(err)
			})
	});
};