import Logo from "../Logo/Logo";

import {
  MdDashboard,
  MdListAlt,
  MdAdd,
  MdHistory,
  MdSettings,
  MdLogout,
} from "react-icons/md";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { logout } from "../../state/auth/authReducer";

const SideNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const menu = [
    {
      icon: <MdDashboard className="icon" />,
      label: "Dashboard",
      onClick: () => {
        navigate("dashboard");
      },
    },
    {
      icon: <MdListAlt className="icon" />,
      label: "Tasks",
      onClick: () => {
        navigate("tasks");
      },
    },
    {
      icon: <MdAdd className="icon" />,
      label: "Create Task",
      onClick: () => {
        navigate("create_task");
      },
    },
    {
      icon: <MdHistory className="icon" />,
      label: "Records",
      onClick: () => {
        navigate("records");
      },
    },
    {
      icon: <MdSettings className="icon" />,
      label: "Settings",
      onClick: () => {
        navigate("settings");
      },
    },
    {
      icon: <MdLogout className="icon" />,
      label: "Sign out",
      onClick: () => {
        dispatch(logout()).then(() => navigate("/"));
      },
    },
  ];

  return (
    <div className="SideNavbar">
      <Logo />
      <ul>
        {menu.map(({ icon, label, onClick }, i) => (
          <li onClick={onClick} key={i}>
            {icon}
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNavbar;
