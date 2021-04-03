import React, { useEffect, useState } from "react";
import { Alternatives } from "../../components/alternatives";
import { PokemonImage } from "../../components/pokemonImage";

import "./style.css";

const GameQuiz = () => {
  const [pokemon, setPokemon] = useState({});
  const [pokemons, setPokemons] = useState([]);
  const [pokemonImage, setPokemonImage] = useState("");
  const [getPokemonAgain, setGetPokemonAgain] = useState(false);

  const getRuffle = () => {
    const min = 1;
    const max = 800;
    return Math.floor(Math.random() * max + min);
  }

  const getPokemon = async () => {
    const { id, name } = await fetch(
      `https://pokeapi.co/api/v2/pokemon-form/${getRuffle()}/`
    ).then((t) => t.json());

   return {id, name};
 }

 useEffect(() => {
   console.log(pokemons);
 }, [pokemons])

  useEffect(() => {
    (async () => {
      setPokemon(await getPokemon());
    })()
  }, [getPokemonAgain])

  useEffect(() => {
    (async () => {
      if(pokemons.length < 4){
        const poke = await getPokemon();
        poke.id = poke.id === pokemon.id ? poke.id + 1 : poke.id;
        setPokemons([ ...pokemons, poke]);
      }
    })()
  }, [pokemons]);

  useEffect(() => {
    if (pokemon.id) {
      (async () => {
        const teste = await fetch(
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`
        ).then((t) => {
          if (t.ok) {
            return t.blob().then((blob) => URL.createObjectURL(blob));
          } else {
            return t.status;
          }
        });
        if (teste === 404) {
          setGetPokemonAgain(!getPokemonAgain);
        } else {
          setPokemonImage(teste);
        }
      })();
    }
  }, [pokemon]);

  return (
    <div className="game__container">
      {pokemonImage && <PokemonImage image={pokemonImage} />}
      <Alternatives choosePokemon={pokemon.name} otherOptions={pokemons} />
    </div>
  );
};
// const query = new URLSearchParams(useLocation().search);
/* <h1>
        {query.get('name')}
      </h1> */
export { GameQuiz };
