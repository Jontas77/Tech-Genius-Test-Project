// Employee queries
const checkEmployeeEmail = "SELECT * FROM employees WHERE employee_email = $1";

const createEmployee =
  "INSERT INTO employees (first_name, last_name, telephone_number, manager, employee_status, employee_email, employee_password) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";

const getEmployeeById =
  "SELECT first_name FROM employees WHERE employee_id = $1";

// Manager queries
const checkManagerEmail = "SELECT * FROM managers WHERE manager_email = $1";

const checkIfManager = "SELECT * FROM employees WHERE manager = $1";

const createManager =
  "INSERT INTO managers ( manager_name, manager_email, manager_password, employee_id) VALUES ($1, $2, $3, $4) RETURNING *";

const getManagerById =
  "SELECT first_name FROM employees WHERE employee_id = $1";

// Admin queries
const checkAdminEmail = "SELECT * FROM admin WHERE admin_email = $1";

const signUpAdmin =
  "INSERT INTO admin (admin_name, admin_email, admin_password) VALUES ($1, $2, $3) RETURNING *";

const getAdminById = "SELECT admin_name FROM admin WHERE admin_id = $1";

module.exports = {
  checkEmployeeEmail,
  createEmployee,
  getEmployeeById,
  checkManagerEmail,
  checkIfManager,
  createManager,
  getManagerById,
  checkAdminEmail,
  signUpAdmin,
  getAdminById,
};
