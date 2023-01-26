import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CharacterCard = ({url}) => {
    const [pokemon, setPokemon] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${url}`)
        .then(res => setPokemon(res.data))
    }, []);

    console.log(pokemon)

    return ( 
         <div onClick={() => navigate(`/characters/${pokemon.id}`)}>
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites?.front_default} alt="" />
         </div>
     );
}
export default CharacterCard;