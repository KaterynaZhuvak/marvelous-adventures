import React from "react";

const Characters = ({ picture, name }) => {
  return (
    <li className="modal-item-wrapper">
      <img className="character-img" src={picture} alt={name} />
      <p className="modal-description">{name}</p>
    </li>
  );
};

export default Characters;
