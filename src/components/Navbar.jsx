import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import title from "./../assets/title.svg"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [inputSearch, setInputSearch] = useState("");
  const navigate = useNavigate();

    return ( 
       <nav className="navbar">
        <div className="red"></div>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="black"></div>
        <img className="navbar-pokedex" src={title} alt="" />
        <button className="back" onClick={() => navigate(-1)}>Back</button>
       </nav>
     );
}
 
export default Navbar;