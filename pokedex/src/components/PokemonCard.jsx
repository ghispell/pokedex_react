const pokemonList = [
    {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Mew",

    },
  ];

function PokemonCard() {
    const pokemon = pokemonList[0]

    return (
        <figure>
            <p>{pokemon.imgSrc === undefined ?"???" : <img src={pokemon.imgSrc} alt={pokemon.name}/>}</p>
        <figcaption>{pokemon.name}</figcaption></figure>
        )
    }

    export default PokemonCard;