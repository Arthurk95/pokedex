import styles from "../styles/Attributes.module.css";

export default function AttributeList({ props, children }) {
  return <div className={styles["attribute-list"]}>{children}</div>;
}
