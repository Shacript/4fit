import { GiWeight, GiHealthNormal, GiBodyHeight } from "react-icons/gi";
import { MdAdd } from "react-icons/md";
import {
  FaRunning,
  FaBicycle,
  FaSwimmer,
  FaHiking,
  FaWalking,
  FaQuestion,
  FaRegTimesCircle,
} from "react-icons/fa";

const icons = {
  add: <MdAdd className="card-icon" />,
  run: <FaRunning className="card-icon" />,
  bicycleRide: <FaBicycle className="card-icon" />,
  swim: <FaSwimmer className="card-icon" />,
  walk: <FaWalking className="card-icon" />,
  hike: <FaHiking className="card-icon" />,
  other: <FaQuestion className="card-icon" />,
  weight: <GiWeight className="card-icon" />,
  height: <GiBodyHeight className="card-icon" />,
  bmi: <GiHealthNormal className="card-icon" />,
  regTimesCircle: <FaRegTimesCircle className="card-icon" />,
};

const Card = ({ topText, bottomText, icon }) => {
  return (
    <div className="Card">
      {icons[icon]}
      <div className="card-content">
        {topText && <p>{topText}</p>}
        {bottomText && <p>{bottomText}</p>}
      </div>
    </div>
  );
};

export default Card;
