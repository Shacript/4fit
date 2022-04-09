import { Suspense } from "react";
import DatePicker from "react-multi-date-picker";
import Icon from "react-multi-date-picker/components/icon";
import { Outlet } from "react-router-dom";

const RecordsPage = () => {
  const currentDate = new Date().toDateString();

  return (
    <div className="RecordsPage">
      <div className="header">
        <h3>Dashboard</h3>
        <p className="header-date">{currentDate}</p>
        <DatePicker render={<Icon />} />
      </div>
      <div>
        <div>Task Record</div>
        <div>Weight Record</div>
      </div>
      <div>
        <Suspense fallback={<h1>Loading . . .</h1>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default RecordsPage;
