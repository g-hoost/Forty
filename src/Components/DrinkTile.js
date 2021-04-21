import { Link } from "react-router-dom";

const DrinkTile = (props) => {
  return (
    <Link to={`Gin/${props.content.strDrink}`}>
      <h2>{props.content.strDrink}</h2>
      <img src={`${props.content.strDrinkThumb}`} alt="Cocktail Img" />
    </Link>
  );
};

export default DrinkTile;
