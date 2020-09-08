import axios from "axios";
import PokemonCard from "../../components/PokemonCard";
import TitledPanel from "../../components/TitledPanel";

export default function Type({ typeData }) {
  if (!typeData) {
    return <div>Loading...</div>;
  }
  const { name, damageRelations, pokemon } = typeData;
  let pokemonElements = pokemon.map((poke) => {
    let id = poke.pokemon.url.split("/");
    id = id[id.length - 2];
    return (
      <PokemonCard
        name={poke.pokemon.name}
        id={id}
        redirect={true}
        mini={true}
      />
    );
  });
  return (
    <div className={""}>
      <div className="">
        <TitledPanel title="Pokemon with this Type">
          <div className="flex-list gap-1em scrollable">{pokemonElements}</div>
        </TitledPanel>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `https://pokeapi.co/api/v2/type/${params.typeName}`
  );
  const typeData = res.data;
  return { props: { typeData } };
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [{ params: { typeName: "" } }],
  };
}
