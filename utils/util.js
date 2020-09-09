const IMAGE_EXT = ".png";

const IMAGE_URLS = [
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/",
  "https://assets.pokemon.com/assets/cms2/img/pokedex/full/",
];

import axios from "axios";

export function toCapital(val) {
  // console.log(val);
  val = val.charAt(0).toUpperCase() + val.slice(1);
  return val;
}

export async function getImageUrl(pokemonId) {
  async function tryLink(link) {
    try {
      const imageRes = await axios.get(link);
      return true;
    } catch {
      return false;
    }
  }
  for (const imageUrl of IMAGE_URLS) {
    let url = `${imageUrl}${pokemonId}${IMAGE_EXT}`;
    if (await tryLink(url)) {
      console.log(url);
      return url;
    }
  }
}

export function getIdFromUrl(url) {
  let id = url.split("/");
  id = id[id.length - 2];
  return id;
}
