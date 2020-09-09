import axios from "axios";
import PokemonProfile from "../../components/PokemonProfile";
import { getImageUrl } from "../../utils/util";
import Loader from "../../components/Loader";

const POKE_API = "https://pokeapi.co/api/v2/pokemon/";

export default function Pokemon({ pokeData, url }) {
  if (!pokeData) {
    return <Loader />;
  } else {
    return <PokemonProfile pokeData={pokeData} imgUrl={url} />;
  }
}

export async function getStaticProps({ params }) {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  const pokeData = res.data;
  const url = await getImageUrl(pokeData.id);

  return { props: { pokeData, url } };
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [{ params: { id: "" } }],
  };
}
