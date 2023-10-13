import { useState } from "react";
import { useEffect } from "react";
import PokemonCard from "./components/PokemonCard";
import Button from "./components/NavBar";


const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];



function App() {

  onload = useEffect(
    () =>{
      alert("Hello pokemon trainer :)")
    }, []
  )

  const [pokemon, setPokemon] = useState(0);
  function newIndex(index){
    setPokemon(index);
  }

  return (
   <>

    <div>

      <Button pokemonList={pokemonList} setPokemon={newIndex}/>
      <PokemonCard pokemon={pokemonList[pokemon]} />
    </div>
   
  </> 
  );
}

export default App;