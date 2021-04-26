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
          className="bg-white rounded-lg text-center py-2 px-2"
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
        <Link to="/upload">
          <button className="md:bg-light-blue md:rounded-lg md:px-2 md:py-2 md:ml-4 ">
            My own cocktail
          </button>
        </Link>
      </form>
    </article>
  );
};
export default Searchbar;
