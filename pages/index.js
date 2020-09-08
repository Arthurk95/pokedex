import PokemonCard from "../components/PokemonCard";
import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";
import { useState } from "react";

const API_CORE = "https://pokeapi.co/api/v2/";

export default function Home(props) {
  const [nextLink, setNextLink] = useState(props.nextLink);
  const [elements, setElements] = useState([]);
  console.log(props);

  const loadMore = async (page) => {
    fetch(nextLink)
      .then((res) => res.json())
      .then((result) => {
        let els = elements;
        els.push(
          result.results.map((poke, index) => {
            return <PokemonCard key={poke.id}></PokemonCard>;
          })
        );
        setElements(els);
      });
  };

  return <div></div>;
  // return (
  //   <InfiniteScroll
  //     pageStart={0}
  //     loadMore={this.loadMore.bind(this)}
  //     hasMore={this.state.hasMoreItems}
  //     loader={<p>Loading...</p>}
  //   >
  //     <div className="grid-list-4-cols" key="list">
  //       {this.state.Elements}
  //     </div>
  //   </InfiniteScroll>
  // );
}

export async function getStaticProps() {
  const res = await axios.get(API_CORE + "pokemon");

  const pokeList = res.data.results;
  const nextLink = res.data.next;
  return { props: { pokeList, nextLink } };
}
