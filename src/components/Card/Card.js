const Card = ({ topText, bottomText, icon }) => {
  return (
    <div className="Card">
      {icon}
      <div className="card-content">
        {topText && <p>{topText}</p>}
        {bottomText && <p>{bottomText}</p>}
      </div>
    </div>
  );
};

export default Card;
