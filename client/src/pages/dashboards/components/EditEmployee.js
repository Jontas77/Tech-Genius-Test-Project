import React from "react";
import "./CreateEmployee.css";

const EditEmployee = () => {
  return (
    <div className="p-3">
      <h2 className="mb-5">Edit Employee</h2>
      <form>
        <label>
          Name
          <input type="text" />
        </label>
        <br />
        <label>
          Surname
          <input type="text" />
        </label>
        <br />
        <label>
          Telephone Number
          <input type="number" />
        </label>
        <br />
        <label>
          Email Address
          <input type="email" />
        </label>
        <br />
        <label>
          Manager
          <select>
            <option value="">--Select--</option>
          </select>
        </label>
        <br />
        <label>
          Status
          <select>
            <option value="">-Select- / Active / Inactive</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
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

export default EditEmployee;
