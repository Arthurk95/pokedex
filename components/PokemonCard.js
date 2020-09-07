import axios from "axios";
import InfoPanel from "../components/InfoPanel";
import Overlay from "../components/Overlay";
import Title from "../components/Title";
import styles from "../styles/PokeCard.module.css";

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
      //console.log(pokeData);

      return this.buildElement(pokeData);
    }
  }

  toggleInfoPanel = () => {
    this.setState({ active: !this.state.active });
    //console.log(this.state.active);
  };

  hoverOn = () => {
    this.setState({ hover: true });
  };

  hoverOff = () => {
    this.setState({ hover: false });
  };

  buildElement(data) {
    var { name, sprites, abilities } = data;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const image = sprites.other["official-artwork"].front_default;

    let classes = this.state.active
      ? styles["pokemon-card"] + " " + styles["pokemon-card-grid"]
      : styles["pokemon-card"];

    return (
      <div
        className={classes}
        onClick={this.toggleInfoPanel}
        onMouseEnter={this.hoverOn}
        onMouseLeave={this.hoverOff}
      >
        <Overlay
          hide={this.state.active}
          text="Click for more details"
          hover={this.state.hover}
        />
        <p className={styles.id}>#{data.id}</p>
        <div className="flex-list-centered">
          <img src={image} />
          <Title
            additionalStyles={{ sizeMultiplier: 1.5, center: true }}
            text={name}
          />
        </div>

        <InfoPanel active={this.state.active} data={data} />
      </div>
    );
  }
}

function showPanel() {}
