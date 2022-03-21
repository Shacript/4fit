import { BiRun } from "react-icons/bi";

const DailyTasks = () => {
  const fakeTasks = [
    {
      name: "Test1",
      icon: <BiRun className="daily-task-icon" />,
      time: 10,
    },
    {
      name: "Test2",
      icon: <BiRun className="daily-task-icon" />,
      time: 20,
    },
    {
      name: "Test3",
      icon: <BiRun className="daily-task-icon" />,
      time: 30,
    },
  ];

  return (
    <div className="daily-tasks">
      <h2>Daily Tasks</h2>
      <div className="daily-tasks-group">
        {fakeTasks.map((task, index) => (
          <div className="daily-task" key={index}>
            {task.icon}
            <div className="daily-task-content">
              <p>{task.name}</p>
              <p>{task.time} mins</p>
            </div>
          </div>
        ))}
      </div>
      <button className="button create-task-button">Create More Task</button>
    </div>
  );
};

export default DailyTasks;
