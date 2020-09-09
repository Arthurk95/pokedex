import styles from "../../styles/Moves.module.css";
import { useState } from "react";

export default function Move({ data }) {
  const [stats, updateStats] = useState(undefined);
  const [statsShown, toggleStats] = useState(false);

  const toggleStats = async () => {
    if (stats === undefined) {
      await getStats();
    }

    toggleStats(!statsShown);
  };

  const getStats = async () => {
    const res = await axios.get(data.url);
    const { accuracy, power, pp } = res.data;
    const damageClass = res.data.damage_class.name;
    const description = res.data.effect_entries[0].short_effect;

    updateStats({
      accuracy,
      power,
      pp,
      damageClass,
      description,
    });
  };

  let statsElement = "";
  if (stats) {
    statsElement = (
      <div className={styles["stats-panel"]}>
        <div className="flex-list">
          <p>Power: {power}</p>
          <p>Class: {damageClass}</p>
          <p>Accuracy: {accuracy}</p>
          <p>PP: {pp}</p>
        </div>
        <p>{description}</p>
      </div>
    );
  }

  return (
    <div className={styles["move-container"]}>
      <p className={styles.move} onClick={toggleStats}>
        {data.name}
      </p>
      {statsShown && statsElement}
    </div>
  );
}
