import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <Link to="/gin">Gin</Link>
      <Link to="/vodka">Vodka</Link>
      <Link to="/rum">Rum</Link>
      <Link to="/scotch">Scotch</Link>
      <Link to="/alkoholfrei">Alkoholfrei</Link>
      <Link to="/zufall">Zufall</Link>
    </>
  );
};

export default Menu;
