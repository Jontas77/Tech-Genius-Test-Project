import React, { useState } from "react";

// router
import { withRouter } from "react-router-dom";

// styling
import "./Menu.css";

const Menu = (props) => {
  // conditionally render dropdown affect based on this boolean
  const [openMenu, setOpenMenu] = useState(false);

  // parameter num corresponds to .open-# classes
  // is assigned when Menu clicked triggering animated dropdown
  const setClassNames = (num) => {
    const classArr = ["m-item"];
    if (openMenu) {
      classArr.push(`open-${num}`);
    }
    return classArr.join(" ");
  };

  // takes route string as parameter
  const pushToRoute = (route) => {
    props.history.push(route);
    setOpenMenu(false);
  };

  return (
    <div className="Menu">
      <div className={"m-item m-logo"} onClick={() => setOpenMenu(!openMenu)}>
        Log in
      </div>
      <div
        className={setClassNames(1)}
        onClick={() => pushToRoute("/user/login")}
      >
        User
      </div>
      <div
        className={setClassNames(2)}
        onClick={() => pushToRoute("/admin/login")}
      >
        Admin
      </div>
    </div>
  );
};

export default withRouter(Menu);
