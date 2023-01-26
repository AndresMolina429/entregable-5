import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";
import Navbar from "./Navbar";

const Pokemons = () => {
  const userName = useSelector((state) => state.userName);
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [startPage, setStartPage] = useState(0);
  const [limitPage, setLimitPage] = useState(4);
  const [page, setPage] = useState(8);

  useEffect(() => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/?limit=${limitPage}&offset=${startPage}`)
        .then((res) => setPokemons(res.data.results));

      axios
        .get("https://pokeapi.co/api/v2/type")
        .then((res) => setTypes(res.data.results));

      //borramos filtros
      setTypes([])
      setInputValue([])
  }, [startPage, limitPage]);

  const filterType = (e) => {
    //borramos filtros
    setInputValue([])

    if (e.target.value != ''){
      axios.get(e.target.value)
      // .then((res) => setPokemons(res.data.pokemon)
      .then((res) => 
      {
        setPokemons(res.data.pokemon.map(prop => prop['pokemon']))
      }
      )
    }else{
      axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setPokemons(res.data.results));
    }
  };

  const changeInput = (value) => {
    if(value != ''){
      setInputValue(value)
    }else{
      axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => setPokemons(res.data.results));
      setInputValue(value)
    }
  };

  const searchPokemon = (value) => {
    //borramos filtros
    setTypes([])
    let urlData = `https://pokeapi.co/api/v2/pokemon/${value}/`
    axios.get(urlData)
    .then((res) => {
      setPokemons([{'name': res.data.name, 'url': urlData}])
    }
    )
    .catch((err) => {
      setPokemons([])
    }
    )
  };

 const prevPage = () => {
    if (startPage > 0){
      setStartPage(parseInt(startPage) - parseInt(limitPage))
    }
  }
  const nextPage = () => {
    if (startPage >= 0){
      setStartPage(parseInt(startPage) + parseInt(limitPage))
    }
  }

  useEffect(() => {
    setPage((parseInt(startPage) + parseInt(limitPage))/ parseInt(limitPage))
  }, [startPage]);


  return (
    <div>
      <Navbar/>
      <div className="title">
        <h2>Bienvenido {userName}</h2>
      </div>
      <div className="search-container">
        <div className="input-search-container">
         <input type="text" value={inputValue} onChange={e => changeInput(e.target.value)}/>
         <button onClick={() => searchPokemon(inputValue)}>Search</button>
        </div>
        <div className="select-search-container">
          <select onChange={filterType}>
          <option value="">Selected...</option>
          {types.map((type) => (
            <option value={type.url} key={type.url}>
              {type.name}
            </option>
          ))}
        </select>
        </div>
        <div className="change-page">
          <button onClick={prevPage}>Prev</button>
          { page - 1 !== 0 &&
            <strong>{page - 1}</strong>
          }
          <span className="page-selected">{page}</span>
          <strong>{page + 1}</strong>
          <button onClick={nextPage}>Next</button>
        </div>
        <div className="change-limit">
          <select onChange={(e) => setLimitPage(parseInt(e.target.value))}>
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="32">32</option>
          </select>
        </div>
      </div>

      <div className="cards">
       <div className="card-list">
        {pokemons.map((pokemon) => (
          <PokemonCard
          url={pokemon.url ? pokemon.url : pokemon}
          key={pokemon.url ? pokemon.url : pokemon}
          />
          ))}
       </div>
      </div>
    </div>
  );
};

export default Pokemons;