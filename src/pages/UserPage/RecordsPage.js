import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import Icon from "react-multi-date-picker/components/icon";
import TaskRecords from "./SubRecordsPage/TaskRecords";
import WeightRecords from "./SubRecordsPage/WeightRecords";

const RecordsPage = () => {
  const [typeRecord, setTypeRecord] = useState("task_record");
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString()
  );

  return (
    <div className="RecordsPage">
      <div className="header">
        <h3>Dashboard</h3>
        <p className="header-date">{new Date(currentDate).toDateString()}</p>
        <DatePicker
          render={<Icon />}
          format={"M/D/YYYY"}
          value={currentDate}
          onChange={setCurrentDate}
        />
      </div>
      <div className="nav-header">
        <div onClick={() => setTypeRecord("task_record")}>Task Record</div>
        <div onClick={() => setTypeRecord("weight_record")}>Weight Record</div>
      </div>
      {typeRecord === "task_record" ? (
        <TaskRecords date={currentDate} />
      ) : (
        <WeightRecords date={currentDate} />
      )}
    </div>
  );
};

export default RecordsPage;
