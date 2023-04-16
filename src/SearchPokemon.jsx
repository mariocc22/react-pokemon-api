import { useState } from "react";
import Pokemon from "./Pokemon";
import useFetchPokemon from "./useFetchPokemon";
import shadow from "./assets/poke-shadow.png";

const SearchPokemon = () => {
  const [pokemon, setPokemon] = useState("");
  const [pokeInfo, status] = useFetchPokemon(pokemon);

  return (
    <div className="pokemon-cont">
      <h1>Pokedex</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = { pokemon: formData.get("pokemon") ?? "" };
          setPokemon(obj.pokemon);
          e.target.reset();
        }}
      >
        <label htmlFor="pokemon">
          <input
            type="text"
            name="pokemon"
            id="pokemon"
            placeholder="Pokemon Name"
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {status ? (
        <Pokemon props={pokeInfo} />
      ) : (
        <div className="poke-card">
          {" "}
          <img className="poke-img shadow" src={shadow} alt="pokemon" />{" "}
        </div>
      )}
    </div>
  );
};

export default SearchPokemon;
