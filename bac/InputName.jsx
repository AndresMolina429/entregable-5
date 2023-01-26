import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeUserName } from "../store/slices/userName.slice";

const InputName = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const clickButton = () => {
    dispatch(changeUserName(inputValue));
    navigate("/characters");
  };

  return (
    <div>
     <ul className="navbar">
        <li>
            Select
        </li>
        <li>
         <input
           type="text"
           value={inputValue}
           onChange={(e) => setInputValue(e.target.value)}
           />
         <button onClick={clickButton}>Submit</button>
        </li>
     </ul>
    </div>
  );
};

export default InputName;