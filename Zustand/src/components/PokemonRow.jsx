import React from "react";
import { Button } from "@material-ui/core";

import PokemonType from "../pokemonType";

const PokemonRow = ({pokemon, onClick}) =>(
    <>
        <tr >
            <td>{pokemon.name.english}</td>
            <td>{pokemon.type.join(", ")}</td>
            <td>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={()=>onClick(pokemon)}
                >
                    More Information
                </Button>
            </td>
        </tr>
    </>
)
PokemonRow.propTyeps = {
    pokemon : PokemonType,
};

export default PokemonRow;