// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(logger("dev"));

// Express App
app.use(express.urlencoded({
	extended: true
}));
app.use(express.json());
app.use(express.static("public"));

// MongoDB
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/workouts", 
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	}
);

// Routes
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// Server
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});