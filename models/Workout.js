// Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Workout schema
const WorkoutSchema = new Schema({
	day: {
		type: Date,
		default: Date.now,
	},
	exercises: [{
		type: {
			type: String,
			trim: true,
			required: "Exercise type required"
		},
		name: {
			type: String,
			trim: true,
			required: "Exercise name required"
		},
		duration: {
			type: Number,
			trim: true
		},
		weight: {
			type: Number,
			trim: true
		},
		reps: {
			type: Number,
			trim: true
		},
		sets:{
			type: Number,
			trim: true
		},
		distance: {
			type: Number,
			trim: true
		},
		duration: {
			type: Number,
			trim: true
		}
	}]
});

const Workout = mongoose.model("User", WorkoutSchema);

module.exports = Workout;