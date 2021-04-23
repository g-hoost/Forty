import { Link } from "react-router-dom";

const MainTile = (props) =>
{
  return (
    <Link to={`/${props.name}`}>
      <h1>{props.name}</h1>
      <p>WACHOLDER - EINE FRAGE DES GESCHMACKS</p>
    </Link>
  );
};

export default MainTile;
