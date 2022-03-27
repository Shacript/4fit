import { useEffect, useState, useRef } from "react";

const ViewTaskPage = () => {
  const [timeRemaining, setTimeRemaining] = useState(10000000000);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(1000);
  const [millisecond, setMillisecond] = useState(0);

  useEffect(() => {
    if (timeRemaining < 0) return;
    setTimeout(() => {
      setTimeRemaining(timeRemaining - 1);
      setMillisecond(timeRemaining % 1000);
      setSecond(Math.floor((timeRemaining / 1000) % 60));
    }, 100);
  }, [timeRemaining]);

  return <div>{`${hour}:${minute}:${second}:${millisecond}`}</div>;
};

export default ViewTaskPage;
