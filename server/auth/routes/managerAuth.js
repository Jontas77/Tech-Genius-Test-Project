const pool = require("../../db");
const queries = require("./queries");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");

const createManager = async (req, res) => {
  try {
    const {
      manager = "",
      first_name,
      last_name,
      employee_email,
      employee_password,
    } = req.body;

    const isManager = await pool.query(queries.checkIfManager, [manager]);
    if (isManager.rows.length > 0) {
      await pool.query(queries.createManager, [
        `${first_name} ${last_name}`,
        employee_email,
        employee_password,
      ]);
    } else {
      return res.status(401).json("Not a manager");
    }
    // Generate jwt token
    const token = jwtGenerator(newManager.rows[0].manager_id);

    res.json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
};

const loginManager = async (req, res) => {
  try {
    const { manager_email, manager_password } = req.body;

    const manager = await pool.query(queries.checkManagerEmail, [
      manager_email,
    ]);
    if (admin.rows.length === 0) {
      return res.status(401).json("Password or Email incorrect");
    }

    const validPassword = await bcrypt.compare(
      manager_password,
      manager.rows[0].manager_password
    );

    if (!validPassword) {
      return res.status(401).json("Password or Email incorrect");
    }

    const token = jwtGenerator(manager.rows[0].manager_id);

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
  createManager,
  loginManager,
  verifyManager,
  getManagerDashboard,
};
