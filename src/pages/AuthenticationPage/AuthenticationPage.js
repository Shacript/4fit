import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Logo from "../../components/Logo/Logo";

import { getUserInfomation } from "../../state/auth/authReducer";

const AuthenticationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserInfomation()).then((res) => {
      if (!res.error) navigate("/dashboard");
    });
  }, [dispatch, navigate]);

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
