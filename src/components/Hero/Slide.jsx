import React from "react";
import { StyledHero } from "./Styled";

const Slide = ({ color, characterDescription, img1, img2 }) => {
  return (
    <StyledHero backgroundcolor={color}>
      <div className="description-container">
        <p className="web-description">Web-based platform</p>
        <h1 className="hero-title">Marvelous Adventures</h1>
        <p className="hero-text">
          is a web-based platform that provides an immersive experience for
          users to explore and discover a vast collection of Marvel characters
          and comics. Start exploring the Marvelous Adventures now by visiting
          our Characters and Comics sections and discover your new favorites
          today.
        </p>
        <button className="hero-btn">All comics</button>
      </div>
      <div className="positional-container">
        <div className="img-container">
          <img className="hero-img left-img" src={img1} alt="" />
          <img className="hero-img right-img" src={img2} alt="" />
        </div>
        <div className="character-container">
          <h3 className="character-title">Characters</h3>
          <p className="character-text">{characterDescription}</p>
        </div>
      </div>
    </StyledHero>
  );
};

export default Slide;
