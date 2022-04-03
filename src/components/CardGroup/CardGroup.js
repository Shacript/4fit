import Card from "../Card/Card";

const CardGroup = ({ data = [] }) => {
  return (
    <div className="CardGroup">
      {data.map((v, i) => (
        <Card key={i} {...v} />
      ))}
    </div>
  );
};

export default CardGroup;
