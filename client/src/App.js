import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";

// Log in
import EmployeeLogin from "./pages/login/EmployeeLogin";
import ManagerLogin from "./pages/login/ManagerLogin";
import AdminLogin from "./pages/login/AdminLogin";

// Dashboards
import EmployeeDashboard from "./pages/dashboards/EmployeeDashboard";
import ManagerDashboard from "./pages/dashboards/ManagerDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";

toast.configure();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route
              exact
              path="/admin/login"
              render={(props) =>
                !isAuthenticated ? (
                  <AdminLogin {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/admin/dashboard" />
                )
              }
            />
            <Route
              exact
              path="/manager/login"
              render={(props) =>
                !isAuthenticated ? (
                  <ManagerLogin {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/manager/dashboard" />
                )
              }
            />
            <Route
              exact
              path="/employee/login"
              render={(props) =>
                !isAuthenticated ? (
                  <EmployeeLogin {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/employee/dashboard" />
                )
              }
            />
            <Route
              exact
              path="/admin/dashboard"
              render={(props) =>
                isAuthenticated ? (
                  <AdminDashboard {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/admin/login" />
                )
              }
            />
            <Route
              exact
              path="/manager/dashboard"
              render={(props) =>
                isAuthenticated ? (
                  <ManagerDashboard {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/manager/login" />
                )
              }
            />
            <Route
              exact
              path="/employee/dashboard"
              render={(props) =>
                isAuthenticated ? (
                  <EmployeeDashboard {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/employee/login" />
                )
              }
            />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
