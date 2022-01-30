import React, { useState, useEffect } from "react";
import "./Employee.css";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    const response = await fetch("/api/employees", {
      method: "GET",
      headers: { token: localStorage.token },
    });

    const parseResponse = await response.json();
    setEmployees(parseResponse);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div>
      <h2>Employees</h2>
      <fieldset>
        <div className="d-block mt-5 filter">
          <legend>Filters</legend>
          <div className="display-block">
            <div className="filter-dropdown">
              <p>Status</p>
              <select>
                <option value="">Active Only / (All) / Deactivate Only</option>
                <option value="all">All</option>
                <option value="active">Active</option>
                <option value="deactivate">Deactivate</option>
              </select>
            </div>
            <div className="filter-dropdown">
              <p>Department</p>
              <select>
                <option value="">--Select--</option>
              </select>
            </div>
            <div className="filter-dropdown">
              <p>Manager</p>
              <select>
                <option value="">--Select--</option>
              </select>
            </div>
          </div>
          <button className="btn btn-warning">Filter</button>
        </div>
      </fieldset>
      <div className="search">
        <div>
          <label>
            Show per page
            <select className="ms-3">
              <option value="">10 / 20 / 50 / 100 / All</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="all">All</option>
            </select>
          </label>
        </div>
        <div>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <table className="table table-hover table-striped mt-5">
        <thead>
          <tr>
            <th scope="col">Actions</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Telephone Number</th>
            <th scope="col">Email Address</th>
            <th scope="col">Manager</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, idx) => (
            <tr key={idx}>
              <td>{}</td>
              <td>{emp.first_name}</td>
              <td>{emp.last_name}</td>
              <td>{emp.telephone_number}</td>
              <td>{emp.employee_email}</td>
              <td>{emp.manager}</td>
              <td>{emp.employee_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
