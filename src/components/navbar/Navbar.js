import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">Logo</div>
        <ul className="navbar-menu">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/create_task")}>Tasks</li>
        </ul>
        <img
          src="https://i.imgur.com/jydEUGE.jpg"
          className="navbar-user-profile"
          alt="User Profile"
        />
      </div>
    </nav>
  );
};

export default Navbar;
