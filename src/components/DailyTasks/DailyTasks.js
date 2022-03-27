const DailyTasks = ({ tasks = [] }) => {
  return (
    <div className="daily-tasks">
      <h2>Daily Tasks</h2>
      <div className="daily-tasks-group">
        {Array.isArray(tasks) && tasks.map((task, index) => (
          <div className="daily-task" key={index}>
            {task.icon}
            <div className="daily-task-content">
              <p>{task.name}</p>
              <p>{task.time} mins</p>
            </div>
          </div>
        ))}
      </div>
      <button className="create-task-button">Create More Task</button>
    </div>
  );
};

export default DailyTasks;
