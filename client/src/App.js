import React, { useState } from "react";
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
import UserLogin from "./pages/login/UserLogin";
import AdminLogin from "./pages/login/AdminLogin";

// Dashboards
import Dashboard from "./pages/dashboards/Dashboard";
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
              path="/user/login"
              render={(props) =>
                !isAuthenticated ? (
                  <UserLogin {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboard" />
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
              path="/dashboard"
              render={(props) =>
                isAuthenticated ? (
                  <Dashboard {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route path="/*" render={(props) => <Home {...props} />} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
