const pool = require("../../db");
const queries = require("./queries");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");

const loginManager = async (req, res) => {
  try {
    const { manager = "", employee_email, employee_password } = req.body;

    const isManager = await pool.query(queries.checkIfManager, [manager]);

    const validateEmail = await pool.query(queries.checkEmployeeEmail, [
      employee_email,
    ]);
    if (validateEmail.rows.length === 0) {
      return res.status(401).json("Password or Email incorrect");
    }

    const validPassword = await bcrypt.compare(
      employee_password,
      isManager.rows[0].employee_password
    );

    if (!validPassword) {
      return res.status(401).json("Password or Email incorrect");
    }

    const token = jwtGenerator(isManager.rows[0].employee_id);

    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
};

const verifyManager = async (req, res) => {
  try {
    res.json(true);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
};

const getManagerDashboard = async (req, res) => {
  try {
    const manager = await pool.query(queries.getManagerById, [req.user]);

    res.json(manager.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
};

module.exports = {
  loginManager,
  verifyManager,
  getManagerDashboard,
};
