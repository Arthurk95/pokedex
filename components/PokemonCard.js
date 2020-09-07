import axios from "axios";
import InfoPanel from "../components/InfoPanel";
import Overlay from "../components/Overlay";
import Title from "../components/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/PokeCard.module.css";
import StatsPanel from "./Stats/StatsPanel";
import Types from "./Types/Types";

export default class PokemonCard extends React.Component {
  constructor(props) {
    super(props);
    this.Link = props.link;
    this.state = {
      error: null,
      isLoaded: false,
      pokeData: [],
      active: false,
      hover: false,
    };
  }

  componentDidMount() {
    if (!!this.Link) {
      fetch(this.Link)
        .then((res) => res.json())
        .then((result) => {
          this.setState({
            isLoaded: true,
            pokeData: result,
          });
        });
    }
  }

  render() {
    const { error, isLoaded, pokeData } = this.state;

    if (error) {
      return <div>{error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return this.buildElement(pokeData);
    }
  }

  openInfoPanel = () => {
    this.setState({ active: true });
  };
  closeInfoPanel = (e) => {
    e.stopPropagation();
    this.setState({ active: false });
  };
  hoverOn = () => {
    this.setState({ hover: true });
  };

  hoverOff = () => {
    this.setState({ hover: false });
  };

  buildElement(data) {
    var { name, sprites, abilities, types } = data;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const image = sprites.other["official-artwork"].front_default;

    let classes = this.state.active
      ? styles["pokemon-card"] +
        " " +
        styles["pokemon-card-grid"] +
        " " +
        styles["default-cursor"]
      : styles["pokemon-card"];

    return (
      <div
        className={classes}
        onClick={this.openInfoPanel}
        onMouseEnter={this.hoverOn}
        onMouseLeave={this.hoverOff}
      >
        <p className={styles.id}>#{data.id}</p>
        <div className="flex-list-centered relative">
          <Overlay
            hide={this.state.active}
            text="Click for more details"
            hover={this.state.hover}
          />
          <Types types={types} />
          <img src={image} />
          <Title
            additionalStyles={{ sizeMultiplier: 1.5, center: true }}
            text={name}
          />

          <StatsPanel info={data} toShow={this.state.active} />
        </div>

        <InfoPanel show={this.state.active} data={data} />
        <div
          className={`close-button ${
            !this.state.active ? " display-none" : ""
          }`}
          onClick={this.closeInfoPanel}
        >
          <FontAwesomeIcon icon={faTimes} />
        </div>
      </div>
    );
  }
}
