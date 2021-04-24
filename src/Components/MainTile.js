import { Link } from "react-router-dom";

const MainTile = (props) =>
{
  return (
    <Link to={`/${props.name}`}>
        <section className="pt-28 pl-12">
          <h1 className="font-secondary text-5xl font-bold">{props.name}</h1>
          <p className="leading-5">LOREM BLA BLA</p>
        </section>
    </Link>
  );
};

export default MainTile;
