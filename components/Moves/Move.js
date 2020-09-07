import styles from "../../styles/Moves.module.css";

export default function Move({ data }) {
  return <p className={styles.move}>{data.name}</p>;
}
