import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SideNavbar from "../../components/SideNavbar/SideNavbar";

import { checkIfLogined } from "../../state/auth/authReducer";

const LayoutUserPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authSelector = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkIfLogined()).then((res) => {
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
