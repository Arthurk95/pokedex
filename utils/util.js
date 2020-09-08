const IMAGE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
const IMAGE_URL_BACKUP =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const IMAGE_EXT = ".png";

export function toCapital(val) {
  // console.log(val);
  val = val.charAt(0).toUpperCase() + val.slice(1);
  return val;
}

export async function getImageUrl(pokemonId) {
  let url;
  try {
    url = `${IMAGE_URL}${pokemonId}${IMAGE_EXT}`;
    const imageRes = await axios.get(url);
  } catch (e) {
    url = `${IMAGE_URL_BACKUP}${pokemonId}${IMAGE_EXT}`;
  }
  return url;
}
