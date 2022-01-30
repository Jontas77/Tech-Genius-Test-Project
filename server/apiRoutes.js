const router = require("express").Router();
const authorize = require("./auth/jwt/authorize");
const controller = require("./apiController");

// Admin
// Employees
router.get("/employees", authorize, controller.getEmployees);
router.get(
  "/admin/employees/:employeeId",
  authorize,
  controller.getSingleEmployee
);
router.put(
  "/admin/employees/:employeeId",
  authorize,
  controller.updateEmployee
);

//Departments
router.post("/admin/departments", authorize, controller.createDepartment);
router.get("/admin/departments", authorize, controller.getDepartments);
router.get(
  "/admin/departments/:departmentId",
  authorize,
  controller.getSingleDepartment
);
router.put(
  "/admin/departments/:departmentId",
  authorize,
  controller.updateDepartment
);

// Employees
router.get("/employee", authorize, controller.getEmployeeDetails);
router.put("/employee/:employeeId", controller.updateEmployeeDetails);
module.exports = router;
