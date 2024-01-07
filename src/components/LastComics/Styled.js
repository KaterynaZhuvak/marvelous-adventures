import styled from "styled-components";

export const StyledLastComics = styled.div`
.swiper swiper-slide {
    width: auto;
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
    width: 323px;
    height: 374px;
    border-radius: 10px;
    margin-right: 16px;
  }

  .name-of-comic {
    color: #fafafa;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.36px;
  }

   @media screen and (min-width: 768px) {
     .comic-img {
    width: 448px;
    height: 519px;
   }
     @media screen and (min-width: 1440px) {

     }
`;
