import { Component } from "react";
import { getDrinkInfos, getRandomCocktail } from "./../CocktailAPI";

class DrinkDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {},
    };
  }

  componentDidMount() {
    if (window.location.pathname == "/Zufall") {
      getRandomCocktail().then((result) =>
        this.setState({ item: result.drinks[0] })
      );
    } else {
      let positionOfSlash =
        window.location.pathname.substring(1).indexOf("/") + 2;
      const lenghtOfUrl = window.location.pathname.substring(1).length + 2;
      const idDrink = window.location.pathname.slice(
        positionOfSlash,
        lenghtOfUrl
      );
      getDrinkInfos(idDrink).then((result) =>
        this.setState({ item: result.drinks[0] })
      );
    }
  }

  render() {
    return (
      <section>
        <img src={this.state.item.strDrinkThumb} alt="" />
        <h2>{this.state.item.strDrink}</h2>
        <h3>Zutaten</h3>
        <p>{this.state.item.idDrink}</p>
        <ul>
          {this.state.item.strIngredient1 && (
            <li>{this.state.item.strIngredient1}</li>
          )}
          {this.state.item.strIngredient2 && (
            <li>{this.state.item.strIngredient2}</li>
          )}
          {this.state.item.strIngredient3 && (
            <li>{this.state.item.strIngredient3}</li>
          )}
          {this.state.item.strIngredient4 && (
            <li>{this.state.item.strIngredient4}</li>
          )}
          {this.state.item.strIngredient5 && (
            <li>{this.state.item.strIngredient5}</li>
          )}
          {this.state.item.strIngredient6 && (
            <li>{this.state.item.strIngredient6}</li>
          )}
          {this.state.item.strIngredient7 && (
            <li>{this.state.item.strIngredient7}</li>
          )}
          {this.state.item.strIngredient8 && (
            <li>{this.state.item.strIngredient8}</li>
          )}
          {this.state.item.strIngredient9 && (
            <li>{this.state.item.strIngredient9}</li>
          )}
          {this.state.item.strIngredient10 && (
            <li>{this.state.item.strIngredient10}</li>
          )}
          {this.state.item.strIngredient11 && (
            <li>{this.state.item.strIngredient11}</li>
          )}
          {this.state.item.strIngredient12 && (
            <li>{this.state.item.strIngredient12}</li>
          )}
          {this.state.item.strIngredient13 && (
            <li>{this.state.item.strIngredient13}</li>
          )}
          {this.state.item.strIngredient14 && (
            <li>{this.state.item.strIngredient14}</li>
          )}
          {this.state.item.strIngredient15 && (
            <li>{this.state.item.strIngredient15}</li>
          )}
        </ul>
        <p>{this.state.item.strInstructionsDE}</p>
      </section>
    );
  }
}

export default DrinkDetailPage;

// Bild -> strDrinkThumb
// Name -> strDrink
// Zutaten -> strIngredient1 - 15
// Erklärung -> strInstructionsDE
