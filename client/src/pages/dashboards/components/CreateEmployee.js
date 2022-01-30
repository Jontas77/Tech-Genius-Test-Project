import React from "react";
import "./CreateEmployee.css";

const createEmployee = () => {
  return (
    <div className="p-3">
      <h2 className="mb-5">Create Employee</h2>
      <form>
        <label>
          Name
          <input type="text" placeholder="Enter your name" required />
        </label>
        <br />
        <label>
          Surname
          <input type="text" placeholder="Enter your surname" required />
        </label>
        <br />
        <label>
          Telephone Number
          <input type="number" placeholder="Enter your Tel nr" required />
        </label>
        <br />
        <label>
          Email Address
          <input type="email" placeholder="Enter your email" required />
        </label>
        <br />
        <label>
          Manager
          <select>
            <option value="">--Select--</option>
          </select>
        </label>
        <br />
        <div className="create-btn">
          <button className="btn btn-success me-3">Save</button>
          <button className="btn btn-danger">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default createEmployee;
