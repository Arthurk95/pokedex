import styles from "../../styles/Abilities.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { toCapital } from "../../utils/util";
const API_CORE = "https://pokeapi.co/api/v2/";

export default function Ability({ abilityData }) {
  const [description, setDesc] = useState("");
  let name = toCapital(abilityData.name);

  useEffect(() => {
    fetch(abilityData.url)
      .then((res) => res.json())
      .then((result) => {
        result.effect_entries.forEach((element) => {
          if (element.language.name === "en") {
            setDesc(element.effect);
          }
        });
      });
  }, []);

  return (
    <div className={styles.ability}>
      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}
