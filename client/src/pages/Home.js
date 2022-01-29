import React from "react";
import LoginMenu from "./dashboards/components/LoginMenu";

const Home = () => {
  return (
    <main role="main">
      <center>
        <div className="login-menu jumbotron mt-5">
          <h1 className="message" data-qa="message">
            HR ADMINISTRATION SYSTEM
          </h1>
          <h6 className="register-link mt-2">Please Log in to continue</h6>
          <LoginMenu />
        </div>
      </center>
    </main>
  );
};

export default Home;
