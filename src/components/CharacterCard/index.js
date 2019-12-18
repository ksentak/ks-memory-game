import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card">
    <div className="img-container">
      <img className="img-thumbnail img-responsive" src={props.image} alt={props.name} onClick={() => props.clickCharacter(props.id)}/>
    </div>
  </div>
);

export default CharacterCard;
