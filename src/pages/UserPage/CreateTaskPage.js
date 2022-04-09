import { useState } from "react";
import Card from "../../components/Card/Card";
import DatePicker from "react-multi-date-picker";

import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const CreateTaskPage = () => {
  const [activitys, setActivitys] = useState([
    {
      name: "Warm-up",
      duration: 30,
    },
  ]);

  const convertSecond = (seconds) => {
    return new Date(seconds * 1000).toISOString().substring(11, 19);
  };

  return (
    <div className="CreateTaskPage">
      <div className="header">
        <h3>Create Task</h3>
      </div>
      <div className="container">
        <div className="left">
          <Card icon="run" topText="Running Set" bottomText="10 mins" />
          <input type="text" placeholder="Task name" />
          <textarea placeholder="Description" />
          <DatePicker
            multiple
            inputClass="custom-date-input"
            placeholder="Schedule date"
          />
          <select>
            <option>run</option>
            <option>bicycleRide</option>
            <option>swim</option>
            <option>walk</option>
            <option>hike</option>
            <option>other</option>
          </select>
          <button>Done</button>
        </div>
        <div className="right">
          <form>
            <input type="text" placeholder="Activity Name" />
            <input type="text" placeholder="Activity Time" />
            <button type="submit">Add Activity</button>
          </form>
          <div className="activity-list">
            {activitys.map((activity, index) => (
              <div className="activity" key={index}>
                <p className="activity-name">{activity.name}</p>
                <p className="time-count">{convertSecond(activity.duration)}</p>
                <FaEdit className="icon edit-button" />
                <FaRegTrashAlt className="icon remove-button" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskPage;
