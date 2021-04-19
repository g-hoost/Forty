import { Link } from "react-router-dom";

const MainTile = (props) => {
  return (
    <Link to={`/${props.name}`}>
      <h1>{props.name}</h1>
      <p>Lorem bla bla bla</p>
    </Link>
  );
};

export default MainTile;
