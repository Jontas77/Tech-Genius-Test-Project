import React, { useState } from "react";
import "./CreateEmployee.css";

const CreateEmployee = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    telephone_number: "",
    employee_email: "",
    manager: "",
  });

  const onChange = (e) => {
    return setUser((user) => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const myHeaders = new Headers();

      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("token", localStorage.token);

      const body = user;

      const response = await fetch("/auth/employee/create", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(body),
      });

      const parseResponse = await response.json();
      console.log(parseResponse);
    } catch (error) {
      console.error(error.message);
    }
  };

  const { first_name, last_name, telephone_number, employee_email, manager } =
    user;
  return (
    <div className="p-3">
      <h2 className="mb-5">Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="first_name"
            value={first_name}
            onChange={(e) => onChange(e)}
            placeholder="Enter your name"
            required
          />
        </label>
        <br />
        <label>
          Surname
          <input
            type="text"
            name="last_name"
            value={last_name}
            onChange={(e) => onChange(e)}
            placeholder="Enter your surname"
            required
          />
        </label>
        <br />
        <label>
          Telephone Number
          <input
            type="number"
            name="telephone_number"
            value={telephone_number}
            onChange={(e) => onChange(e)}
            placeholder="Enter your Tel nr"
            required
          />
        </label>
        <br />
        <label>
          Email Address
          <input
            type="email"
            name="employee_email"
            value={employee_email}
            onChange={(e) => onChange(e)}
            placeholder="Enter your email"
            required
          />
        </label>
        <br />
        <label>
          Manager
          <select>
            <option value="">--Select--</option>
            <option name="manager" value={manager}>
              Manager1
            </option>
            <option name="manager" value={manager}>
              Manager2
            </option>
            <option name="manager" value={manager}>
              Manager3
            </option>
          </select>
        </label>
        <br />
        <div className="create-btn">
          <button type="submit" className="btn btn-success me-3">
            Save
          </button>
          <button className="btn btn-danger">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CreateEmployee;
