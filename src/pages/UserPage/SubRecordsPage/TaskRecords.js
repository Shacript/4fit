import React, { useEffect, useState } from "react";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import RecordService from "../../../services/record.service";

const TaskRecords = ({ date }) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    RecordService.getUesrRecords("task_record", date).then(({ data }) =>
      setRecords(data.map((record) => ({ ...record, view: false })))
    );
  }, [date]);

  const calculateActivityAllTimeToBeTimeFormat = (activitys) => {
    const initialValue = 0;
    return new Date(
      Math.floor(
        activitys.reduce(
          (previousValue, currentValue) =>
            previousValue + currentValue.duration,
          initialValue
        )
      ) * 1000
    )
      .toISOString()
      .substring(11, 19);
  };

  const convertSecondToTimeFormat = (seconds) => {
    return new Date(seconds * 1000).toISOString().substring(11, 19);
  };

  const switchActivityView = (index) => {
    const newRecords = [...records];
    newRecords[index].view = !newRecords[index].view;
    setRecords(newRecords);
  };

  return (
    <div className="TaskRecords">
      <div className="table">
        <div className="row">
          <div className="column-left">Task/Activity name</div>
          <div className="column-right">Task/Activity time used</div>
        </div>
        {records.map((record, index) => (
          <React.Fragment key={index}>
            <div className="row">
              <div className="column-left">
                <span>
                  {new Date(record.timestamp).toLocaleTimeString()} :{" "}
                  {record.name}
                </span>
                {record.view ? (
                  <FaEye onClick={() => switchActivityView(index)} />
                ) : (
                  <FaEyeSlash onClick={() => switchActivityView(index)} />
                )}
              </div>
              <div className="column-right">
                {calculateActivityAllTimeToBeTimeFormat(record.activities)}
              </div>
            </div>
            {record.view && (
              <div className="row underline">
                <div className="column-detail">
                  <h5>{record.note ? "Note" : "Description"}</h5>
                  <span>{record.note ? record.note : record.description}</span>
                </div>
                <div className="big-activity">
                  {record.activities.map((activity, activity_index) => (
                    <div className="activity" key={activity_index}>
                      <div className="column-left">{activity.name}</div>
                      <div className="column-right">
                        {convertSecondToTimeFormat(activity.duration)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TaskRecords;
