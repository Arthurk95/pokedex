import StatsPanel from "./Stats/StatsPanel";
import styles from "../styles/PokemonProfile.module.css";
import PokemonCard from "./PokemonCard";
import TitledPanel from "./TitledPanel";
import AttributeList from "./Attributes/AttributeList";
import AbilitiesList from "./Abilities/AbilitiesList";
import MovesList from "./Moves/MovesList";
import Types from "./Types/Types";
import Loader from "./Loader";

export default function PokemonProfile(props) {
  const { pokeData, imgUrl } = props;
  const { name, id, types, moves, abilities, stats } = pokeData;

  if (!pokeData.name) {
    return <Loader />;
  }
  return (
    <div className={styles["pokemon-profile"]}>
      <div className={"panel"}>
        <PokemonCard name={name} id={id} redirect={false} imgUrl={imgUrl} />
        <Types types={types} />
        <div className="padding-2em">
          <StatsPanel stats={stats} id={id} />
        </div>
      </div>
      <div className={"panel flex-list-column padding-2em gap-2em "}>
        <div className={styles.row}>
          <TitledPanel title="Attributes">
            <AttributeList data={pokeData} />
          </TitledPanel>
          <TitledPanel title="Abilities">
            <AbilitiesList abilitiesData={abilities} />
          </TitledPanel>
        </div>

        <div>
          <MovesList moves={pokeData.moves} />
        </div>
      </div>
    </div>
  );
}
