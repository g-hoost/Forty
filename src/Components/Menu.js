import { Link } from "react-router-dom";


const Menu = () => {
  return (
    <>
      <div className="w-full px-14 py-24 bg-dark-blue text-white text-left font-secondary text-5xl
      md:w-1/2">
        <Link to="/gin"><p>Gin</p></Link>
        <Link to="/vodka"><p>Vodka</p></Link>
        <Link to="/rum"><p>Rum</p></Link>
        <Link to="/scotch"><p>Scotch</p></Link>
        <Link to="/alkoholfrei"><p>Alkoholfrei</p></Link>
        <Link to="/zufall"><p>Zufall</p></Link>
      </div>
    </>
  );
};

export default Menu;
