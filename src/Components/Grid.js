import { getAllDrinksByCategory } from "./../CocktailAPI.js";

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
    if (this.props.content) {
      this.setState({ items: this.props.content });
    } else {
      const urlCategory = this.props.match.params.category;

      getAllDrinksByCategory(urlCategory).then((result) =>
        this.setState({ items: result.drinks })
      );

      db.collection("gin")
        .get()
        .then((res) => {
          res.docs.forEach((drink) => {
            this.setState({
              items: [...this.state.items, drink.data().strDrink],
            });
          });
        });
    }

    // -----------IEMS AUS DER COLLECTION HOLE UND IN STATE SPEICHERN
  }

  render() {
    return (
      <section className="md:flex md:flex-wrap">
        {this.state.items &&
          this.state.items.map((categorie, index) => (
            <div
              className="sort h-80 content-center flex direction
              md:w-1/2"
              key={index}
            >
              {categorie.strDrink ? (
                <DrinkTile key={index} content={categorie} index={index} />
              ) : (
                <MainTile key={index} name={categorie} />
              )}
            </div>
          ))}
      </section>
    );
  }
}
export default withRouter(Grid);
