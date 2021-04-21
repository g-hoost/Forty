import { Component } from "react";
import { getDrinkInfos } from "./../CocktailAPI";
import { useParams } from "react-router-dom";

class DrinkDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
    };
  }

  componentDidMount() {
    let positionOfSlash =
      window.location.pathname.substring(1).indexOf("/") + 2;
    const lenghtOfUrl = window.location.pathname.substring(1).length + 2;
    const idDrink = window.location.pathname.slice(
      positionOfSlash,
      lenghtOfUrl
    );
    console.log(idDrink);
    getDrinkInfos(idDrink).then((result) =>
      this.setState({ item: result.drinks[0] })
    );
  }

  render() {
    return (
      <>
        <img src={this.state.item.strDrinkThumb} alt="" />
        <h2>{this.state.item.strDrink}</h2>
        <h3>Zutaten</h3>
        <p>{this.state.item.strIngredient1}</p>
      </>
    );
  }
}

export default DrinkDetailPage;

// Bild -> strDrinkThumb
// Name -> strDrink
// Zutaten -> strIngredient1 - 15
// Erklärung -> strInstructionsDE
