import Stat from "../components/Stat";

export default function InfoPanel(props) {
  let info = props.data;
  let styles = props.active ? "info-panel active" : "info-panel";
  return (
    <div className={styles}>
      <Stat title="Height" value={toFeetInches(info.height * 4)} />
      <Stat title="Category" value="" />
    </div>
  );
}

function toFeetInches(valueInInches) {
  let feet = Math.trunc(valueInInches / 12);
  let inches = valueInInches - feet * 12;

  let convertedString = feet.toString() + "' " + inches.toString() + '"';
  return convertedString;
}
