import styled from "styled-components";

export const StyledSearchList = styled.div`
  .form-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    align-items: center;
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
    width: 154px;
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
    height: 48px;
    border-radius: 100px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background: #34387f;
    padding: 14px 24px;
    line-height: 18px;
  }
`;
