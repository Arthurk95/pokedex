import Move from "./Move";
import styles from "../../styles/Moves.module.css";
import Title from "../Title";

export default function MovesList({ moves }) {
  let elements = moves.map((move, index) => {
    return <Move data={move.move} />;
  });

  return (
    <div>
      <Title text="Moves" additionalStyles={{ sizeMultiplier: 1.5 }} />
      <div className={styles["moves-list"]}>{elements}</div>
    </div>
  );
}
