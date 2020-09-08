import PokemonCard from "../components/PokemonCard";
import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";
import { useState } from "react";

const API_CORE = "https://pokeapi.co/api/v2/";

export default function Home(props) {
  const [nextLink, setNextLink] = useState(props.nextLink);
  const [pokeArray, setPokeArray] = useState(props.pokeList);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async (page) => {
    try {
      const { pokeList, url } = await fetchPokeNameList(nextLink);

      let newArray = pokeArray;
      pokeList.map((n, index) => {
        newArray.push(n);
      });
      console.log(newArray);
      setNextLink(url);
      setPokeArray(newArray);
    } catch (err) {
      setHasMore(false);
    }
  };

  let pokeElements = pokeArray.map((name, index) => {
    return <PokemonCard name={name} id={index + 1} redirect={true} />;
  });
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={hasMore}
      loader={<p>Loading...</p>}
    >
      <div className="grid-list-4-cols" key="list">
        {pokeElements}
      </div>
    </InfiniteScroll>
  );
}

export async function getStaticProps() {
  const { pokeList, url } = await fetchPokeNameList(API_CORE + "pokemon");
  const nextLink = url;
  return { props: { pokeList, nextLink } };
}

async function fetchPokeNameList(url) {
  const res = await axios.get(url);

  const pokeList = res.data.results.map((poke) => {
    return poke.name;
  });
  url = res.data.next;
  return { pokeList, url };
}
