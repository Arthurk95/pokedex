import InfoPanel from "../components/InfoPanel";
import Overlay from "../components/Overlay";
import Title from "../components/Title";
import styles from "../styles/PokeCard.module.css";
import { toCapital, getImageUrl } from "../utils/util";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const IMAGE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
const IMAGE_EXT = ".png";

function PokemonCard(props) {
  let { name, id, redirect, mini } = props;
  const [imageUrl, setImageUrl] = useState(undefined);
  const href = `/pokemon/${name}`;
  name = toCapital(name);

  useEffect(() => {
    async function getImg() {
      let url = await getImageUrl(id);
      setImageUrl(url);
    }
    getImg();
  }, [id]);
  let classes = styles["pokemon-card"];
  if (!redirect) {
    classes += " " + styles["default-cursor"];
  }
  if (mini) {
    classes += " " + styles.mini;
  }

  let imageElement = imageUrl ? (
    <img src={imageUrl} />
  ) : (
    <Loader size={"small"} />
  );

  let html = (
    <div className={classes}>
      <p className={styles.id}>#{id}</p>
      <Overlay text="Click for more details" />
      <div className={styles["img-container"]}>{imageElement}</div>
      <Title size={1.5} center={true} text={name} />
    </div>
  );
  if (redirect) {
    return <Link href={href}>{html}</Link>;
  } else {
    return html;
  }
}

export default PokemonCard;
