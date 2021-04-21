import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Component } from "react";

import "./App.css";

import DrinkDetailPage from "./Components/DrinkDetailPage";
import DrinkUpload from "./Components/DrinkUpload";
import Footer from "./Components/Footer";
import Grid from "./Components/Grid";
import Header from "./Components/Header";
// import Homepage from "./Components/Homepage";
// import DrinkTile from "./Components/DrinkTile";

class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      categories: ["Gin", "Vodka", "Rum", "Scotch", "Alkoholfrei"],
    };
  }

  render()
  {
    return (
      <Router>
        <div className="App">

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
              <Grid key={1} />
            </Route>
            <Route exact path="/">
              <Grid key={2} content={this.state.categories} />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}
export default App;
