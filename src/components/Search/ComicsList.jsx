import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/generalModalReducer";

const ComicsList = ({ picture, title, id }) => {
  const dispatch = useDispatch();

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + "...";
    }
  };

  return (
    <li onClick={() => dispatch(openModal(id))}>
      <img className="search-comic-img" src={picture} alt={title} />
      <h2 className="name-of-comic">{truncateText(title, 30)}</h2>
    </li>
  );
};

export default ComicsList;
