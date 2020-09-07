import styles from "../../styles/Type.module.css";
import Link from "next/link";

export default function Types({ types }) {
  let elements = types.map((type, index) => {
    return <Type type={type.type.name} />;
  });

  return <div className={styles["type-container"]}>{elements}</div>;
}

export function Type({ type }) {
  return (
    <Link href={`type/${type}`}>
      <p className={styles.type + " " + styles[`${type}`]}>{type}</p>
    </Link>
  );
}
