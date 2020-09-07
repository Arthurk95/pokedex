import styles from "../styles/TitledPanel.module.css";

export default function TitledPanel({ title, children }) {
  return (
    <div className={styles["titled-panel"]}>
      <h4>{title}</h4>
      <div className={styles["titled-panel-contents"]}>{children}</div>
    </div>
  );
}
