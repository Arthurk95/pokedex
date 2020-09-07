import styles from "../../styles/Abilities.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
const API_CORE = "https://pokeapi.co/api/v2/";

export default class Ability extends React.Component {
  constructor(props) {
    super(props);
    this.abilityData = props.abilityData;
    this.state = {
      description: "",
    };
  }

  componentDidMount() {
    fetch(this.abilityData.url)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          description: result.effect_entries[0].effect,
        });
      });
  }

  render() {
    let abilText = this.abilityData.name;
    abilText = abilText.charAt(0).toUpperCase() + abilText.slice(1);
    return (
      <div className={styles.ability}>
        <p>{abilText}</p>
        <FontAwesomeIcon icon={faQuestion} size="xs" />
        
      </div>
    );
  }
}
