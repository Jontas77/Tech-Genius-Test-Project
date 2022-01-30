import React from "react";
import HeaderDashboard from "./components/HeaderDashboard";
import UserSideNav from "./components/UserSideNav";
import { Col, Row } from "reactstrap";

const EmployeeDashboard = ({ setAuth }) => {
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
        <UserSideNav />
        <div style={styles.contentMargin}>
          <>
            <h1>Welcome Employee</h1>
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
        </div>
      </div>
    </>
  );
};

export default EmployeeDashboard;
