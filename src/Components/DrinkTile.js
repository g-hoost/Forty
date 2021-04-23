import { Link } from "react-router-dom";
import DrinkDetailPage from "./DrinkDetailPage";

const DrinkTile = (props) =>
{
  const currentURL = window.location.pathname;

  return (
    <Link to={`${currentURL}/${props.content.idDrink}`}>
      <div className="flex direction">
        <h2 className="transform -rotate-90  font-bold text-2xl w-full">{props.content.strDrink}</h2>
        <img className="w-60" src={`${props.content.strDrinkThumb}`} alt="Cocktail Img" />
      </div>
    </Link>
  );
};

export default DrinkTile;
