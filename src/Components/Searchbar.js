import { Component } from "react";
import React from "react";
// import DrinkDetailPage from "./Components/DrinkDetailPage";

class Searchbar extends Component
{
  state = {
    searchTerm: ""
  }
  searchDrink = (event) =>
  {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  submitSearch = (event) =>
  {
    event.preventDefault();
    console.log(event.target[0].value);
    // this.props.filterBySearchTerm(this.state.searchTerm)
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
            value="type drink name"
            size="15"
          // onChange={(e) => this.setKeyword(e.target.value)}
          ></input>
          <button className="bg-light-blue rounded-lg px-2 py-2 ml-4">Search</button>
        </form>
      </article>
    );
  }
};
export default Searchbar