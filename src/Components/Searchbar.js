import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { searchCocktail } from "./../CocktailAPI";

class Searchbar extends Component
{
  state = {
    searchTerm: ""
  }
  searchDrink = (event) =>
  {
    searchCocktail(urlCategory).then((result) =>
      this.setState({ [event.target.name]: event.target.value })
      // this.setState({
      //   [event.target.name]: event.target.value
    )
  }
  submitSearch = (event) =>
  {
    event.preventDefault();
    console.log(event.target[0].value);
    this.setState({ Term: "" })
  }
  render()
  {
    return (
      <article>
        <form onSubmit={e => this.submitSearch(e)}>
          <input className="bg-white rounded-lg  text-center py-2"
            type="text"
            name="search"
            placeholder="type drink name"
            size="15"
            onChange={(e) => this.submitSearch(e.target.value)}
          ></input>
          <Link to="/search"><button className="bg-light-blue rounded-lg px-2 py-2 ml-4">Search</button></Link>
        </form>
      </article>
    );
  }
};
export default Searchbar