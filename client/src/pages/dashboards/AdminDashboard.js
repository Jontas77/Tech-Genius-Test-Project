import React, { useState } from "react";
import HeaderDashboard from "./components/HeaderDashboard";
import AdminSideNav from "./components/AdminSideNav";
import Employees from "./components/Employees";
import CreateEmployee from "./components/CreateEmployee";
import EditEmployee from "./components/EditEmployee";
import Departments from "./components/Departments";
import CreateDepartment from "./components/CreateDepartment";
import EditDepartment from "./components/EditDepartment";
import { Col, Row } from "reactstrap";

const AdminDashboard = ({ setAuth }) => {
  const [page, setPage] = useState("");

  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: "10px",
      width: "100%",
    },
  };

  return (
    <>
      <Row>
        <Col>
          <HeaderDashboard setAuth={setAuth} />
        </Col>
      </Row>
      <div style={styles.contentDiv}>
        <AdminSideNav setPage={setPage} />
        <div style={styles.contentMargin}>
          {page === "employees" ? (
            <Employees setPage={setPage} />
          ) : page === "createEmployee" ? (
            <CreateEmployee setPage={setPage} />
          ) : page === "editEmployee" ? (
            <EditEmployee setPage={setPage} />
          ) : page === "departments" ? (
            <Departments setPage={setPage} />
          ) : page === "createDepartment" ? (
            <CreateDepartment setPage={setPage} />
          ) : page === "editDepartment" ? (
            <EditDepartment setPage={setPage} />
          ) : (
            <>
              <h2>Welcome Admin</h2>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
