import { Link } from "react-router-dom";
import DrinkDetailPage from "./DrinkDetailPage";
import db from "./../services/firebase";

const DrinkTile = (props) => {
  const currentURL = window.location.pathname;
  // if (props.content.drinkFromDb == true) {
  //   db.collection("Gin")
  //     .get()
  //     .then((res) => {
  //       res.docs.forEach((drink) => {
  //         // console.log(drink.data().strDrink);
  //         props.content.idDrink = drink.data().strDrink;
  //       });
  //     });
  //   // props.content.idDrink = drink.data().;
  // }

  return (
    <Link className="flex flex-wrap inline-block" to={`${currentURL}/${props.content.idDrink}`}>
        <div className="flex w-full h-full items-center">
          <div className="w-1/3 ">
            <h2 className="w-48 transform -rotate-90 -translate-x-8 font-bold text-2xl text-center
            md:-translate-x-5 md:origin-center">
            {props.content.strDrink}</h2>
          </div>
          <div className="p-6 h-full">
            <img className="h-full object-contain" src={`${props.content.strDrinkThumb}`} alt="Cocktail Img" />
          </div>
        </div>
        <div className="p-6">
          <img src={`${props.content.strDrinkThumb}`} alt="Cocktail Img" />
        </div>
      <img
        className="w-2/3 p-6 object-contain"
        src={`${props.content.strDrinkThumb}`}
        alt="Cocktail Img" />
    </Link>
  );
};

export default DrinkTile;
