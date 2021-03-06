import AttributeList from "./Attributes/AttributeList";
import AbilitiesList from "./Abilities/AbilitiesList";
import StatsPanel from "./Stats/StatsPanel";
import TitledPanel from "./TitledPanel";
import { toCapital } from "../utils/util.js";
import Button from "./Button";

export default function InfoPanel(props) {
  let info = props.data;

  let pokeName = toCapital(info.name);

  return (
    <div className="info-panel">
      <div className="info-panel-title">
        <h2>{pokeName}</h2>
        <Button onclick={null} text={`${pokeName}'s Profile`} />
      </div>
      <div className="flex-list-column gap-2em">
        <TitledPanel title="Attributes">
          <AttributeList data={info} />
        </TitledPanel>
        <TitledPanel title="Abilities">
          <AbilitiesList abilitiesData={info.abilities} />
        </TitledPanel>
      </div>
    </div>
  );
}
