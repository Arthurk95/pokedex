import styles from "../styles/Loader.module.css";

export default function Loader({ size }) {
  return (
    <div className={styles["roller-container"] + " " + styles[size]}>
      <div className={styles["lds-roller"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
