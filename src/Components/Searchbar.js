import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { searchCocktail } from "../CocktailAPI";
import axios from "axios";

const Searchbar = () =>
{
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([])

  useEffect(() =>
  {
    const search = async (e) =>
    {
      e.preventDefault();
      const { data } = await axios.get(searchCocktail)
      setResults(data)
    }

    if (term) {
      search()
    }
  }, [term])


  return (
    <article>
      <form>
        <input className="bg-white rounded-lg  text-center py-2"
          type="text"
          name="search"
          placeholder="type drink name"
          size="15"
        ></input>
        <Link to="/search"><button onClick={e => setTerm(e.target.value)} className="bg-light-blue rounded-lg px-2 py-2 ml-4">Search</button></Link>
        <Link to="/upload"><button className="bg-light-blue rounded-lg px-2 py-2 ml-4 ">My own cocktail</button></Link>
      </form>
    </article>
  )
}
export default Searchbar

//   useEffect(() =>
//   {
//     const search = async () =>
//     {
//       const { data } = await axios.get(searchCocktail)
//     }
//     setResults(data)
//   }


//   return (
//     <article>
//       <form>
//         <input className="bg-white rounded-lg  text-center py-2"
//           type="text"
//           name="search"
//           placeholder="type drink name"
//           size="15"
//         ></input>
//         <Link to="/search"><button onClick={e => setTerm(e.target.value)} className="bg-light-blue rounded-lg px-2 py-2 ml-4">Search</button></Link>
//       </form>
//     </article>
//   )
// }
// export default Searchbar;

// class Searchbar extends Component
// {

//   constructor()
//   {
//     super();
//     this.state = {};
//     this.onClick = this.onClick.bind(this);
//   }
//   onClick(event)
//   {
//     this.setState({
//       [event.target.name]: event.target.value
//     })

//   }
//   render()
//   {
//     const { items } = this.state;


//     return (
//       <article>
//         <form>
//           <input className="bg-white rounded-lg  text-center py-2"
//             type="text"
//             name="search"
//             placeholder="type drink name"
//             size="15"
//           ></input>
//           <Link to="/search"><button onClick={this.onClick} className="bg-light-blue rounded-lg px-2 py-2 ml-4">Search</button></Link>
//         </form>
//       </article>
//     );
//   }
// }
// export default Searchbar;

// const Searchbar = () =>
// {
//   let textInput = React.createRef();

//   // const searchDrink = (event) =>
//   // {

//   //   searchCocktail(textInput.current.value).then((result) =>
//   //     this.setState({ [event.target.name]: event.target.value })

//   //   )
//   // }
//   const submitSearch = (event) =>
//   {
//     event.preventDefault();

//     console.log(textInput.current.value);

//     searchCocktail(textInput.current.value).then((result) =>
//       console.log(result)
//     );
//   }


// return (
//   <article>
//     <form>
//       <input className="bg-white rounded-lg  text-center py-2"
//         type="text"
//         name="search"
//         placeholder="type drink name"
//         size="15"
//         ref={textInput}
//       ></input>
//       <Link to="/search"><button onClick={e => submitSearch(e)} className="bg-light-blue rounded-lg px-2 py-2 ml-4">Search</button></Link>
//     </form>
//   </article>
// );
// };

// export default Searchbar