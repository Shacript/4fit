import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import SideNavbar from "../../components/SideNavbar/SideNavbar";

const LayoutUserPage = () => {
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
