import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TaskService from "../../services/task.service";

import RecordService from "../../services/record.service";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import CardGroup from "../../components/CardGroup/CardGroup";
import WeightModal from "../../components/WeightModal/WeightModal";
import HeightModal from "../../components/HeightModal/HeightModal";

const DashboardPage = () => {
  const [userDailyTasks, setUserDailyTasks] = useState([]);
  const [data, setData] = useState([]);

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
        new Date().toLocaleDateString()
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

      const { data } = await RecordService.getUserRecordsChart("task_record");
      setData(data);
    })();
  }, []);

  return (
    <div className="DashboardPage">
      <div className="header">
        <h3>Dashboard</h3>
        <p className="header-date">{currentDate.toDateString()}</p>
      </div>
      <p>Logged in as ({`${userFirstName} ${userLastName}`}).</p>
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
        <div className="chart-header">
          <h4>All Task Record Chart</h4>
        </div>
        <LineChart
          width={1050}
          height={400}
          data={data}
          margin={{ top: 20, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="seconds" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="_id" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default DashboardPage;
