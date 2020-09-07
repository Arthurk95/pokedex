import PokemonCard from "../components/PokemonCard";
import InfiniteScroll from "react-infinite-scroller";

const API_CORE = "https://pokeapi.co/api/v2/";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Elements: [],
      NextLink: API_CORE + "pokemon",
      hasMoreItems: true,
    };
  }

  componentDidMount() {
    fetch(this.state.NextLink)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          Data: result.results,
          Elements: result.results.map((poke, index) => {
            return <PokemonCard key={poke.id} link={poke.url}></PokemonCard>;
          }),
          NextLink: result.next,
        });
      });
  }

  loadMore = async (page) => {
    if (this.state.NextLink === null) {
      this.setState({
        hasMoreItems: false,
      });
    } else {
      fetch(this.state.NextLink)
        .then((res) => res.json())
        .then((result) => {
          let els = this.state.Elements;
          els.push(
            result.results.map((poke, index) => {
              return <PokemonCard key={poke.id} link={poke.url}></PokemonCard>;
            })
          );
          this.setState({
            Data: result.results,
            NextLink: result.next,
            Elements: els,
          });
        });
    }
  };

  render() {
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.loadMore.bind(this)}
        hasMore={this.state.hasMoreItems}
        loader={<p>Loading...</p>}
      >
        <div className="grid-list-4-cols" key="list">
          {this.state.Elements}
        </div>
      </InfiniteScroll>
    );
  }
}
