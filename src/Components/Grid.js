import { getAllDrinksByCategory } from "./../CocktailAPI.js";

import { Component } from "react";
import MainTile from "./MainTile";
import DrinkTile from "./DrinkTile";
import { withRouter } from "react-router";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    if (this.props.content) {
      this.setState({ items: this.props.content });
    } else {
      const urlCategory = this.props.match.params.category;

      getAllDrinksByCategory(urlCategory).then((result) =>
        this.setState({ items: result.drinks })
      );
    }
  }

  render() {
    return (
      <>
        {this.state.items &&
          this.state.items.map((categorie, index) => (
            <div key={index}>
              {categorie.strDrink ? (
                <DrinkTile key={index} content={categorie} />
              ) : (
                <MainTile key={index} name={categorie} />
              )}
            </div>
          ))}
      </>
    );
  }
}
export default withRouter(Grid);
