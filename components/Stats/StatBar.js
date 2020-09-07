import styles from "../../styles/Stats.module.css";

const maxStat = 200; // scale used by PokeApi

export default function StatBar(props) {
  let { color, secondaryColor, stat } = props;

  let value = (stat.base_stat / maxStat) * 100; // need it in 100 scale for gradient

  let barGradient = {
    background: `linear-gradient(to right, ${color} ${value}%, ${secondaryColor} ${value}%)`,
  };

  let name = stat.stat.name;
  if (name.includes("-")) {
    let split = name.split("-");
    name = split.join(" ");
  }
  return (
    <div className={styles["stat-bar-wrapper"]}>
      <p>{name}</p>
      <div className={styles["stat-bar"]} style={barGradient}></div>
    </div>
  );
}
