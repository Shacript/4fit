import { useState, useEffect } from "react";
import TaskService from "../../services/task.service";

import CardGroup from "../../components/CardGroup/CardGroup";

const TasksPage = () => {
  const [userDailyTasks, setUserDailyTasks] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await TaskService.getUserTasks();
      setUserDailyTasks(
        response.data.map((task) => ({
          topText: task.name,
          bottomText: "10 mins",
          icon: task.type,
        }))
      );
    })();
  }, []);

  return (
    <div className="TasksPage">
      <div className="header">
        <h3>All Tasks</h3>
      </div>
      <CardGroup data={userDailyTasks} />
    </div>
  );
};

export default TasksPage;
