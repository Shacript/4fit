import { BiRun } from "react-icons/bi";
import { useState } from "react";
import DailyTasks from "../../components/DailyTasks/DailyTasks";

const HomePage = () => {
  const [tasks, setTasks] = useState([
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
  ]);

  return (
    <div className="HomePage">
      <DailyTasks tasks={tasks} />
    </div>
  );
};

export default HomePage;
