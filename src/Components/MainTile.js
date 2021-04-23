import { Link } from "react-router-dom";

const MainTile = (props) =>
{
  return (
    <Link to={`/${props.name}`}>
        <section >
          <h1 className="">{props.name}</h1>
          <p>LOREM BLA BLA</p>
        </section>
    </Link>
  );
};

export default MainTile;
