const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">Logo</div>
        <ul className="navbar-menu">
          <li>Home</li>
          <li>Tasks</li>
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
