const router = require("express").Router();
const adminAuth = require("./routes/adminAuth");
const employeeAuth = require("./routes/employeeAuth");
const managerAuth = require("./routes/managerAuth");
const validate = require("./jwt/validate");
const authorize = require("./jwt/authorize");

// Admin
router.post("/admin/sign-up", validate, adminAuth.SignUpAdmin);
router.post("/admin/login", validate, adminAuth.loginAdmin);
router.get("/admin/is-verify", authorize, adminAuth.verifyAdmin);
router.get("/admin/dashboard", authorize, adminAuth.getAdminDashboard);

// Employee
router.post("/employee/create", validate, employeeAuth.createEmployee);
router.post("/employee/login", validate, employeeAuth.loginEmployee);
router.get("/employee/is-verify", authorize, employeeAuth.verifyEmployee);
router.get("/employee/dashboard", authorize, employeeAuth.getEmployeeDashboard);

// Manager

router.post("/manager/login", validate, managerAuth.loginManager);
router.get("/manager/is-verify", authorize, managerAuth.verifyManager);
router.get("/manager/dashboard", authorize, managerAuth.getManagerDashboard);

module.exports = router;
