import { Component } from "react";
import { getDrinkInfos, getRandomCocktail } from "./../CocktailAPI";

class DrinkDetailPage extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      item: {},
    };
  }

  componentDidMount()
  {
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

  render()
  {
    return (
      <section
        className="bg-dark-blue p-10
                          md:flex md:gap-12"
      >
        <img
          className="w-4/6 block mx-auto
                        md:w-1/2"
          src={this.state.item.strDrinkThumb}
          alt=""
        />
        <div className="md:block">
          <h2
            className="font-secondary font-bold text-3xl text-center py-8
                        md:text-left"
          >
            {this.state.item.strDrink}
          </h2>
          <h3 className="font-bold my-4">Zutaten</h3>

          <ul>
            {this.state.item.strIngredient1 && (
              <li>
                {this.state.item.strMeasure1}
                {this.state.item.strIngredient1}
              </li>
            )}
            {this.state.item.strIngredient2 && (
              <li>
                {this.state.item.strMeasure2}
                {this.state.item.strIngredient2}
              </li>
            )}
            {this.state.item.strIngredient3 && (
              <li>
                {this.state.item.strMeasure3}
                {this.state.item.strIngredient3}
              </li>
            )}
            {this.state.item.strIngredient4 && (
              <li>
                {this.state.item.strMeasure4}
                {this.state.item.strIngredient4}
              </li>
            )}
            {this.state.item.strIngredient5 && (
              <li>
                {this.state.item.strMeasure5}
                {this.state.item.strIngredient5}
              </li>
            )}
            {this.state.item.strIngredient6 && (
              <li>
                {this.state.item.strMeasure6}
                {this.state.item.strIngredient6}
              </li>
            )}
            {this.state.item.strIngredient7 && (
              <li>
                {this.state.item.strMeasure7}
                {this.state.item.strIngredient7}
              </li>
            )}
            {this.state.item.strIngredient8 && (
              <li>
                {this.state.item.strMeasure8}
                {this.state.item.strIngredient8}
              </li>
            )}
            {this.state.item.strIngredient9 && (
              <li>
                {this.state.item.strMeasure9}
                {this.state.item.strIngredient9}
              </li>
            )}
            {this.state.item.strIngredient10 && (
              <li>
                {this.state.item.strMeasure10}
                {this.state.item.strIngredient10}
              </li>
            )}
            {this.state.item.strIngredient11 && (
              <li>
                {this.state.item.strMeasure11}
                {this.state.item.strIngredient11}
              </li>
            )}
            {this.state.item.strIngredient12 && (
              <li>
                {this.state.item.strMeasure12}
                {this.state.item.strIngredient12}
              </li>
            )}
            {this.state.item.strIngredient13 && (
              <li>
                {this.state.item.strMeasure13}
                {this.state.item.strIngredient13}
              </li>
            )}
            {this.state.item.strIngredient14 && (
              <li>
                {this.state.item.strMeasure14}
                {this.state.item.strIngredient14}
              </li>
            )}
            {this.state.item.strIngredient15 && (
              <li>
                {this.state.item.strMeasure15}
                {this.state.item.strIngredient15}
              </li>
            )}
          </ul>
          <p className="pt-6">{this.state.item.strInstructionsDE}</p>
          {window.location.pathname == "/Zufall" && (
            <button className="bg-light-blue text-dark-blue rounded-lg px-2 py-2 mt-4" onClick={(e) => window.location.reload()}>Neu laden</button>
          )}
        </div>
      </section>
    );
  }
}

export default DrinkDetailPage;

// Bild -> strDrinkThumb
// Name -> strDrink
// Zutaten -> strIngredient1 - 15
// Erklärung -> strInstructionsDE
