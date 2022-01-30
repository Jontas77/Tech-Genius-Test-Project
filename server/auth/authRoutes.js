const router = require("express").Router();
const adminAuth = require("./routes/adminAuth");
const employeeAuth = require("./routes/userAuth");
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
router.post("/user/login", validate, employeeAuth.loginUser);
router.get("/employee/is-verify", authorize, employeeAuth.verifyUser);
router.get("/dashboard", authorize, employeeAuth.getDashboard);

// Manager

router.post("/manager/login", validate, managerAuth.loginManager);
router.get("/manager/is-verify", authorize, managerAuth.verifyManager);
router.get("/manager/dashboard", authorize, managerAuth.getManagerDashboard);

module.exports = router;
