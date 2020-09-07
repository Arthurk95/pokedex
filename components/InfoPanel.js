import Attribute from "./Attribute";
import StatBar from "./Stats/StatBar";
import AttributeList from "./AttributeList";

export default function InfoPanel(props) {
  let info = props.data;
  let styles = props.show ? "info-panel active" : "info-panel";
  let statBars = info.stats.map((stat, index) => {
    return (
      <StatBar
        color="var(--Accent4)"
        stat={stat}
        secondaryColor="#EDEDED"
        key={`${info.id}-${stat.stat.name}`}
      />
    );
  });

  return (
    <div className={styles}>
      <AttributeList>
        <Attribute title="Height" value={toFeetInches(info.height * 4)} />
      </AttributeList>
      <div className="flex-centered-list">{statBars}</div>
    </div>
  );
}

function toFeetInches(valueInInches) {
  let feet = Math.trunc(valueInInches / 12);
  let inches = valueInInches - feet * 12;

  let convertedString = feet.toString() + "' " + inches.toString() + '"';
  return convertedString;
}
