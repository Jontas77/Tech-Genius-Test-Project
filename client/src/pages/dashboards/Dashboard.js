import React, { useState, useEffect } from "react";
import EmployeeDashboard from "./EmployeeDashboard";
import ManagerDashboard from "./ManagerDashboard";

const Dashboard = ({ setAuth }) => {
  const [role, setRole] = useState("");

  const getEmployees = async () => {
    try {
      const response = await fetch("/api/employee", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseResponse = await response.json();
      setRole(parseResponse[0].roles);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div>
      {role === "employee" ? (
        <EmployeeDashboard setAuth={setAuth} />
      ) : role === "manager" ? (
        <ManagerDashboard setAuth={setAuth} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Dashboard;
