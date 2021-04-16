import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Component } from "react";

import "./App.css";
// import { fetch Namen } from "./CocktailAPI"

import Header from "./Components/Header";
import Footer from "./Components/Footer";

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    cocktails: []
  }
}

// componentDidMount() {

// }

render() {
  return(
    <Router>
      <Header />
      <Footer />
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
        <Route path="/drinks">
          <DrinksPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
}
export default App;
