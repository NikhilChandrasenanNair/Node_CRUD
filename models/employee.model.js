const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
  emp_name: { type: String, required: true },
  emp_title: { type: String, required: true },
  company_name: { type: String, required: true },
  profile_type: { type: String, required: true }
});

// export the model
module.exports = mongoose.model("Employee", EmployeeSchema);
