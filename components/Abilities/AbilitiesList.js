import styles from "../../styles/Abilities.module.css";
import Ability from "./Ability";

export default function AbilitiesList(props) {
  let { abilitiesData } = props;

  let abilities = abilitiesData.map((ability, index) => {
    return <Ability abilityData={ability.ability} />;
  });

  return <div className={styles["abilities-list"]}>{abilities}</div>;
}
