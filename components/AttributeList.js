import styles from "../styles/Attributes.module.css";
import Title from "./Title";

export default function AttributeList({ props, children }) {
  return (
    <div className={styles["attribute-list"]}>
      <Title additionalStyles={{sizeMultiplier: 1.5}} text="Attributes" />
      {children}
    </div>
  );
}
