import styled from "styled-components";

export const StyledLastComics = styled.div`
margin-bottom: 40px;
.swiper swiper-slide {
    width: auto;
    cursor: pointer;
    padding: 20px 10px;
}

  .comics-title {
    color: #fafafa;
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: -0.56px;
    text-transform: uppercase;
    margin-bottom: 44px;
  }
  
  .comic-img {
    width: 320px;
    border-radius: 10px;
    margin-right: 16px;
    margin-bottom: 16px;

      transition: all 0.5s linear;
  }

  .comic-img:hover,
  .comic-img:focus {
    border-color: #b9d3f3;
    box-shadow: 0 0 10px rgba(219, 223, 246, 0.8);
    transform: scale(1.05);
  }

  .name-of-comic {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.36px;
  }

   @media screen and (min-width: 768px) {
    margin-bottom: 80px;
     .comic-img {
    width: 448px;
    height: 519px;
   }
     @media screen and (min-width: 1440px) {

     }
`;
