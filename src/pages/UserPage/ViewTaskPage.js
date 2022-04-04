const ViewTaskPage = () => {
  const currentDate = new Date().toDateString();

  return (
    <div className="ViewTaskPage">
      <div className="header">
        <h3>View Task</h3>
        <p className="header-date">{currentDate}</p>
      </div>
      <div className="container">
        <div className="left">
          <div className="info-box">
            Icon
            <div className="info-content">
              <p>Running Set</p>
              <p>10 mins</p>
            </div>
            Button
          </div>
          <div className="description">
            <h4>Description</h4>
            <p>Desciption will show on here.</p>
          </div>
          <div className="task-control">
            <button className="startAndPause-btn">Start / Pause</button>
            <button className="backward">{"<<"}</button>
            <button className="forward">{">>"}</button>
          </div>
        </div>
        <div className="right">
          <div className="activity-list">
            <div className="activity">
              <p>Warm-up</p>
              <p>00:30 seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTaskPage;
