import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/generalModalReducer";

const ComicsList = ({ picture, title, id }) => {
  const dispatch = useDispatch();
  return (
    <li onClick={() => dispatch(openModal(id))}>
      <img src={picture} alt={title} />
      <h2>{title}</h2>
    </li>
  );
};

export default ComicsList;
