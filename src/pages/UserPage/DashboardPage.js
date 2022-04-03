import { GiWeight, GiHealthNormal, GiBodyHeight } from "react-icons/gi";
import { MdAdd } from "react-icons/md";
import {
  FaRunning,
  FaBicycle,
  FaSwimmer,
  FaHiking,
  FaWalking,
  FaQuestion,
} from "react-icons/fa";

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];

const renderLineChart = (
  <LineChart
    width={600}
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

const icons = {
  add: <MdAdd />,
  run: <FaRunning />,
  bicycleRide: <FaBicycle />,
  swim: <FaSwimmer />,
  walk: <FaWalking />,
  hike: <FaHiking />,
  other: <FaQuestion />,
};

const DashboardPage = () => {
  const userHealthInfomation = [
    {
      topText: "55 kg.",
      bottomText: "Weight",
      icon: <GiWeight />,
    },
    {
      topText: "167 cm.",
      bottomText: "Height",
      icon: <GiBodyHeight />,
    },
    {
      topText: "Good !",
      bottomText: "BMI 55",
      icon: <GiHealthNormal />,
    },
  ];

  const userDailyTasks = [
    {
      topText: "Add Task",
      icon: icons["add"],
    },
    {
      topText: "Running Set",
      bottomText: "10 mins",
      icon: icons["run"],
    },
    {
      topText: "Bicycle Ride Set",
      bottomText: "10 mins",
      icon: icons["bicycleRide"],
    },
    {
      topText: "Swimming Set",
      bottomText: "10 mins",
      icon: icons["swim"],
    },
    {
      topText: "Walking Set",
      bottomText: "10 mins",
      icon: icons["walk"],
    },
    {
      topText: "Hiking Set",
      bottomText: "10 mins",
      icon: icons["hike"],
    },
    {
      topText: "Other Set",
      bottomText: "10 mins",
      icon: icons["other"],
    },
  ];

  const currentDate = new Date().toDateString();

  return (
    <div className="DashboardPage">
      <div className="header">
        <h3>Dashboard</h3>
        <p>{currentDate}</p>
        <div className="user-display">
          <div className="user-infomation">
            <p>Name</p>
            <p>Current Rank</p>
          </div>
          <img src="#" alt="" />
        </div>
      </div>
      <div className="Infomation">
        <h4>Infomation</h4>
        {userHealthInfomation.map((v, i) => (
          <div key={i}>
            {v.icon} {v.topText} {v.bottomText}
          </div>
        ))}
      </div>
      <div className="Infomation">
        <h4>Daily Tasks</h4>
        {userDailyTasks.map((v, i) => (
          <div key={i}>
            {v.icon} {v.topText} {v.bottomText}
          </div>
        ))}
      </div>
      <div className="Chart">
        <h4>Record Chart</h4>
        {renderLineChart}
      </div>
    </div>
  );
};

export default DashboardPage;
