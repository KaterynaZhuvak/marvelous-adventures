import React from "react";
import { useSelector } from "react-redux";
import ComicsCard from "./ComicsCard";
import { register } from "swiper/element/bundle";
import { StyledLastComics } from "./Styled";

const LastComics = () => {
  register();
  const lastComics = useSelector((state) => state.homeStore.lastComics);
  return (
    <div className="container">
      <StyledLastComics>
        <h2 className="comics-title">Last comics</h2>
        <div className="swiper">
          <swiper-container
            className="image-slider"
            clickable="true"
            pagination="true"
            spaceBetween="16"
            slides-per-view="auto"
            pagination-dynamic-bullets="true"
            loop="true"
          >
            {lastComics.map((item) => (
              <ComicsCard
                key={item.id}
                picture={
                  item.thumbnail.path +
                  "/portrait_incredible" +
                  "." +
                  item.thumbnail.extension
                }
                title={item.title}
                id={item.id}
              />
            ))}
          </swiper-container>
        </div>
      </StyledLastComics>
    </div>
  );
};

export default LastComics;
