import styles from "../../styles/Moves.module.css";
import { useState } from "react";
import axios from "axios";
import Loader from "../Loader";

export default function Move({ data }) {
  const [stats, updateStats] = useState(undefined);
  const [statsShown, setStatsShown] = useState(false);

  const toggleStats = async () => {
    setStatsShown(!statsShown);
    if (stats === undefined) {
      await getStats();
    }
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

  if (statsShown) {
    let { power, damageClass, accuracy, pp, description } = stats || {};
    if (power === undefined) {
      power = <div className="placeholder"></div>;
    }
    if (damageClass === undefined) {
      damageClass = <div className="placeholder"></div>;
    }
    if (accuracy === undefined) {
      accuracy = <div className="placeholder"></div>;
    }
    if (pp === undefined) {
      pp = <div className="placeholder"></div>;
    }
    if (description === undefined) {
      description = <div className="placeholder"></div>;
    }

    return (
      <div className={styles["move-container"] + " " + styles.active}>
        <p className={styles.move + " " + styles.active} onClick={toggleStats}>
          {data.name}
        </p>
        <p className="panel-bg-dark padding-05em">{description || "N/A"}</p>
        <div className={styles["stats-table"]}>
          <div>
            <h4>Power</h4>
            <p>{power || "N/A"}</p>
          </div>
          <div>
            <h4>Type</h4>
            <p>{damageClass || "N/A"}</p>
          </div>
          <div>
            <h4>Accuracy</h4>
            <p>{accuracy || "N/A"}</p>
          </div>
          <div>
            <h4>PP</h4>
            <p>{pp || "N/A"}</p>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className={styles["move-container"]}>
        <p
          className={styles.move + " " + (statsShown ? styles.active : "")}
          onClick={toggleStats}
        >
          {data.name}
        </p>
      </div>
    );
}
