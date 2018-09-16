const express = require("express");
const router = express.Router();

const employee_controller = require("../controllers/employee.controller");

router.get("/test", employee_controller.test);

router.post("/create", employee_controller.employee_create);
router.get("/:id", employee_controller.employee_details);
router.put("/:id/update", employee_controller.employee_update);
router.delete("/:id/delete", employee_controller.employee_delete);

module.exports = router;
