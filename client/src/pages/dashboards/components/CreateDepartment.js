import React from "react";
import "./CreateEmployee.css";

const CreateDepartment = () => {
  return (
    <div className="p-3">
      <h2 className="mb-5">Create Department</h2>
      <form>
        <label>
          Name
          <input type="text" placeholder="Enter department name" required />
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

export default CreateDepartment;
