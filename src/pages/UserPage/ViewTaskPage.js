import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Card from "../../components/Card/Card";
import ComfirmSaveRecordModal from "../../components/ComfirmSaveRecordModal/ComfirmSaveRecordModal";

import TaskService from "../../services/task.service";

const ViewTaskPage = () => {
  const [type, setType] = useState("other");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [activitys, setActivitys] = useState([]);
  const [currentActivity, setCurrentActivity] = useState(0);
  const [timeCountStatus, setTimeCountStatus] = useState(false);
  const [timeCountInterval, setTimeCountInterval] = useState(null);

  const [task, setTask] = useState({});

  const [openSaveModal, setOpenSaveModal] = useState(false);

  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await TaskService.getUserTask(params._id);
        setActivitys(
          data.activities.map((activity) => ({
            ...activity,
            done: false,
            usedTime: 0,
          }))
        );
        setName(data.name);
        setType(data.type);
        setDescription(data.description);
        setTask(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [params]);

  const currentDate = new Date().toDateString();

  const convertSecond = (seconds) => {
    return new Date(seconds * 1000).toISOString().substring(11, 19);
  };

  const checkIfThereAnyUsedTime = () => {
    return activitys.find((activity) => activity.usedTime > 0);
  };

  const checkIfThereAnyDoneLeft = () => {
    return activitys.find((activity) => activity.done === false);
  };

  const forwardActivity = () => {
    setCurrentActivity((prevCurrentActivity) => {
      if (prevCurrentActivity + 1 >= activitys.length) return 0;
      return prevCurrentActivity + 1;
    });
  };

  const backwardActivity = () => {
    if (currentActivity <= 0) return false;
    setCurrentActivity(currentActivity - 1);
    return true;
  };

  useEffect(() => {
    return () => {
      if (timeCountStatus) {
        clearInterval(timeCountInterval);
        setTimeCountStatus(false);
        return;
      }
    };
  }, [timeCountStatus, timeCountInterval]);

  const triggerTimeCount = () => {
    if (timeCountStatus) {
      clearInterval(timeCountInterval);
      setTimeCountStatus(false);
      return;
    }

    const intervalId = setInterval(() => {
      let updatedActivitys;

      setActivitys((prevActivitys) => {
        updatedActivitys = [...prevActivitys];
        return prevActivitys;
      });

      let idx;
      setCurrentActivity((prevCurrentActivity) => {
        idx = prevCurrentActivity;
        return prevCurrentActivity;
      });

      if (updatedActivitys[idx].duration > 0 && !updatedActivitys[idx].done) {
        updatedActivitys[idx].duration -= 1;
        updatedActivitys[idx].usedTime += 1;
      } else if (
        updatedActivitys[idx].duration === 0 &&
        !updatedActivitys[idx].done
      ) {
        updatedActivitys[idx].done = true;
      }

      if (updatedActivitys[idx].done) {
        if (!checkIfThereAnyDoneLeft()) {
          clearInterval(intervalId);
          setTimeCountStatus(false);
          console.log(updatedActivitys);
        } else {
          forwardActivity();
        }
      }

      setActivitys(updatedActivitys);
    }, 1000);

    setTimeCountInterval(intervalId);
    setTimeCountStatus(true);
  };

  const calculateActivityAllTimeToBeMins = () => {
    const initialValue = 0;
    return Math.floor(
      activitys.reduce(
        (previousValue, currentValue) => previousValue + currentValue.duration,
        initialValue
      ) / 60
    );
  };

  return (
    <div className="ViewTaskPage">
      {openSaveModal && (
        <ComfirmSaveRecordModal
          task={task}
          activitys={activitys}
          triggerClose={() => setOpenSaveModal(false)}
        />
      )}
      <div className="header">
        <h3>View Task</h3>
        <p className="header-date">{currentDate}</p>
      </div>
      <div className="container">
        <div className="left">
          <Card
            icon={type}
            topText={name}
            highlightTopText
            bottomText={`${calculateActivityAllTimeToBeMins()} mins`}
          />
          <div className="description">
            <h4>Description</h4>
            <p>{description}</p>
          </div>
          <div className="task-control">
            <button
              className="startAndPause-btn"
              onClick={triggerTimeCount}
              disabled={!checkIfThereAnyDoneLeft()}
            >
              {!timeCountStatus ? "Start" : "Pause"}
            </button>
            <button
              className="backward"
              onClick={backwardActivity}
              disabled={
                timeCountStatus ||
                currentActivity === 0 ||
                !checkIfThereAnyDoneLeft()
              }
            >
              {"<<"}
            </button>
            <button
              className="forward"
              onClick={forwardActivity}
              disabled={
                timeCountStatus ||
                currentActivity + 1 === activitys.length ||
                !checkIfThereAnyDoneLeft()
              }
            >
              {">>"}
            </button>
          </div>
          <button onClick={() => navigate(`/tasks/edit/${params._id}`)}>
            Edit Task
          </button>
          <button
            onClick={() => setOpenSaveModal(true)}
            disabled={!checkIfThereAnyUsedTime()}
          >
            Save Progress
          </button>
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
