import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <main>
      <Link to="/gin">
        <h2>Gin</h2>
        <p>lorem bla bla </p>
      </Link>
      <Link to="/vodka">
        <h2>Vodka</h2>
        <p>lorem bla bla </p>
      </Link>
    </main>
  );
};

export default Homepage;
