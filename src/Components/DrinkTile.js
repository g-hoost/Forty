import { Link } from "react-router-dom";
import DrinkDetailPage from "./DrinkDetailPage";

const DrinkTile = (props) =>
{
  const currentURL = window.location.pathname;

  return (
    <Link to={`${currentURL}/${props.content.idDrink}`}>
      <div className="flex flex-row-reverse">
        <h2>{props.content.strDrink}</h2>
        <img className="w-60 pl-12" src={`${props.content.strDrinkThumb}`} alt="Cocktail Img" />
      </div>
    </Link>
  );
};

export default DrinkTile;
