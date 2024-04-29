import styled from "styled-components";
import heroDesktop from "../../../img/avengers-marvel.png";
import heroDesktop2x from "../../../img/avengers-marvel@2x.png";

export const StyledSearchHero = styled.div`
  margin-bottom: 20px;
  .hero-img {
    height: 460px;
    background-image: url(${heroDesktop});
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .hero-img {
      background-image: url(${heroDesktop2x});
    }
  }

  .hero-description-container {
    padding-top: 220px;
  }

  .hero-text {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-transform: uppercase;
    margin-bottom: 14px;
  }

  .hero-title {
    font-size: 60px;
    font-style: normal;
    font-weight: 500;
    line-height: 60px; /* 100% */
    letter-spacing: -1.2px;
    margin-bottom: 14px;
  }

  .hero-description {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.28px;
  }

  @media screen and (min-width: 768px) {
    .hero-img {
      height: 650px;
    }

    .hero-description-container {
      padding-top: 280px;
    }

    .hero-text {
      font-size: 18px;
      line-height: 160%;
      margin-bottom: 16px;
    }

    .hero-title {
      font-size: 150px;
      line-height: 150px;
      letter-spacing: -3px;
      margin-bottom: 16px;
    }

    .hero-description {
      width: 470px;
      margin-left: 88px;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.32px;
    }
  }

  @media screen and (min-width: 1440px) {
    .hero-img {
      height: 770px;
    }
  }
`;
