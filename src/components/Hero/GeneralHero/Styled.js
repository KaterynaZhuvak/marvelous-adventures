import styled from "styled-components";

export const StyledHero = styled.div`
overflow-x: hidden;
margin-bottom: 80px;

  .description-container {
    margin-bottom: 40px;
  }

  .web-description {
    color: rgba(255, 255, 255, 0.7);
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-transform: uppercase;
    margin-bottom: 14px;
  }

  .hero-title {
    margin-top: 0px;
    color: #fafafa;
    font-family: Poppins;
    font-size: 44px;
    font-style: normal;
    font-weight: 500;
    line-height: 44px;
    letter-spacing: -0.88px;
    margin-bottom: 16px;
  }

  .hero-text {
    color: #fafafa;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 20px;
  }

  .hero-btn {
    border-radius: 1000px;
    border: none;
    width: 135px;
    background-color: ${(props) => props.backgroundcolor};
    display: flex;
    padding: 10px 20px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    gap: 10px;
    color: #fafafa;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    text-transform: uppercase;
    text-decoration: none;
  }

  .hero-img {
    width: 190px;
    height: 256px;
    border-radius: 4px;
  }

  .left-img {
    margin-right: auto;
    margin-bottom: 20px;
    box-shadow: 0px -82px 162px -19px ${(props) => props.backgroundcolor};
-webkit-box-shadow: 0px -82px 162px -19px ${(props) => props.backgroundcolor};
-moz-box-shadow: 0px -82px 162px -19px ${(props) => props.backgroundcolor};
  }

 .right-img {
    margin-left: auto;
    box-shadow: 0px 80px 162px -19px ${(props) => props.backgroundcolor};
-webkit-box-shadow: 0px 80px 162px -19px ${(props) => props.backgroundcolor};
-moz-box-shadow: 0px 80px 162px -19px ${(props) => props.backgroundcolor};
  }

  .character-container {
    display: flex;
    width: 190px;
    height: 142px;
    margin-left: auto;
    gap: 14px;
  }

  .character-title {
    color: #fafafa;
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    letter-spacing: -0.24px;
  }

  .character-text {
    color: rgba(250, 250, 250, 0.50);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400
    line-height: 14px;
    letter-spacing: -0.24px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 120px;

    .description-container {
    margin-right: 198px;
    margin-bottom: 34px;
  }

    .web-description {
    font-size: 18px;
    margin-bottom: 16px;
  }

   .hero-title {
    font-size: 80px;
    line-height: 80px; 
    letter-spacing: -1.6px;
  }

   .hero-text {
    font-size: 16px;
    margin-bottom: 32px;
  }

   .hero-btn {
    padding: 12px 24px;
    font-size: 14px;
}

.img-container {
    display: flex;
    justify-content: space-between;
}

.hero-img {
    width: 336px;
    height: 540px;
}

.left-img {
    margin-top: 79px;
}

.positional-container {
position: relative;
}

.character-container {
    width: 336px;
height: 72px;
position: absolute;
top: 550px;
right: 0px;
gap: 52px;
}
}

@media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    padding-top: 80px;

    .description-container {
        margin-top: 120px;
    margin-bottom: 0px;
    width: 538px;
    height: 340px;
  }

  .img-container {
    display: flex;
    gap: 32px;
}

  .hero-img {
    width: 300px;
height: 480px;
    border-radius: 4px;
  }

  .left-img {
    margin-top: 110px;
}

.right-img {
    margin-top: -90px;
}

.character-container {
width: 300px;
height: 95px;
position: absolute;
top: 400px;
right: 0px;
gap: 40px;
}
}
`;
