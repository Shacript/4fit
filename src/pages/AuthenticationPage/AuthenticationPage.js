import { Outlet } from "react-router-dom";

const AuthenticationPage = () => {
  return (
    <div className="AuthenticationPage">
      <div className="Logo">
        <h2>4FIT</h2>
        <h6>Exercise Tracker</h6>
      </div>
      <Outlet />
    </div>
  );
};

export default AuthenticationPage;
