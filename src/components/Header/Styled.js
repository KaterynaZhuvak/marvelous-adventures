import styled from "styled-components";
import search from "../../img/search.png";
import home from "../../img/home.png";

export const StyledHeader = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    left: 0;
    background-color: transparent;

  header {
    padding: 20px;
  }

  img {
    width: 98px;
    height: 15px;
  }

  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    display: flex;
    gap: 10px;
  }

  .link {
    text-decoration: none;
    border-radius: 1000px;
    border: 1px solid rgba(250, 250, 250, 0.3);
    display: flex;
    padding: 6px 18px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    color: #fafafa;

    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px; /* 116.667% */
    text-transform: uppercase;
  }

  .search::before {
    content: "";
    width: 18px;
    height: 18px;
    display: inline-block;
    background-image: url(${search});
    background-size: cover;
  }

   .home::before {
    content: "";
    width: 18px;
    height: 18px;
    display: inline-block;
    background-image: url(${home});
    background-size: cover;
  }

  // .search.active::before {
  //   content: "";
  //   width: 18px;
  //   height: 18px;
  //   display: inline-block;
  //   background-image: url(${search});
  //   background-size: cover;
  // }

  @media screen and (min-width: 768px) {
    img {
      width: 202px;
      height: 31px;
    }

    header {
      padding: 24px 32px;
    }

    .link {
      padding: 12px 24px;
    }
  }
`;
