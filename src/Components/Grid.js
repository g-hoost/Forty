import {
  getAllDrinksByCategory,
  //   getAllVodkaCocktails,
  //   getAllRumCocktails,
  //   getAllScotchCocktails,
  //   getAllMocktails,
  //   getRandomCocktail,
} from "./../CocktailAPI.js";

import { Component } from "react";
import MainTile from "./MainTile";
import { withRouter } from "react-router";

class Grid extends Component {
  constructor(props) {
    super(props);
    console.log(props.content);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    if (this.props.content) {
      // Hier Getränke Array in items packen
    } else {
      const urlCategory = this.props.match.params.category;

      getAllDrinksByCategory(urlCategory).then((result) =>
        this.setState({ items: result })
      );
    }
  }

  render() {
    return (
      <>
        {this.props.content.categories &&
          this.props.content.categories.map((categorie, index) => (
            <MainTile key={index} name={categorie} />
          ))}
      </>
    );
  }
}
export default withRouter(Grid);
