import Title from "../Title";
import styles from "../../styles/Attributes.module.css";

export default function Attribute(props) {
  const { title, value } = props;

  return (
    <div className={styles["attribute"]}>
      <Title
        text={title}
        additionalStyles={{
          sizeMultiplier: 1,
          center: false,
          otherClasses: "text-light",
        }}
      />
      <p>{value}</p>
    </div>
  );
}
