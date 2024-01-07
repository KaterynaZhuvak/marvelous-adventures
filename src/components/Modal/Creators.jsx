import React from "react";

const Creators = ({ picture, name }) => {
  return (
    <li className="modal-item-wrapper">
      <img className="creator-img" src={picture} alt={name} />
      <p className="modal-description">{name}</p>
    </li>
  );
};

export default Creators;
