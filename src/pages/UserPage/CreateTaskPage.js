import Card from "../../components/Card/Card";

const CreateTaskPage = () => {
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
          <input type="date" />
          {/* <div className="info-box">
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
          </div> */}
        </div>
        <div className="right">
          {/* <div className="activity-list">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CreateTaskPage;
