import styled from "styled-components";

export const StyledSearchList = styled.div`
  .form-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
    margin-bottom: 40px;
  }

  label {
    display: block;
    color: rgba(250, 250, 250, 0.3);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    margin-bottom: 4px;
  }

  .search-item {
    width: 150px;
    box-sizing: border-box;
    display: inline-block;
    border-radius: 100px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: #34387f;
    padding: 14px 24px;
    color: #fafafa;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 12px;
    text-transform: capitalize;
  }

  .search-input {
    width: 375px;
  }

  .search-btn {
    border-radius: 100px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: #34387f;
    padding: 14px 24px;
    line-height: 18px;
    cursor: pointer;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  select::-webkit-select-placeholder {
    color: #fafafa;
  }

  select::-webkit-scrollbar {
    width: 12px;
  }

  select::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 6px;
  }

  .search-comics-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 32px;
    margin-bottom: 40px;
  }

  .search-comics-container li {
    box-sizing: border-box;
    cursor: pointer;
  }

  .search-comic-img {
    width: 338px;
    height: 453px;
    display: block;
    border-radius: 10px;
    margin-bottom: 16px;

    transition: all 0.5s linear;
  }

  .search-comic-img:hover,
  .search-comic-img:focus {
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

  .pagination-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-bottom: 40px;
  }

  .pagination-btn {
    display: flex;
    width: 32px;
    height: 32px;
    padding: 7px 0px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #34387f;
    background: #171717;
    color: #fafafa;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    cursor: pointer;

    transition: all 0.5s linear;
  }

  .pagination-btn:hover,
  .pagination-btn:focus {
    border-color: #b9d3f3;
    box-shadow: 0 0 10px rgba(219, 223, 246, 0.8);
    transform: scale(1.1);
  }

  button.active {
    display: flex;
    width: 32px;
    height: 32px;
    padding: 7px 0px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid #34387f;
    background: #34387f;
    color: #fafafa;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
  }

  @media screen and (min-width: 768px) {
    .form-wrapper {
      justify-content: center;
    }

    .search-comic-img {
      width: 340px;
      height: 456px;
    }

    .search-comics-container li {
      flex: 0 0 45%;
    }

    .search-comics-container {
      justify-content: space-between;
      margin-bottom: 60px;
    }

    .search-input {
      width: 200px;
    }

    .pagination-wrapper {
      margin-bottom: 80px;
    }
  }

  @media screen and (min-width: 1440px) {
    .search-comic-img {
      width: 332px;
      height: 445px;
    }

    .search-comics-container {
      row-gap: 64px;
    }

    .search-comics-container li {
      flex: 0 0 25%;
    }

    .search-input {
      width: 260px;
    }
  }
`;
