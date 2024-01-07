import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 150;
  &:hover {
    cursor: pointer;
  }

  .modal {
    width: 335px;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &:hover {
      cursor: auto;
    }
    background: #0c0b0b;
    overflow: scroll;
    padding: 40px 20px;
    background: #171717;
  }

  .modal-img {
    max-width: 295px;
    height: 387px;
    border-radius: 10px;
    margin-bottom: 22px;
    margin-right: auto;
    margin-left: auto;
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
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 16px;
  }

  .modal-description {
    color: #fafafa;
    font-family: Poppins;
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
    font-family: Poppins;
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

  .close-btn {
    position: absolute;
    top: 5px;
    right: 5px;
  }

  .creator-img,
  .character-img {
    width: 50px;
    height: 50px;
    border-radius: 8px;
  }

  @media screen and (min-width: 768px) {
    .modal {
      width: 600px;
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
  }

  @media screen and (min-width: 1440px) {
    .modal {
      width: 1000px;
    }
  }
`;
