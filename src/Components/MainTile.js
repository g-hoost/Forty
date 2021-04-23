import { Link } from "react-router-dom";

const MainTile = (props) =>
{
  return (
    <Link to={`/${props.name}`}>
      <h1>{props.name}</h1>
      <p>LOREM BLA BLA</p>
    </Link>
  );
};

export default MainTile;
