import styles from "../styles/TitledPanel.module.css";

export default function TitledPanel({
  title,
  titleSubtext,
  contentClasses,
  children,
}) {
  return (
    <div className={styles["titled-panel"]}>
      <div className={styles["title-container"]}>
        <h4>{title}</h4>
        <p>{titleSubtext}</p>
      </div>

      <div className={styles["titled-panel-contents"] + " " + contentClasses}>
        {children}
      </div>
    </div>
  );
}
