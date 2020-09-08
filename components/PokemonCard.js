import InfoPanel from "../components/InfoPanel";
import Overlay from "../components/Overlay";
import Title from "../components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/PokeCard.module.css";
import Types from "./Types/Types";
import { useState, useEffect } from "react";
import { toCapital } from "../utils/util";
import axios from "axios";

function PokemonCard({ link }) {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  const [isFetching, pokeData] = useDataFetch(link);

  if (isFetching) {
    return <div>Loading...</div>;
  }
  let { name, sprites, types } = pokeData;
  name = toCapital(name);
  const image = sprites.other["official-artwork"].front_default;

  let classes = active
    ? styles["pokemon-card"] +
      " " +
      styles["pokemon-card-grid"] +
      " " +
      styles["default-cursor"]
    : styles["pokemon-card"];
  return (
    <div
      className={classes}
      onClick={() => setActive(true)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <p className={styles.id}>#{pokeData.id}</p>
      <div className="flex-list-centered relative">
        <Overlay hide={active} text="Click for more details" hover={hover} />
        <div className={styles["img-container"]}>
          <Types types={types} />
          <img src={image} />
        </div>
        {!active && (
          <Title
            additionalStyles={{ sizeMultiplier: 1.5, center: true }}
            text={name}
          />
        )}
      </div>

      <InfoPanel show={active} data={pokeData} />
      <div
        className={`close-button ${!active ? " display-none" : ""}`}
        onClick={setActive(false)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </div>
  );
}

function useDataFetch(link) {
  const [isFetching, setFetching] = useState(false);
  const [pokeData, setPokeData] = useState({});

  useEffect(
    function fetch() {
      (async function () {
        setFetching(true);
        setPokeData(await fetchData(link));
        setFetching(false);
      })();
    },
    [link]
  );

  return [isFetching, pokeData];
}

async function fetchData(link) {
  let res = await axios.get(link);
  console.log(res.data);
  return res.data;
}

export default PokemonCard;
