import axios from "axios";
import styles from "../styles/PokeCard.module.css";

export default class PokemonCard extends React.Component {
  constructor(props) {
    super(props);
    this.Link = props.link;
    this.state = {
      error: null,
      isLoaded: false,
      pokeData: [],
    };
  }

  componentDidMount() {
    fetch(this.Link)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          pokeData: result,
        });
      });
  }

  render() {
    const { error, isLoaded, pokeData } = this.state;

    if (error) {
      return <div>{error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(pokeData);

      return this.buildElement(pokeData);
    }
  }

  buildElement(data) {
    var { name, sprites, abilities } = data;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const image = sprites.other["official-artwork"].front_default;

    return (
      <div className={styles["pokemon-card"]}>
        <p className={styles.id}>#{data.id}</p>
        <img src={image} />
        <ul className="flex-centered-list padding-2em">
          <li>
            <h2 className="center-text">{name}</h2>
          </li>
        </ul>
        {/* <InfoOverlay data={data} /> */}
      </div>
    );
  }
}
