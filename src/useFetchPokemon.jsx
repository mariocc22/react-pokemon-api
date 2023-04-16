import { useState, useEffect } from "react";
const localCache = {};

export default function useFetchPokemon(pokemon) {
  const [pokeInfo, setPokeInfo] = useState({});
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (!pokemon) {
      setStatus(false);
      setPokeInfo({});
    } else if (localCache[pokemon]) {
      setStatus(true);
      setPokeInfo(localCache[pokemon]);
    } else {
      requestPokemon();
    }

    async function requestPokemon() {
      setPokeInfo({});

      setStatus(false);
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const res = await data.json();
      localCache[pokemon] = res || {};
      setPokeInfo(localCache[pokemon]);
      setStatus(true);
    }
  }, [pokemon]);

  return [pokeInfo, status];
}
