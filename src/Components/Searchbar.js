import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { searchCocktail } from "../CocktailAPI";
import axios from "axios";

const Searchbar = () => {
  let textInput = React.createRef();

  const submitSearch = (event) => {
    event.preventDefault();
    location.href += "search/" + textInput.current.value;
    console.log(location.hostname);
  };

  return (
    <article>
      <form>
        <input
          className="bg-white rounded-lg  text-center py-2"
          type="text"
          name="search"
          placeholder="type drink name"
          size="15"
          ref={textInput}
        ></input>
        <button
          onClick={(e) => submitSearch(e)}
          className="bg-light-blue rounded-lg px-2 py-2 ml-4"
        >
          Search
        </button>
      </form>
    </article>
  );
};
export default Searchbar;
