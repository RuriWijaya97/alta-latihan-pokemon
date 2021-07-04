import { useState, useEffect } from "react";

function Index() {
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState("");
  const [abilities, setAbilities] = useState([]);
  console.log(pokemons);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=10"
      );
      const data = await response.json();
      const { results } = data;
      setPokemons(results);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      );
      const data = await response.json();
      const { abilities } = data;
      setAbilities(abilities);
    };
    getData();
  }, [pokemon]);

  const handleClick = (name) => {
    setPokemon(name);
    console.log(name);
  };

  return (
    <div className="container">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Kalkulator">Kalkulator</a>
        </li>
      </ul>
      <h1>Detail {pokemon}</h1>
      <h3 className="mt-3">Abilities : </h3>
      <ul>
        {abilities?.map((pokemon) => (
          <li>{pokemon.ability.name}</li>
        ))}
      </ul>
      <h3 className="mt-3">List Pokemon</h3>
      <ul className="list-group">
        {pokemons?.map((pokemon) => (
          <li
            onClick={() => handleClick(pokemon.name)}
            className="list-group-item list-group-item-action"
            key={pokemon.name}
          >
            {pokemon.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Index;
