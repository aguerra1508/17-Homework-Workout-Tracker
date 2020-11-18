const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  date: { 
		type: Date, 
		default: Date.now
	},
	exercises:[{
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
		weight: {
			type: Number
		},
		sets: {
			type: Number
		},
		reps: {
			type: Number
		},
		distance: {
			type: Number
		},
		duration: {
			type: Number
		}
	}]
});

const Workout = mongoose.model("User", WorkoutSchema);

module.exports = Workout;
