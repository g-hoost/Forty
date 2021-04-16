import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Component } from "react";

import "./App.css";
import { getAllGinCocktails } from "./CocktailAPI";

import DrinkDetailPage from "./Components/DrinkDetailPage";
import DrinksPage from "./Components/DrinksPage";
import DrinkUpload from "./Components/DrinkUpload";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ginCocktails: [],
    };
  }

  componentDidMount() {
    getAllGinCocktails().then((result) =>
      this.setState(
        { ginCocktails: result }
        //   , () => {
        //   console.log(this.state.ginCocktails);
        // }
      )
    );
  }

  // getCocktail(id) {
  //   return this.state.cocktail[id];
  // }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/upload">
            <DrinkUpload />
          </Route>
          <Route path="/drinks/random">
            <DrinkDetailPage />
          </Route>
          <Route path="/drinks/:id">
            <DrinkDetailPage />
          </Route>
          {/* <Route path="/drinks">
            <DrinksPage getAllCocktails={(e) => this.getCocktail(e)} />
          </Route> */}
          <Route path="/drinks">
            <DrinksPage content={this.state.ginCocktails.drinks} />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default App;
