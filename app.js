const express = require("express");
const bodyParser = require("body-parser");
const secret = require("./config/employee.config");

// Import routes from employee
const employee = require("./routes/employee.route");

// Set up mongoose connection
const mongoose = require("mongoose");

mongoose.connect(
  secret.database,
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;
mongoose.set("useFindAndModify", false);
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));

// Initializing express app
const app = express();

// Parse the incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/employee", employee);

let port = process.env.PORT || 8080;

app.listen(secret.port, () => {
  console.log("Server is up and running on port number ", port);
});
