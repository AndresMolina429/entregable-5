import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pokemons from "./Pokemon";

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState({});
  const [colors, setColors] = useState('grey');

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url).then((res) => setPokemon(res.data));
  }, []);

  useEffect(() => {
    if(pokemon.types?.[0].type.name == 'grass'){
      setColors('#03C988')
    }else if(pokemon.types?.[0].type.name == 'fire'){
      setColors('#FF6E31')
    }else if(pokemon.types?.[0].type.name == 'water'){
      setColors('#0014FF')
    }else if(pokemon.types?.[0].type.name == 'bug'){
      setColors('#6F38C5')
    }else if(pokemon.types?.[0].type.name == 'normal'){
      setColors('#5CB8E4')
    }

  }, [pokemon]);

  // console.log(pokemon)
  // console.log(colors)



  return (
    <li className="col">
      <div
        className="card"
        onClick={() => navigate(`/pokedex/${pokemon.id}`)}
        style={{background: colors}}
      >
        <div className="card-body">
         <figure className="soil"></figure>
         <img className="card-img" src={pokemon.sprites?.other.dream_world.front_default} alt="" />
         <div>
           <div className="head">
            <div colSpan={2}><h3>{pokemon.name}</h3></div>
           </div>
           <div className="type">
            <div colSpan={2}>Type: {pokemon.types?.[0].type.name} / { pokemon.types?.[0].type.name ? pokemon.types?.[1]?.type.name : ''}</div>
           </div>
           <div className="characters">

            <div>Height: {pokemon.height}</div>
            <div>Weight: {pokemon.weight}</div>
            <div>HP: {pokemon.stats?.[0].base_stat}</div>
            <div>Attack: {pokemon.stats?.[1].base_stat}</div>
            <div>Defense: {pokemon.stats?.[2].base_stat}</div>
            <div>Speed: {pokemon.stats?.[5].base_stat}</div>
           </div>
         </div>
        </div>
      </div>
    </li>
  );
};

export default PokemonCard;
