import { Sidebar, Menu, MenuItem, MenuItemProps, menuClasses } from "react-pro-sidebar";
import Logo from "../assets/logo.svg";
import RadixIcon from "../assets/sidebar/radix.svg";
import MenuIcon from "../assets/sidebar/menu.svg";
import SettingsIcon from "../assets/sidebar/settings.svg";
import LogoutIcon from "../assets/sidebar/logout.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const PRIMARY_COLOR = "#2B6C57";
const ACTIVE_COLOR = "#F0F9F6";
const TEXT_FG = "#555";

function CustomMenuItem({
  component,
  icon,
  isCollapsed,
  children,
  active,
  onClick,
  color,
}: MenuItemProps & { isCollapsed: boolean }) {
  return (
    <MenuItem
      icon={icon}
      component={component}
      active={active}
      onClick={onClick}
      rootStyles={{
        fontFamily: "nunito",
        width: "100%",
        cursor: "pointer",
        color: color || TEXT_FG,
        marginBottom: 10,
        "&:hover": {
          color: PRIMARY_COLOR,
        },
        ["." + menuClasses.icon]: {
          color: "gray",
          "&:hover": {
            color: PRIMARY_COLOR,
          },
        },
        ["." + menuClasses.button]: {
          margin: `${isCollapsed ? "0 5px" : "0 10px"}`,
          borderRadius: "5px",
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: `${ACTIVE_COLOR} !important`,
          },
        },
        ["." + menuClasses.button + "." + menuClasses.active]: {
          backgroundColor: ACTIVE_COLOR,
          color: PRIMARY_COLOR,
        },
      }}
    >
      {children}
    </MenuItem>
  );
}

function Divider() {
  return <div className="h-[1px] bg-[#F0F0F0] my-8"></div>;
}

export default function SideBar() {
  const [activeTab, setActiveTab] = useState("");
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Sidebar style={{ height: "100vh", width: "200px" }}>
      <div className="h-[100%] flex flex-col items-center py-4 bg-white ">
        <img src={Logo} alt="app-logo" className="w-[90.2px] h-[56px] mb-12" />

        <Menu>
          <CustomMenuItem
            component={<Link to="/" />}
            isCollapsed={false}
            icon={<img src={RadixIcon} />}
            active={activeTab === ""}
            onClick={() => setActiveTab("")}
          >
            Dashboard
          </CustomMenuItem>
          <CustomMenuItem isCollapsed={false} icon={<img src={MenuIcon} />} active={false}>
            Menus
          </CustomMenuItem>
          <CustomMenuItem isCollapsed={false} icon={<img src={SettingsIcon} />} active={false}>
            Settings
          </CustomMenuItem>

          <Divider />

          <div className="mx-auto w-[40px] h-[40px] rounded-full">
            <img
              src={user?.logo?.secure_url}
              alt="User Logo"
              className="rounded-full w-[100%] h-[100%] bg-contain"
            />
          </div>

          <Divider />

          <CustomMenuItem
            isCollapsed={false}
            icon={<img src={LogoutIcon} />}
            active={false}
            color="#D42B2B"
          >
            Logout
          </CustomMenuItem>
        </Menu>
      </div>
    </Sidebar>
  );
}
