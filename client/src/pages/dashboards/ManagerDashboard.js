import React, { useState } from "react";
import HeaderDashboard from "./components/HeaderDashboard";
import ManagerSideNav from "./components/ManagerSideNav";
import EmpPerDepot from "./components/EmpPerDepot";
import DepotPerManager from "./components/DepotPerManager";
import { Col, Row } from "reactstrap";

const ManagerDashboard = ({ setAuth }) => {
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
        <ManagerSideNav setPage={setPage} />
        <div style={styles.contentMargin}>
          {page === "employees" ? (
            <EmpPerDepot setPage={setPage} />
          ) : page === "departments" ? (
            <DepotPerManager setPage={setPage} />
          ) : (
            <>
              <h1>Welcome Manager</h1>
              <table className="table table-hover mt-5">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Project Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
              </table>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ManagerDashboard;
