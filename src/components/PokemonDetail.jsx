import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const PokemonDetail = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState({});
  const [colors, setColors] = useState('grey');

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPokemon(res.data));
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

  console.log(pokemon);

  return (
    <div className="card-detail"
         style={{background: colors, color: colors}}
    >
     <Navbar/>
     <div className="container-details">
      <figure className="soil-2"></figure>
      <div className="image-pokemon">
         <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
      </div>
      <div className="name-pokemon chars-start">
        <h1>
          {pokemon.name}
        </h1>
      </div>

      <div className="weight-pokemon chars">
        <h2>{pokemon.weight}</h2>
        <strong>Weigth</strong>
      </div>

      <div className="height-pokemon chars">
        <h3>
          {pokemon.height}
        </h3>
        <strong>Height</strong>
      </div>

      <div className="type-pokemon chars">
        <h3>{pokemon.types?.[0].type.name} / { pokemon.types?.[0].type.name ? pokemon.types?.[1]?.type.name : ''}</h3>
        <strong>Type</strong>

      </div>
      <div className="abilities-pokemon chars">
        <h3>{pokemon.habilities?.[0].ability.name} / { pokemon.abilities?.[0].ability.name ? pokemon.abilities?.[1]?.ability.name : ''}</h3>
        <strong>Abilities</strong>
      </div>

      <div className="hp-pokemon chars">
        <h3>{pokemon.stats?.[0].base_stat}</h3>
        <strong>HP</strong>
      </div>

      <div className="attack-pokemon chars">
        <h3>{pokemon.stats?.[1].base_stat}</h3>
        <strong>Attack</strong>
      </div>

      <div className="defense-pokemon chars-end-left">
        <h3>{pokemon.stats?.[2].base_stat}</h3>
        <strong>Defense</strong>
      </div>

      <div className="speed-pokemon chars-end-right">
        <h3>{pokemon.stats?.[5].base_stat}</h3>
        <strong>Speed</strong>
      </div>




     </div>
    </div>
  );
};

export default PokemonDetail;
