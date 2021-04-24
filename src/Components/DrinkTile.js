import { Link } from "react-router-dom";
import DrinkDetailPage from "./DrinkDetailPage";

const DrinkTile = (props) =>
{
  const currentURL = window.location.pathname;
  
  return (
    <Link className="md:flex md:flex-wrap md:inline-block" to={`${currentURL}/${props.content.idDrink}`}>
        <div className="flex h-full items-center justify-evenly ">
          <h2 className="w-1/3 transform -rotate-90 font-bold text-2xl">{props.content.strDrink}</h2>
          <img className="w-2/3 p-6 object-contain" src={`${props.content.strDrinkThumb}`} alt="Cocktail Img" />
        </div>
    </Link>
  );
};

export default DrinkTile;

