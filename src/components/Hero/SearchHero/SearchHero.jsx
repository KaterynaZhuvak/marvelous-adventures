import React from "react";
import { StyledSearchHero } from "../SearchHero/Styled";

const SearchHero = () => {
  return (
    <StyledSearchHero>
      <div className="container hero-img">
        <div className="hero-description-container">
          <p className="hero-text">Web-based platform</p>
          <h1 className="hero-title">Comics</h1>
          <p className="hero-description">
            Comics is a medium used to express ideas with images, often combined
            with text or other visual information.{" "}
          </p>
        </div>
      </div>
    </StyledSearchHero>
  );
};

export default SearchHero;
