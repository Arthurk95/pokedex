import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Type() {
  const [data, setData] = useState();
  const router = useRouter();
  const { typeName } = router.query;
  let typeData = {};

  // only trigger when typeName changes...??? i have no idea
  useEffect(() => {
    if (typeName !== undefined) {
      fetch(`https://pokeapi.co/api/v2/type/${typeName}`)
        .then((res) => res.json())
        .then((data) => {
          typeData = data;
          setData(data);
        });
    }
  }, [typeName]);

  if (!data) {
    return null;
  } else {
    return <div>{data.name}</div>;
  }
}
