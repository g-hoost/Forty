import { Link } from "react-router-dom";
import DrinkDetailPage from "./DrinkDetailPage";

const DrinkTile = (props) => {
  console.log(props.content.idDrink);

  return (
    <Link to={`Gin/${props.content.idDrink}`}>
      <h2>{props.content.strDrink}</h2>
      <img src={`${props.content.strDrinkThumb}`} alt="Cocktail Img" />
    </Link>
  );
};

export default DrinkTile;
