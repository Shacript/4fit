import CardGroup from "../../components/CardGroup/CardGroup";

const TasksPage = () => {
  const userDailyTasks = [
    {
      topText: "Add Task",
      icon: "add",
    },
    {
      topText: "Running Set",
      bottomText: "10 mins",
      icon: "run",
    },
    {
      topText: "Bicycle Ride Set",
      bottomText: "10 mins",
      icon: "bicycleRide",
    },
    {
      topText: "Swimming Set",
      bottomText: "10 mins",
      icon: "swim",
    },
    {
      topText: "Walking Set",
      bottomText: "10 mins",
      icon: "walk",
    },
    {
      topText: "Hiking Set",
      bottomText: "10 mins",
      icon: "hike",
    },
    {
      topText: "Other Set",
      bottomText: "10 mins",
      icon: "other",
    },
  ];
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
