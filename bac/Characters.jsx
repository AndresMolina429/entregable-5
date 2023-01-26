import axios from "axios";
import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import CharacterCard from "./CharacterCard"

const Characters = () => {

  const userName = useSelector(state => state.userName)
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    // axios.get('https://pokeapi.co/api/v2/vability/?limit=20&offset=20"')
    .then(res => setPokemons(res.data.results))
  }, [])

  console.log(pokemons)

  return (
    <div>
      <h1>Characters</h1>
      <h2>{userName}</h2>
      <ul>

      {
        pokemons.map(pokemon => (
          <li>
            <CharacterCard url={pokemon.url}/>
          </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Characters;