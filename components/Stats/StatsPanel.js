import StatBar from "./StatBar";
import Title from "../Title";
import styles from "../../styles/Stats.module.css";

export default function StatsPanel(props) {
  let { info } = props;
  let statBars = info.stats.map((stat, index) => {
    return (
      <StatBar
        color="var(--Accent4)"
        stat={stat}
        secondaryColor="#EDEDED"
        key={`${info.id}-${stat.stat.name}`}
      />
    );
  });

  let classList = props.toShow ? styles["stats-panel"] : "display-none";

  return (
    <div className={classList}>
      <Title additionalStyles={{ sizeMultiplier: 1.5 }} text="Stats" />
      {statBars}
    </div>
  );
}
