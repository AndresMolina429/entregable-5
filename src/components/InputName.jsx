import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeUserName } from "../store/slices/userName.slice";
import title from "./../assets/title.svg"

const InputName = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const clickButton = () => {
    dispatch(changeUserName(inputValue));
    navigate("/pokedex");
  };

  return (
    <div className="input-container">
      <img className="title" src={title} alt="" />
      <div className="input-name">
        <input
          className="input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your name"
          />
        <button className="button-input" onClick={clickButton}><i className="fa fa-arrow-right"></i></button>
      </div>
      {/* <h1>Empecemos!!!</h1> */}
    </div>
  );
};

export default InputName;
