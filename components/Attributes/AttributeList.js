import styles from "../../styles/Attributes.module.css";
import Attribute from "./Attribute";

export default function AttributeList(props) {
  let info = props.data;
  return (
    <div className={styles["attribute-list"]}>
      <Attribute title="Height" value={toFeetInches(info.height * 4)} />
    </div>
  );
}

function toFeetInches(valueInInches) {
  let feet = Math.trunc(valueInInches / 12);
  let inches = valueInInches - feet * 12;

  let convertedString = feet.toString() + "' " + inches.toString() + '"';
  return convertedString;
}
