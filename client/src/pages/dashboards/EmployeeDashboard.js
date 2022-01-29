import React, { useState } from "react";
import HeaderDashboard from "./components/HeaderDashboard";
import SideNav from "./components/SideNav";
import { Col, Row } from "reactstrap";

const EmployeeDashboard = ({ setAuth }) => {
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
        <SideNav setPage={setPage} />
        <div style={styles.contentMargin}>
          {/* {page === "profile" ? (
						<Profile setPage={setPage} />
					) : page === "projects" ? (
						<Projects setPage={setPage} project={project} />
					) : page === "competitions" ? (
						<Competitions setPage={setPage} />
					) : ( */}
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
          {/* )} */}
        </div>
      </div>
    </>
  );
};

export default EmployeeDashboard;
