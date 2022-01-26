// Employee queries
const checkEmployeeEmail = "SELECT * FROM employees WHERE email = $1";

const getEmployeeById = "SELECT first_name FROM employees WHERE id = $1";

// Manager queries
const checkManagerEmail = "SELECT * FROM managers WHERE email = $1";

const getManagerById = "SELECT manager_name FROM managers WHERE id = $1";

// Admin queries
const checkAdminEmail = "SELECT * FROM hr_admin WHERE email = $1";

// const registerAdmin = "INSERT INTO admins (admin_name, admin_email, admin_password) VALUES ($1, $2, $3) RETURNING *";

const getAdminById = "SELECT admin_name FROM hr_admin WHERE id = $1";

module.exports = {
  checkEmployeeEmail,
  getEmployeeById,
  checkManagerEmail,
  getManagerById,
  checkAdminEmail,
  // registerAdmin,
  getAdminById,
};
