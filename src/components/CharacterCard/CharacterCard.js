import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card">
    <div className="img-container">
      <img className="img-thumbnail img-responsive" alt={props.name} src={props.image} onClick={() => props.clickPicture(props.id)}/>
    </div>
  </div>
);

export default PictureCard;