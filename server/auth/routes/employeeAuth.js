const pool = require("../../db");
const queries = require("./queries");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");

const createEmployee = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      telephone_number,
      manager,
      employee_status,
      employee_email,
      employee_password = "Password123#",
    } = req.body;

    const employee = await pool.query(queries.checkEmployeeEmail, [
      employee_email,
    ]);
    if (employee.rows.length > 0) {
      return res.status(401).json("Employee already exists!");
    }

    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(employee_password, salt);

    const newEmployee = await pool.query(queries.createEmployee, [
      first_name,
      last_name,
      telephone_number,
      manager,
      employee_status,
      employee_email,
      bcryptPassword,
    ]);

    // Generate jwt token
    const token = jwtGenerator(newEmployee.rows[0].employee_id);

    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
};

const loginEmployee = async (req, res) => {
  try {
    const { employee_email, employee_password } = req.body;

    const employee = await pool.query(queries.checkEmployeeEmail, [
      employee_email,
    ]);
    if (employee.rows.length === 0) {
      return res.status(401).json("Password or Email incorrect");
    }

    const validPassword = await bcrypt.compare(
      employee_password,
      employee.rows[0].employee_password
    );

    if (!validPassword) {
      return res.status(401).json("Password or Email incorrect");
    }

    const token = jwtGenerator(employee.rows[0].employee_id);

    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

const verifyEmployee = async (req, res) => {
  try {
    res.json(true);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
};

const getEmployeeDashboard = async (req, res) => {
  try {
    const employee = await pool.query(queries.getEmployeeById, [req.user]);

    res.json(employee.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  createEmployee,
  loginEmployee,
  verifyEmployee,
  getEmployeeDashboard,
};
