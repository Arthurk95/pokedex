import Title from "../Title";
import styles from "../../styles/Attributes.module.css";

export default function Attribute(props) {
  const { title, value } = props;

  return (
    <div className={styles["attribute"]}>
      <Title text={title} size={1} center={true} otherClasses={"text-light"} />
      <p>{value}</p>
    </div>
  );
}
