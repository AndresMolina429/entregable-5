import React from "react";
import { useSelector } from "react-redux";

const CharacterDetail = () => {

  const userName = useSelector(state => state.userName)

  return (
    <div>
      <h1>Character Detail</h1>
      <h2>Wellcome {userName}</h2>
    </div>
  );
};

export default CharacterDetail;
