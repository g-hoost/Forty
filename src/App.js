import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Component } from "react";

import "./App.css";
// import {
//   getAllGinCocktails,
//   getAllVodkaCocktails,
//   getAllRumCocktails,
//   getAllScotchCocktails,
//   getAllMocktails,
//   getRandomCocktail,
// } from "./CocktailAPI";

import DrinkDetailPage from "./Components/DrinkDetailPage";
import DrinkUpload from "./Components/DrinkUpload";
import Footer from "./Components/Footer";
import Grid from "./Components/Grid";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import DrinkTile from "./Components/DrinkTile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // gin: [],
      // vodka: [],
      // rum: [],
      // scotch: [],
      // mocktails: [],
    };
  }

  // componentDidMount() {
  //   getAllGinCocktails().then((result) => this.setState({ gin: result }));
  //   getAllVodkaCocktails().then((result) => this.setState({ vodka: result }));
  //   getAllRumCocktails().then((result) => this.setState({ rum: result }));
  //   getAllScotchCocktails().then((result) => this.setState({ scotch: result }));
  //   getAllMocktails().then((result) => this.setState({ mocktails: result }));
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
          <Route path="/:category">
            <Grid content={this.state} />
          </Route>
          <Route path="/">
            <Grid content={categories} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}
export default App;
