import React from "react";
import { Link } from "react-router-dom";
import { searchCocktail } from "../CocktailAPI";

const Searchbar = () => {
  let textInput = React.createRef();

  const submitSearch = (event) => {
    event.preventDefault();
    location.href = location.origin + "/search/" + textInput.current.value;
  };

  return (
    <article>
      <form>
        <input
          className="bg-white rounded-lg text-center py-2 px-2 focus:bg-green focus:placeholder-white text-white"
          type="text"
          name="search"
          placeholder="type drink name"
          size="15"
          ref={textInput}
        ></input>

        <button
          onClick={(e) => submitSearch(e)}
          className="bg-light-blue rounded-lg px-2 py-2 ml-4 hover:text-white"
        >
          Search
        </button>
      </form>
    </article>
  );
};
export default Searchbar;
