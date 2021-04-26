import { Link } from "react-router-dom";
import DrinkDetailPage from "./DrinkDetailPage";

const DrinkTile = (props) =>
{
  const currentURL = window.location.pathname;
  
  return (
    <Link className="drink-tile
                    md:flex md:flex-wrap md:inline-block " 
                    to={`${currentURL}/${props.content.idDrink}`}>
        <div className="flex h-full items-center">
          <div className="w-1/3 ">
            <h2 className="w-48 transform -rotate-90 -translate-x-8 font-bold text-2xl
            md:-translate-x-4 md:origin-center ">
            {props.content.strDrink}</h2>
          </div>
          <img className="w-2/3 p-6 object-contain" src={`${props.content.strDrinkThumb}`} alt="Cocktail Img" />
        </div>
    </Link>
  );
};

export default DrinkTile;

