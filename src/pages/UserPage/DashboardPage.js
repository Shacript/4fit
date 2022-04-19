import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TaskService from "../../services/task.service";

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

import CardGroup from "../../components/CardGroup/CardGroup";
import WeightModal from "../../components/WeightModal/WeightModal";
import HeightModal from "../../components/HeightModal/HeightModal";

const data = [
  { name: "2014", uv: 10 },
  { name: "2015", uv: 15 },
  { name: "2016", uv: 18.5 },
];

const renderLineChart = (
  <LineChart
    width={1024}
    height={300}
    data={data}
    margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
  >
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
);

const DashboardPage = () => {
  const [userDailyTasks, setUserDailyTasks] = useState([]);

  const currentDate = new Date();

  const authSelector = useSelector((state) => state.auth);

  const userWeight = (authSelector.user && authSelector.user.weight) || 0;
  const userHeight = (authSelector.user && authSelector.user.height) || 0;
  const userFirstName =
    (authSelector.user && authSelector.user.first_name) || "no_name";
  const userLastName =
    (authSelector.user && authSelector.user.last_name) || "no_name";

  let userHealthInfomation = [
    {
      topText: `${userWeight} kg.`,
      highlightTopText: true,
      bottomText: "Weight",
      icon: "weight",
      modal: <WeightModal defaultWeight={userWeight} />,
    },
    {
      topText: `${userHeight} cm.`,
      highlightTopText: true,
      bottomText: "Height",
      icon: "height",
      modal: <HeightModal defaultHeight={userHeight} />,
    },
  ];

  const bmiCalculated = (userWeight / (userHeight / 100) ** 2).toFixed(1);

  if (bmiCalculated < 18.5) {
    userHealthInfomation.push({
      topText: "Underweight",
      highlightTopText: true,
      bottomText: `BMI ${bmiCalculated}`,
      icon: "bmi",
    });
  } else if (bmiCalculated >= 18.5 && bmiCalculated <= 22.9) {
    userHealthInfomation.push({
      topText: "Normal",
      highlightTopText: true,
      bottomText: `BMI ${bmiCalculated}`,
      icon: "bmi",
    });
  } else {
    userHealthInfomation.push({
      topText: "Overweight",
      highlightTopText: true,
      bottomText: `BMI ${bmiCalculated}`,
      icon: "bmi",
    });
  }

  useEffect(() => {
    (async () => {
      const response = await TaskService.getUserTasksByDate(
        currentDate.toLocaleDateString()
      );
      setUserDailyTasks(
        response.data.map((task) => ({
          topText: task.name,
          highlightTopText: true,
          bottomText: `${Math.floor(task.calculateAllSeconds / 60)} mins`,
          icon: task.type,
          redirectTo: `/tasks/${task._id}`,
        }))
      );
    })();
  }, []);

  return (
    <div className="DashboardPage">
      <div className="header">
        <h3>Dashboard</h3>
        <p className="header-date">{currentDate.toDateString()}</p>
        <div className="user-display">
          <div className="user-infomation">
            <p>{`${userFirstName} ${userLastName}`}</p>
          </div>
          <img src="./assets/images/profile.jpg" alt="profile" />
        </div>
      </div>
      <div className="Infomation">
        <h4>Infomation</h4>
        <CardGroup data={userHealthInfomation} />
      </div>
      <div className="Infomation">
        <h4>Daily Tasks</h4>
        <CardGroup
          data={userDailyTasks}
          noResultText="Look like you don't have any tasks today !"
        />
      </div>
      <div className="Chart">
        <h4>Record Chart</h4>
        {renderLineChart}
      </div>
    </div>
  );
};

export default DashboardPage;
