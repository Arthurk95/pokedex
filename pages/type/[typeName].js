import axios from "axios";
import PokemonCard from "../../components/PokemonCard";
import TitledPanel from "../../components/TitledPanel";
import { Type } from "../../components/Types/Types";
import { getImageUrl, toCapital } from "../../utils/util";
import Loader from "../../components/Loader";
import Title from "../../components/Title";

export default function TypeProfile({ typeData }) {
  if (!typeData) {
    return <Loader />;
  }
  if (typeData.error) {
    return <div>Invalid Type</div>;
  }
  const { name, damage_relations, pokemon } = typeData;
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

  let weaknesses = damage_relations.double_damage_from.map((t) => {
    return <Type type={t.name} key={t.name} />;
  });

  let strength = damage_relations.double_damage_to.map((t) => {
    return <Type type={t.name} />;
  });

  let resistances = damage_relations.half_damage_from.map((t) => {
    return <Type type={t.name} />;
  });

  let ineffectives = damage_relations.half_damage_to.map((t) => {
    return <Type type={t.name} />;
  });
  return (
    <div className="grid-list two-cols sixty-forty">
      <div className=" panel padding-2em">
        <Title
          text={toCapital(typeData.name)}
          size={2}
          otherClasses={"no-margin"}
        />
        <div className="grid-list two-cols">
          <TitledPanel title="Strong Against" titleSubtext="x2 damage against">
            <div className="flex-list gap-1em">{strength}</div>
          </TitledPanel>
          <TitledPanel title="Weaknesses">
            <div className="flex-list gap-1em">{weaknesses}</div>
          </TitledPanel>
          <TitledPanel title="Resistance Against">
            <div className="flex-list gap-1em">{resistances}</div>
          </TitledPanel>
          <TitledPanel title="Is Resisted By">
            <div className="flex-list gap-1em">{ineffectives}</div>
          </TitledPanel>
        </div>
      </div>
      <div className="padding-2em panel">
        <TitledPanel
          title="Pokemon with this Type"
          contentClasses="panel-bg-dark"
        >
          <div className="flex-list gap-1em scrollable">{pokemonElements}</div>
        </TitledPanel>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  let typeData;
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/type/${params.typeName}`
    );
    typeData = res.data;
  } catch (err) {
    typeData = { error: err.message };
  }
  return { props: { typeData } };
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [{ params: { typeName: "" } }],
  };
}
