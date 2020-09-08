import StatsPanel from "./Stats/StatsPanel";
import styles from "../styles/PokemonProfile.module.css";
import PokemonCard from "./PokemonCard";
import TitledPanel from "./TitledPanel";
import AttributeList from "./Attributes/AttributeList";
import AbilitiesList from "./Abilities/AbilitiesList";
import Types from "./Types/Types";

export default function PokemonProfile(props) {
  const { pokeData, imgUrl } = props;
  const { name, id, types, moves, abilities, stats } = pokeData;

  if (!pokeData.name) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles["pokemon-profile"]}>
      <div className={styles.left + " " + styles.panel}>
        <PokemonCard name={name} id={id} redirect={false} imgUrl={imgUrl} />
        <Types types={types} />
        <div className="padding-2em">
          <StatsPanel stats={stats} id={id} />
        </div>
      </div>
      <div className={styles.panel + " " + styles.content}>
        <TitledPanel title="Attributes">
          <AttributeList data={pokeData} />
        </TitledPanel>
        <TitledPanel title="Abilities">
          <AbilitiesList abilitiesData={abilities} />
        </TitledPanel>
      </div>
    </div>
  );
}
