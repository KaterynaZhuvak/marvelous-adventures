import styled from "styled-components";
import close from "../../img/x.png";

export const StyledModal = styled.div`
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 150;
  &:hover {
    cursor: pointer;
  }

  .close-btn {
    position: absolute;
    top: 5px;
    right: 15px;
    background-image: url(${close});
    background-size: cover;
    width: 20px;
    height: 20px;
    fill: white;
    background-color: transparent;
    border: none;
  }

  .modal {
    box-sizing: border-box;
    width: 335px;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &:hover {
      cursor: auto;
    }
    overflow-y: scroll;
    padding: 40px 20px;
    background: #0c0b0b;
  }

  .modal-img {
    max-width: 295px;
    height: 387px;
    border-radius: 10px;
    margin-bottom: 22px;
    margin-right: auto;
    margin-left: auto;
  }

  .description-wrapper {
    background: #171717;
    height: 100%;
    overflow-y: scroll;
    padding: 32px 16px;
    border-radius: 10px;
  }

  .modal-title {
    color: #fafafa;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.36px;
    margin-bottom: 4px;
  }

  .modal-year {
    color: rgba(250, 250, 250, 0.5);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 16px;
  }

  .modal-description {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 16px;
  }

  .modal-items {
    display: flex;
    gap: 24px;
  }

  .modal-title-item {
    color: rgba(250, 250, 250, 0.5);
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
    text-transform: uppercase;
    margin-bottom: 4px;
  }

  .title-margin {
    margin-bottom: 20px;
  }

  .modal-item-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
  }

  .creator-img,
  .character-img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    transition: all 0.5s linear;
  }

  .character-img {
    cursor: pointer;
  }

  .character-img:hover,
  .character-img:focus {
    border-color: #b9d3f3;
    box-shadow: 0 0 10px rgba(219, 223, 246, 0.8);
    transform: scale(1.05);
  }

  .list-of-comics-wrapper {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .list-of-comics-img {
    width: 263px;
    height: 263px;
  }

  .modal-character-list {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: -0.36px;
    margin-bottom: 16px;
  }

  .modal-character-title {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: -0.28px;
    margin-top: 16px;
  }

  @media screen and (min-width: 768px) {
    .modal {
      width: 600px;
      height: 800px;
    }

    .close-btn {
      width: 28px;
      height: 28px;
    }

    .modal-img {
      width: 332px;
      height: 445px;
    }

    .modal-title {
      font-size: 24px;
      letter-spacing: -0.48px;
    }

    .modal-description {
      font-size: 16px;
      margin-bottom: 32px;
    }

    .modal-title-item {
      font-size: 12px;
    }

    .modal-items {
      gap: 32px;
    }

    .creators-wrapper {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
      margin-bottom: 32px;
    }

    .creators-wrapper li {
      flex: 1 0 45%;
    }

    .list-of-comics-img {
      width: 155px;
      height: 200px;
    }

    .list-of-comics-wrapper {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: space-between;
    }

    .list-of-comics-wrapper li {
      flex: 0 0 calc(30% - 10px);
      margin-bottom: 10px;
    }

    .modal-character-list {
      font-size: 24px;
      letter-spacing: -0.48px;
    }
  }

  @media screen and (min-width: 1440px) {
    .modal {
      width: 1000px;
      height: 600px;
      display: flex;
      gap: 16px;
    }

    .modal-content-wrapper {
      display: flex;
    }

    .list-of-comics-img {
      width: 174px;
    }
  }
`;
