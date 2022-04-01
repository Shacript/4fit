import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../components/Logo/Logo";

const AuthenticationPage = () => {
  return (
    <div className="AuthenticationPage">
      <Logo />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default AuthenticationPage;
