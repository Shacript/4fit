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
import CardGroup from "../../components/CardGroup/CardGroup";
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
  add: <MdAdd className="card-icon" />,
  run: <FaRunning className="card-icon" />,
  bicycleRide: <FaBicycle className="card-icon" />,
  swim: <FaSwimmer className="card-icon" />,
  walk: <FaWalking className="card-icon" />,
  hike: <FaHiking className="card-icon" />,
  other: <FaQuestion className="card-icon" />,
};

const DashboardPage = () => {
  const userHealthInfomation = [
    {
      topText: "55 kg.",
      bottomText: "Weight",
      icon: <GiWeight className="card-icon" />,
    },
    {
      topText: "167 cm.",
      bottomText: "Height",
      icon: <GiBodyHeight className="card-icon" />,
    },
    {
      topText: "Good !",
      bottomText: "BMI 55",
      icon: <GiHealthNormal className="card-icon" />,
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
        <p className="header-date">{currentDate}</p>
        <div className="user-display">
          <div className="user-infomation">
            <p>Aphisit Likitwattanapaisarn</p>
            <p>Beginner</p>
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
