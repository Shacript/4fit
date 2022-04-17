import Card from "../Card/Card";

const CardGroup = ({ data = [] }) => {
  return (
    <div className="CardGroup">
      {data.length > 0 ? (
        data.map((v, i) => <Card key={i} {...v} />)
      ) : (
        <Card icon="regTimesCircle" topText="Oops, there's nothing here" />
      )}
    </div>
  );
};

export default CardGroup;
