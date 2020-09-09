import Move from "./Move";
import styles from "../../styles/Moves.module.css";
import Title from "../Title";
import TitledPanel from "../TitledPanel";

export default function MovesList({ moves }) {
  let elements = moves.map((move, index) => {
    return <Move data={move.move} />;
  });

  return (
    <div>
      <TitledPanel title="Moves" contentClasses="scrollable panel-bg-dark">
        {elements}
      </TitledPanel>
    </div>
  );
}
