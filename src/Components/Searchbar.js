import React from "react";
import { Link } from "react-router-dom";
import { searchCocktail } from "../CocktailAPI";

const Searchbar = () =>
{
  let textInput = React.createRef();
  // searchDrink = (event) =>
  // {

  //   searchCocktail(urlCategory).then((result) =>
  //     this.setState({ [event.target.name]: event.target.value })

  //   )
  // }
  const submitSearch = (event) =>
  {
    event.preventDefault();
    console.log(textInput.current.value);
    searchCocktail(textInput.current.value).then((result) =>
      console.log(result)
    );
  }


  return (
    <article>
      <form>
        <input className="bg-white rounded-lg  text-center py-2"
          type="text"
          name="search"
          placeholder="type drink name"
          size="15"
          ref={textInput}
        ></input>
        <Link to="/search"><button onClick={e => submitSearch(e)} className="bg-light-blue rounded-lg px-2 py-2 ml-4">Search</button></Link>
      </form>
    </article>
  );
};

export default Searchbar