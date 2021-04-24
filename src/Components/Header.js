import vector from "../img/vector.png";
import Searchbar from "./Searchbar";



const Header = () =>
{
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("header").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

  return (
    <header className="bg-dark-blue p-3">
      <article className="text-sm flex justify-between">
        <Link to="/"><h3 className="font-secondary uppercase"> Forty</h3></Link>
        <p onClick="openNav()" id="mySidenav" className="uppercase">Menu</p>
      </article>
      <section className="mt-24 ml-12 text-left">
        <h1 className="font-secondary text-5xl">Cocktails & Getränke</h1>
        <p className="text-xs uppercase mt-2">Herzlich Willkommen in der Welt der Cocktails und Getränke!</p>
        <div className="text-dark-blue mt-6">
          <Searchbar />
          {/* <input className="bg-white rounded-lg  text-center py-2"
            type="text"
            name="search"
            value="type something"
            size="15"
          // onChange={this.handleChange}
          ></input>
          <button className="bg-light-blue rounded-lg px-2 py-2 ml-4">Search</button> */}
        </div>
      </section>
      <div className="headerImgContainer grid justify-center ">
        <img className="self-center w-5 pt-8" src={vector} alt="three down arrows"></img>
      </div>
    </header>
  );
};

export default Header;
