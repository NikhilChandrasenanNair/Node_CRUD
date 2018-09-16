const Employee = require("../models/employee.model");

exports.employee_create = (req, res) => {
  let employee = new Employee({
    emp_name: req.body.emp_name,
    emp_title: req.body.emp_title,
    company_name: req.body.company_name,
    profile_type: req.body.profile_type
  });

  employee.save(err => {
    if (err) return next(err);

    res.send("Employee created successfully");
  });
};

exports.employee_details = (req, res) => {
  Employee.findById(req.params.id, (err, employee) => {
    if (err) return next(err);
    res.send(employee);
  });
};

exports.employee_update = (req, res) => {
  Employee.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (err, employee) => {
      if (err) return next(err);
      res.send("employee updated");
    }
  );
};

exports.employee_delete = (req, res) => {
  Employee.findByIdAndRemove(req.params.id, err => {
    if (err) return next(err);
    res.send("Deleted Successfully");
  });
};

exports.test = (req, res) => {
  res.send("Test Controller");
};
