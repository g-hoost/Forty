import {
  getAllDrinksByCategory,
  searchNonAlcoholiCocktail,
  searchCocktail,
} from "./../CocktailAPI.js";

import { Component } from "react";
import MainTile from "./MainTile";
import DrinkTile from "./DrinkTile";
import { withRouter } from "react-router";
import db from "./../services/firebase";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    const urlCategory = this.props.match.params.category;
    if (this.props.content) {
      this.setState({ items: this.props.content });
    } else if (urlCategory == "Alkoholfrei") {
      searchNonAlcoholiCocktail().then((result) =>
        this.setState({ items: result.drinks })
      );
    } else if (window.location.href.indexOf("search") != -1) {
      let positionOfSlash =
        window.location.pathname.substring(1).indexOf("/") + 2;
      let lenghtOfUrl = window.location.pathname.substring(1).length + 2;
      let searchTerm = window.location.pathname.slice(
        positionOfSlash,
        lenghtOfUrl
      );
      searchCocktail(searchTerm).then((result) =>
        this.setState({ items: result.drinks })
      );
    } else {
      getAllDrinksByCategory(urlCategory).then((result) =>
        this.setState({ items: result.drinks })
      );

      db.collection(urlCategory)
        .get()
        .then((res) => {
          res.docs.forEach((drink) => {
            this.setState({
              items: [...this.state.items, drink.data()],
            });
          });
        });
    }
  }

  render() {
    return (
      <section className="flex flex-wrap">
        {this.state.items &&
          this.state.items.map((item, index) => (
            <div

              className={"sort w-full h-80 content-center justify-center flex direction md:w-1/2" + (item.strDrink ? ' reverse' : '')}

              key={index}
            >
              {item.strDrink ? (
                <DrinkTile key={index} content={item} index={index} />
              ) : (
                <MainTile key={index} name={item} />
              )}
            </div>
          ))}
      </section>
    );
  }
}
export default withRouter(Grid);
