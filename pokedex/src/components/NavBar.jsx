import PokemonCard from "./PokemonCard";
import { useState } from "react";


function Button({pokemonList, setPokemon}){



return (

 

  <div>
    {pokemonList.map((pokemon, index) => (
      <button key={pokemon.name} onClick={() => {setPokemon(index); {pokemon.name === "pikachu" ? (alert("pika pikachu !!!")) : ""}}}>
        {pokemon.name}
      </button>
    ))

    }
  </div>
);

}


export default Button;