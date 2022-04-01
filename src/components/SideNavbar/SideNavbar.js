import Logo from "../Logo/Logo";

import {
  MdDashboard,
  MdListAlt,
  MdAdd,
  MdPublic,
  MdHistory,
  MdSettings,
  MdLogout,
} from "react-icons/md";

const SideNavbar = () => {
  return (
    <div className="SideNavbar">
      <Logo />
      <ul>
        <li>
          <MdDashboard className="icon" />
          Dashboard
        </li>
        <li>
          <MdListAlt className="icon" />
          Tasks
        </li>
        <li>
          <MdAdd className="icon" />
          Create Task
        </li>
        <li>
          <MdPublic className="icon" />
          Feed
        </li>
        <li>
          <MdHistory className="icon" />
          Records
        </li>
        <li>
          <MdSettings className="icon" />
          Settings
        </li>
        <li>
          <MdLogout className="icon" />
          Sign out
        </li>
      </ul>
    </div>
  );
};

export default SideNavbar;
