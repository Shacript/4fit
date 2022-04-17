import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TaskService from "../../services/task.service";

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

import CardGroup from "../../components/CardGroup/CardGroup";
const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

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

  let userHealthInfomation = [
    {
      topText: `${authSelector.user.weight} kg.`,
      bottomText: "Weight",
      icon: "weight",
    },
    {
      topText: `${authSelector.user.height} cm.`,
      bottomText: "Height",
      icon: "height",
    },
  ];

  const bmiCalculated = (
    authSelector.user.weight /
    (authSelector.user.height / 100) ** 2
  ).toFixed(1);

  if (bmiCalculated < 18.5) {
    userHealthInfomation.push({
      topText: "Underweight",
      bottomText: `BMI ${bmiCalculated}`,
      icon: "bmi",
    });
  } else if (bmiCalculated >= 18.5 && bmiCalculated <= 22.9) {
    userHealthInfomation.push({
      topText: "Normal",
      bottomText: `BMI ${bmiCalculated}`,
      icon: "bmi",
    });
  } else {
    userHealthInfomation.push({
      topText: "Overweight",
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
          bottomText: "10 mins",
          icon: task.type,
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
            <p>{`${authSelector.user.first_name} ${authSelector.user.last_name}`}</p>
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
        <CardGroup data={userDailyTasks} />
      </div>
      <div className="Chart">
        <h4>Record Chart</h4>
        {renderLineChart}
      </div>
    </div>
  );
};

export default DashboardPage;
