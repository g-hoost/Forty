// import {
//   getAllGinCocktails,
//   getAllVodkaCocktails,
//   getAllRumCocktails,
//   getAllScotchCocktails,
//   getAllMocktails,
//   getRandomCocktail,
// } from "./CocktailAPI";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
    };
  }

  componentDidMount() {
    //   getAllGinCocktails().then((result) => this.setState({ gin: result }));
    //   getAllVodkaCocktails().then((result) => this.setState({ vodka: result }));
    //   getAllRumCocktails().then((result) => this.setState({ rum: result }));
    //   getAllScotchCocktails().then((result) => this.setState({ scotch: result }));
    //   getAllMocktails().then((result) => this.setState({ mocktails: result }));
  }

  render() {
    return <h1>Grid</h1>;
  }
}
export default Grid;
