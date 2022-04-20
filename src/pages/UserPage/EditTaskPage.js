import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import DatePicker from "react-multi-date-picker";

import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import EditActivityModal from "../../components/EditActivityModal/EditActivityModal";

import TaskService from "../../services/task.service";

import { useNavigate, useParams } from "react-router-dom";

const EditTaskPage = () => {
  const [activitys, setActivitys] = useState([]);

  const [activityName, setActivityName] = useState("");
  const [activityTime, setActivityTime] = useState("");

  const [type, setType] = useState("run");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [schedule, setSchedule] = useState([]);

  const [indexEditActivityModal, setIndexEditActivityModal] = useState(0);
  const [openEditActivityModal, setOpenEditActivityModal] = useState(false);

  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    TaskService.getUserTask(params._id).then(({ data }) => {
      setActivitys(data.activities);
      setType(data.type);
      setName(data.name);
      setDescription(data.description);
      setSchedule(data.schedule);
    });
  }, [params]);

  const convertSecond = (seconds) => {
    return new Date(seconds * 1000).toISOString().substring(11, 19);
  };

  const onSubmitAddActivityHandler = (e) => {
    e.preventDefault();

    setActivitys([
      ...activitys,
      {
        name: activityName,
        duration: parseInt(activityTime),
      },
    ]);

    setActivityName("");
    setActivityTime("");
  };

  const onClickEditActivityHandler = (index) => {
    setIndexEditActivityModal(index);
    setOpenEditActivityModal(true);
  };

  const onEditedHandler = (editedActivity) => {
    const newActivity = [...activitys];
    newActivity[indexEditActivityModal] = editedActivity;
    setActivitys(newActivity);
  };

  const onSubmitAddTask = async (e) => {
    e.preventDefault();
    if (activitys.length <= 0) return;

    const formatedSchedule = schedule.map((date) => {
      if (date.format) {
        return date.format("M/D/YYYY");
      }
      return date;
    });

    try {
      await TaskService.updateUserTask(params._id, {
        name,
        type,
        schedule: formatedSchedule,
        activities: activitys,
        description: description,
      });
      navigate(`/tasks/${params._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const onRemoveHandler = async () => {
    try {
      await TaskService.removeUserTask(params._id);
      navigate(`/tasks`);
    } catch (err) {
      console.log(err);
    }
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
    <div className="CreateTaskPage">
      {openEditActivityModal && activitys[indexEditActivityModal] && (
        <EditActivityModal
          activity={activitys[indexEditActivityModal]}
          triggerClose={() => setOpenEditActivityModal(false)}
          onEdited={onEditedHandler}
        />
      )}
      <div className="header">
        <h3>Edit Task</h3>
      </div>
      <div className="container">
        <form className="left" onSubmit={onSubmitAddTask}>
          <Card
            icon={type}
            topText={name}
            highlightTopText
            bottomText={`${calculateActivityAllTimeToBeMins()} mins`}
          />
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="run">Running</option>
            <option value="bicycleRide">Cycling</option>
            <option value="swim">Swimming</option>
            <option value="walk">Walking</option>
            <option value="hike">Hiking</option>
            <option value="other">Other</option>
          </select>
          <input
            type="text"
            placeholder="Task name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <h6>Preview Description</h6>
          <span>{description}</span>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <DatePicker
            multiple
            inputClass="custom-date-input"
            placeholder="Schedule date"
            value={schedule}
            format={"M/D/YYYY"}
            onChange={(value) => setSchedule(value)}
            required
          />
          <button type="button" onClick={onRemoveHandler}>
            Remove Task
          </button>
          <button type="submit">Update</button>
        </form>
        <div className="right">
          <form onSubmit={onSubmitAddActivityHandler}>
            <input
              type="text"
              placeholder="Activity Name"
              value={activityName}
              onChange={(e) => setActivityName(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Activity Time (seconds)"
              value={activityTime}
              onChange={(e) => setActivityTime(e.target.value)}
              required
            />
            <button type="submit">Add Activity</button>
          </form>
          <div className="activity-list">
            {activitys.length > 0 ? (
              activitys.map((activity, index) => (
                <div className="activity" key={index}>
                  <p className="activity-name">{activity.name}</p>
                  <p className="time-count">
                    {convertSecond(activity.duration)}
                  </p>
                  <FaEdit
                    className="icon edit-button"
                    onClick={() => onClickEditActivityHandler(index)}
                  />
                  <FaRegTrashAlt
                    className="icon remove-button"
                    onClick={() =>
                      setActivitys((prevActivitys) =>
                        prevActivitys.filter(
                          (activity, _index) => _index !== index
                        )
                      )
                    }
                  />
                </div>
              ))
            ) : (
              <div className="activity">
                <p className="activity-name">
                  Starting add your first activity !
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTaskPage;
