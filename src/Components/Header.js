import vector from "../img/vector.png";

const Header = () => {
  return (
    <header>
      <h3> FORTY</h3>
      <p>MENU</p>
      <h1>Cocktails & Getränke</h1>
      <p>HERZLICH WILLKOMMEN IN DER WELT DER COCKTAILS UND GETRÄNKE!</p>
      <br></br>
      <input
        type="search"
        name="search"
        value="type something"
        // onChange={this.handleChange}
      ></input>
      <button>Search</button>
      <div className="headerImgContainer">
        <img src={vector} alt="three down arrows"></img>
      </div>
    </header>
  );
};

export default Header;
