import { useState } from "react";

import {
  FaRunning,
  FaBicycle,
  FaSwimmer,
  FaHiking,
  FaWalking,
  FaQuestion,
  FaEdit,
} from "react-icons/fa";

const activitys_init = [
  {
    name: "Warm-up",
    duration: 30,
    done: false,
  },
  {
    name: "Break",
    duration: 30,
    done: false,
  },
  {
    name: "Hard run",
    duration: 30,
    done: false,
  },
  {
    name: "Break",
    duration: 30,
    done: false,
  },
  {
    name: "I'm so tired so i'll walk instend",
    duration: 30,
    done: false,
  },
  {
    name: "It almost done keep running !",
    duration: 30,
    done: false,
  },
];

const ViewTaskPage = () => {
  const [activitys, setActivitys] = useState(activitys_init);
  const [currentActivity, setCurrentActivity] = useState(0);
  const [timeCountStatus, setTimeCountStatus] = useState(false);
  const [timeCountInterval, setTimeCountInterval] = useState(null);

  const currentDate = new Date().toDateString();

  const convertSecond = (seconds) => {
    return new Date(seconds * 1000).toISOString().substring(11, 19);
  };

  const forwardActivity = () => {
    setCurrentActivity(currentActivity + 1);
  };

  const backwardActivity = () => {
    setCurrentActivity(currentActivity - 1);
  };

  const triggerTimeCount = () => {
    if (timeCountStatus) {
      clearInterval(timeCountInterval);
      setTimeCountStatus(false);
      return;
    }

    const intervalId = setInterval(() => {
      let updatedActivitys = [...activitys];
      const idx = currentActivity;

      if (updatedActivitys[idx].duration > 0 && !updatedActivitys[idx].done) {
        updatedActivitys[idx].duration -= 1;
      } else if (
        updatedActivitys[idx].duration === 0 &&
        !updatedActivitys[idx].done
      ) {
        updatedActivitys[idx].done = true;
      }

      setActivitys(updatedActivitys);
    }, 1000);

    setTimeCountInterval(intervalId);
    setTimeCountStatus(true);
  };

  return (
    <div className="ViewTaskPage">
      <div className="header">
        <h3>View Task</h3>
        <p className="header-date">{currentDate}</p>
      </div>
      <div className="container">
        <div className="left">
          <div className="info-box">
            <FaRunning className="icon" />
            <div className="info-content">
              <p>Running Set</p>
              <p>10 mins</p>
            </div>
            <FaEdit className="icon edit-button" />
          </div>
          <div className="description">
            <h4>Description</h4>
            <p>Desciption will show on here.</p>
          </div>
          <div className="task-control">
            <button className="startAndPause-btn" onClick={triggerTimeCount}>
              {!timeCountStatus ? "Start" : "Pause"}
            </button>
            <button
              className="backward"
              onClick={backwardActivity}
              disabled={timeCountStatus}
            >
              {"<<"}
            </button>
            <button
              className="forward"
              onClick={forwardActivity}
              disabled={timeCountStatus}
            >
              {">>"}
            </button>
          </div>
        </div>
        <div className="right">
          <div className="activity-list">
            {activitys.map((activity, index) => (
              <div
                className={`activity ${
                  index === currentActivity ? "active" : ""
                }`}
                key={index}
              >
                <p className="activity-name">{activity.name}</p>
                <p className="time-count">{convertSecond(activity.duration)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTaskPage;
