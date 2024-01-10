import React from "react";
import { useDispatch } from "react-redux";
import { openModalCharacters } from "../../../redux/charactersModalReducer";

const Characters = ({ picture, name, id }) => {
  const dispatch = useDispatch();

  return (
    <li
      onClick={() => dispatch(openModalCharacters(id))}
      className="modal-item-wrapper"
    >
      <img className="character-img" src={picture} alt={name} />
      <p className="modal-description">{name}</p>
    </li>
  );
};

export default Characters;
