import { useState } from "react";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

const ManagerSideNav = ({ setPage }) => {
  const [collapsed, setCollapsed] = useState(false);

  // added styles
  const styles = {
    sideBarHeight: {
      height: "100vh",
    },
    menuIcon: {
      float: "right",
      margin: "10px",
    },
  };
  const onClickMenuIcon = () => {
    setCollapsed(!collapsed);
  };

  const handleClick = () => {};

  return (
    <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
      <SidebarHeader>
        <div style={styles.menuIcon} onClick={onClickMenuIcon}>
          <AiOutlineMenu />
        </div>
      </SidebarHeader>
      <Menu iconShape="square">
        <MenuItem icon={<AiOutlineUser />} onClick={() => setPage("")}>
          Dashboard
        </MenuItem>

        <SubMenu title="Employees" icon={<GrProjects />}>
          <MenuItem onClick={() => setPage("employees")}>
            View Employees
          </MenuItem>
          <MenuItem onClick={handleClick}>Edit Details</MenuItem>
        </SubMenu>
        <SubMenu title="Departments" icon={<GrProjects />}>
          <MenuItem onClick={() => setPage("departments")}>
            View Departments
          </MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};
export default ManagerSideNav;
