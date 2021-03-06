const queries = require("./apiQueries");
const authorize = require("./auth/jwt/authorize");
const pool = require("./db");

/*
#########################
 Admin
#########################
 */

// Employees
// View employees
const getEmployees = async (req, res) => {
  try {
    const getEmployees = await pool.query(queries.getEmployees);
    res.json(getEmployees.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single employee
const getSingleEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const getSingleEmployee = await pool.query(queries.getEmployeeById, [
      employeeId,
    ]);
    res.json(getSingleEmployee.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Edit employee
const updateEmployee = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const {
      first_name,
      last_name,
      telephone_number,
      manager,
      employee_status,
      employee_email,
      employee_password,
    } = req.body;

    const getEmployee = await pool.query(queries.getEmployeeById, [employeeId]);

    const editEmployee = getEmployee.rows[0];

    if (getEmployee.rowCount > 0) {
      editEmployee.first_name = first_name
        ? await pool.query(queries.updateEmpName, [first_name, employeeId])
        : editEmployee.first_name;
      editEmployee.last_name = last_name
        ? await pool.query(queries.updateEmpLastName, [last_name, employeeId])
        : editEmployee.last_name;
      editEmployee.telephone_number = telephone_number
        ? await pool.query(queries.updateEmpTelNr, [
            telephone_number,
            employeeId,
          ])
        : editEmployee.telephone_number;
      editEmployee.manager = manager
        ? await pool.query(queries.updateIfManager, [manager, employeeId])
        : editEmployee.manager;
      editEmployee.employee_status = employee_status
        ? await pool.query(queries.updateStatus, [employee_status, employeeId])
        : editEmployee.employee_status;
      editEmployee.employee_email = employee_email
        ? await pool.query(queries.updateEmail, [employee_email, employeeId])
        : editEmployee.employee_email;
      editEmployee.employee_password = employee_password
        ? await pool.query(queries.updatePassword, [
            employee_password,
            employeeId,
          ])
        : editEmployee.employee_password;
    }
    res.json("Employee updated successfully!");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Departments
// Create Department
const createDepartment = async (req, res) => {
  try {
    const { department_name, department_status } = req.body;

    await pool.query(queries.createDepartment, [
      department_name,
      department_status,
    ]);
    res.json("Department created successfully!");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// View department
const getDepartments = async (req, res) => {
  try {
    const getDepartments = await pool.query(queries.getDepartments);
    res.json(getDepartments.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single department
const getSingleDepartment = async (req, res) => {
  try {
    const { departmentId } = req.params;
    const getSingleDep = await pool.query(queries.getDepartmentById, [
      departmentId,
    ]);
    res.json(getSingleDep.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Edit department
const updateDepartment = async (req, res) => {
  try {
    const { departmentId } = req.params;
    const { department_name, department_status } = req.body;

    const getSingleDepot = await pool.query(queries.getDepartmentById, [
      departmentId,
    ]);

    const editDepot = getSingleDepot.rows[0];

    if (getSingleDepot.rowCount > 0) {
      editDepot.department_name = department_name
        ? await pool.query(queries.updateDepName, [
            department_name,
            departmentId,
          ])
        : editDepot.department_name;
      editDepot.department_status = department_status
        ? await pool.query(queries.updateDepStatus, [
            department_status,
            departmentId,
          ])
        : editDepot.department_status;
    }
    res.json("Department updated successfully!");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/*
######################
Employee
#####################
*/

// View employee
const getEmployeeDetails = async (req, res) => {
  try {
    const getSingleEmployee = await pool.query(queries.getEmployeeById, [
      req.user,
    ]);
    res.json(getSingleEmployee.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEmployeeDetails = async (req, res) => {
  try {
    const { employeeId } = req.params;
    const {
      first_name,
      last_name,
      telephone_number,
      employee_email,
      employee_password,
    } = req.body;

    const getEmployee = await pool.query(queries.getEmployeeById, [employeeId]);

    const editEmployee = getEmployee.rows[0];

    if (getEmployee.rowCount > 0) {
      editEmployee.first_name = first_name
        ? await pool.query(queries.updateEmpName, [first_name, req.user])
        : editEmployee.first_name;
      editEmployee.last_name = last_name
        ? await pool.query(queries.updateEmpLastName, [last_name, req.user])
        : editEmployee.last_name;
      editEmployee.telephone_number = telephone_number
        ? await pool.query(queries.updateEmpTelNr, [telephone_number, req.user])
        : editEmployee.telephone_number;
      editEmployee.employee_email = employee_email
        ? await pool.query(queries.updateEmail, [employee_email, req.user])
        : editEmployee.employee_email;
      editEmployee.employee_password = employee_password
        ? await pool.query(queries.updatePassword, [
            employee_password,
            req.user,
          ])
        : editEmployee.employee_password;
    }
    res.json("Employee updated successfully!");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getEmployees,
  getSingleEmployee,
  updateEmployee,
  createDepartment,
  getDepartments,
  getSingleDepartment,
  updateDepartment,
  getEmployeeDetails,
  updateEmployeeDetails,
};
