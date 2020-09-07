import AttributeList from "./Attributes/AttributeList";
import AbilitiesList from "./Abilities/AbilitiesList";
import StatsPanel from "./Stats/StatsPanel";

export default function InfoPanel(props) {
  let info = props.data;
  let styles = props.show ? "info-panel active" : "info-panel";

  return (
    <div className={styles}>
      <div className="flex-list-column gap-2em">
        <AttributeList data={info} />
        <AbilitiesList abilitiesData={info.abilities} />
      </div>

      <StatsPanel info={info} toShow={true} />
    </div>
  );
}
