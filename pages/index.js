import PokemonCard from "../components/PokemonCard";
import InfiniteScroll from "react-infinite-scroller";
import { AllPoke } from "../utils/allPoke";
import axios from "axios";
import { useState } from "react";
import Search from "../components/Search";
import { getIdFromUrl } from "../utils/util";
import Loader from "../components/Loader";

const API_CORE = "https://pokeapi.co/api/v2/";

export default function Home(props) {
  const [nextLink, setNextLink] = useState(props.nextLink);
  const [pokeArray, setPokeArray] = useState(props.pokeList);
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState(AllPoke);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = async (page) => {
    if (!isSearching) {
      try {
        const { pokeList, url } = await fetchPokeNameList(nextLink);

        let newArray = pokeArray;
        pokeList.map((n, index) => {
          newArray.push(n);
        });
        setNextLink(url);
        setPokeArray(newArray);
      } catch (err) {
        setHasMore(false);
      }
    }
  };

  const onSearchEntry = (e) => {
    let val = e.target.value;
    let oldResults = searchResults;
    if (val !== "") {
      let newList = [];

      newList = oldResults.filter((poke) =>
        poke.name.includes(val.toLowerCase())
      );

      setSearchResults(newList);
      setIsSearching(true);
      setPokeArray(newList);
    } else {
      setSearchResults(AllPoke);
      setPokeArray(props.pokeList);
      setIsSearching(false);
    }
  };

  let pokeElements = pokeArray.map((poke) => {
    return <PokemonCard name={poke.name} id={poke.id} redirect={true} />;
  });

  return (
    <div className="flex-centered-list">
      <Search onChangeFunc={onSearchEntry} placeholderText="Search Pokemon" />
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={<Loader />}
      >
        <div className="grid-list four-cols" key="list">
          {pokeElements}
        </div>
      </InfiniteScroll>
    </div>
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
    return { name: poke.name, id: getIdFromUrl(poke.url) };
  });
  url = res.data.next;
  return { pokeList, url };
}

// used to fill allPoke.js file for search functionality
async function getAllPokemonNames() {
  const res = await axios.get(API_CORE + "pokemon?limit=2000");

  let pokeList = res.data.results.map((poke) => {
    let id = poke.url.split("/");
    id = id[id.length - 2];
    return { name: poke.name, id: id };
  });

  return pokeList;
}
