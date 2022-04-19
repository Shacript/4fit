import Card from "../Card/Card";

const CardGroup = ({
  data = [],
  noResultText = "Oops, there's nothing here",
}) => {
  return (
    <div className="CardGroup">
      {data.length > 0 ? (
        data.map((v, i) => <Card key={i} {...v} />)
      ) : (
        <Card icon="regTimesCircle" topText={noResultText} />
      )}
    </div>
  );
};

export default CardGroup;
