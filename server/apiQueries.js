// Admin
// Employees
const getEmployees = "SELECT * FROM employees";

const getEmployeeById = "SELECT * FROM employees WHERE employee_id = $1";

const updateEmpName =
  "UPDATE employees SET first_name = $1 WHERE employee_id = $2";
const updateEmpLastName =
  "UPDATE employees SET last_name = $1 WHERE employee_id = $2";
const updateEmpTelNr =
  "UPDATE employees SET telephone_number = $1 WHERE employee_id = $2";
const updateIfManager =
  "UPDATE employees SET manager = $1 WHERE employee_id = $2";
const updateStatus =
  "UPDATE employees SET employee_status = $1 WHERE employee_id = $2";
const updateEmail =
  "UPDATE employees SET employee_email = $1 WHERE employee_id = $2";
const updatePassword =
  "UPDATE employees SET employee_password = $1 WHERE employee_id = $2";

// Departments
const createDepartment =
  "INSERT INTO departments (department_name, department_status) VALUES ($1, $2) RETURNING *";

const getDepartments = "SELECT * FROM departments";

const getDepartmentById = "SELECT * FROM departments WHERE department_id = $1";

const updateDepName =
  "UPDATE departments SET department_name = $1 WHERE department_id = $2";
const updateDepStatus =
  "UPDATE departments SET department_status = $1 WHERE department_id = $2";

module.exports = {
  getEmployees,
  getEmployeeById,
  updateEmpName,
  updateEmpLastName,
  updateEmpTelNr,
  updateIfManager,
  updateStatus,
  updateEmail,
  updatePassword,
  createDepartment,
  getDepartments,
  getDepartmentById,
  updateDepName,
  updateDepStatus,
};
