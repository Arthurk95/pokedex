import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Type() {
  const [data, setData] = useState();
  const router = useRouter();
  const { typeName } = router.query;

  // only trigger when typeName changes...??? i have no idea
  useEffect(() => {
    if (typeName !== undefined) {
      fetch(`https://pokeapi.co/api/v2/type/${typeName}`)
        .then((res) => res.json())
        .then((data) => {
          // typeData = data;
          setData(data);
        });
    }
  }, [typeName]);

  console.log(data);
  return <div></div>;
}
