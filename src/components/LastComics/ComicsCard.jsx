import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/generalModalReducer";

const ComicsCard = ({ picture, title, author, id }) => {
  const dispatch = useDispatch();

  return (
    <swiper-slide
      className="swiper-item"
      onClick={() => dispatch(openModal(id))}
    >
      <img
        className="comic-img"
        width="auto"
        loading="lazy"
        src={picture}
        alt={title}
      />
      <h2 className="name-of-comic">{title}</h2>
      <p>{author}</p>
    </swiper-slide>
  );
};

export default ComicsCard;
