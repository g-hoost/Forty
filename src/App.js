import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Component } from "react";

import "./App.css";

import DrinkDetailPage from "./Components/DrinkDetailPage";
import DrinkUpload from "./Components/DrinkUpload";
import Footer from "./Components/Footer";
import Grid from "./Components/Grid";
import Header from "./Components/Header";
import Searchbar from "./Components/Searchbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ["Gin", "Vodka", "Rum", "Scotch", "Alkoholfrei", "Zufall"],
    };
  }

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/upload">
            <DrinkUpload />
          </Route>
          <Route path="/search/:searchTerm">
            <Grid key={3} />
          </Route>
          <Route path="/Zufall">
            <DrinkDetailPage />
          </Route>
          <Route path="/:category/:id">
            <DrinkDetailPage />
          </Route>
          <Route path="/:category">
            <Grid key={1} />
          </Route>
          <Route exact path="/">
            <Grid key={2} content={this.state.categories} />
          </Route>
        </Switch>

        <Footer />
      </Router>
    );
  }
}
export default App;
