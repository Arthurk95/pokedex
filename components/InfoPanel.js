import AttributeList from "./Attributes/AttributeList";
import AbilitiesList from "./Abilities/AbilitiesList";
import MovesList from "./Moves/MovesList";

export default function InfoPanel(props) {
  let info = props.data;
  let styles = props.show ? "info-panel active" : "info-panel";

  return (
    <div className={styles}>
      <div className="flex-list-column gap-2em">
        <AttributeList data={info} />
        <AbilitiesList abilitiesData={info.abilities} />
      </div>
      <MovesList moves={info.moves} />
    </div>
  );
}
