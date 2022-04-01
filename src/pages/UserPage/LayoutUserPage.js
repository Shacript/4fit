import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import SideNavbar from "../../components/SideNavbar/SideNavbar";

const LayoutUserPage = () => {
  return (
    <div className="LayoutUserPage">
      <SideNavbar />
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default LayoutUserPage;
