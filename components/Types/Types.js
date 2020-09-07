import styles from "../../styles/Type.module.css";

export default function Types({ types }) {
  let elements = types.map((type, index) => {
    return <Type type={type.type.name} />;
  });

  return <div className={styles["type-container"]}>{elements}</div>;
}

export function Type({ type }) {
  return <p className={styles.type + " " + styles[`${type}`]}>{type}</p>;
}
