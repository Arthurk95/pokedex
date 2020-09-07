import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Type() {
  const router = useRouter();
  const { typeName } = router.query;
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/type/${"ice"}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return <div>{data.name}</div>;
}
