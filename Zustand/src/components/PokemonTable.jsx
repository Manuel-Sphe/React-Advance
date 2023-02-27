import React from "react";
import useStore from "../store";
import PokemonRow from "./PokemonRow";

function PokemonTable() {

  const pokemon = useStore((state) => state.pokemon);
  const setSelectedPokemon = useStore((state) => state.setSelectedPokemon);
  const filter = useStore((state) => state.filter);

  return (
    <table width="100%">
      <tbody>
        {pokemon
          .filter(({ name: { english } }) =>
            english.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
          )
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow
              key={pokemon.id}
              pokemon={pokemon}
              onClick={(pokemon) =>
                setSelectedPokemon(pokemon)
              }
            />
          ))}
      </tbody>
    </table>
  );
}

export default PokemonTable;