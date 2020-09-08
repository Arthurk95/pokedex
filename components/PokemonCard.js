import InfoPanel from "../components/InfoPanel";
import Overlay from "../components/Overlay";
import Title from "../components/Title";
import styles from "../styles/PokeCard.module.css";
import { toCapital } from "../utils/util";
import Link from "next/link";

const IMAGE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
const IMAGE_EXT = ".png";

function PokemonCard(props) {
  let { name, id, redirect, mini, imgUrl } = props;
  const href = `/pokemon/${name}`;
  name = toCapital(name);
  const image = imgUrl ? imgUrl : `${IMAGE_URL}${id}${IMAGE_EXT}`;

  let classes = styles["pokemon-card"];
  if (!redirect) {
    classes += " " + styles["default-cursor"];
  }
  if (mini) {
    classes += " " + styles.mini;
  }

  let html = (
    <div className={classes}>
      <p className={styles.id}>#{id}</p>
      <Overlay text="Click for more details" />
      <div className="flex-list-centered relative">
        <div className={styles["img-container"]}>
          <img src={image} />
        </div>
        <Title
          additionalStyles={{ sizeMultiplier: 1.5, center: true }}
          text={name}
        />
      </div>
    </div>
  );
  if (redirect) {
    return <Link href={href}>{html}</Link>;
  } else {
    return html;
  }
}

export default PokemonCard;
