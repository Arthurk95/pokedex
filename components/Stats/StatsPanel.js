import StatBar from "./StatBar";
import styles from "../../styles/Stats.module.css";

export default function StatsPanel(props) {
  let { stats, id } = props;
  let statBars = stats.map((stat, index) => {
    return (
      <StatBar
        color="var(--Accent4)"
        stat={stat}
        secondaryColor="#EDEDED"
        key={`${id}-${stat.name}`}
      />
    );
  });

  let classList = styles["stats-panel"];

  return <div className={classList}>{statBars}</div>;
}
