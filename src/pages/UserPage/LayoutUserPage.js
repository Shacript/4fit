import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SideNavbar from "../../components/SideNavbar/SideNavbar";

import { getUserInfomation } from "../../state/auth/authReducer";

const LayoutUserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserInfomation()).then((res) => {
      if (res.error) navigate("/");
    });
  }, [dispatch, navigate]);

  return (
    <div className="LayoutUserPage">
      <SideNavbar />
      <div className="LayoutOutlet">
        <Suspense fallback={<h1>Loading . . .</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default LayoutUserPage;
