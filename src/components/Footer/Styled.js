import styled from "styled-components";

export const StyledFooter = styled.div`
  .part-of-footer-with-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0px;
  }

  .footer-logo {
    width: 98px;
    height: 15px;
  }

  .footer-title {
    display: none;
  }

  .list-of-links {
    display: flex;
    gap: 14px;
  }

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border: 1px solid rgba(250, 250, 250, 0.15);
    border-radius: 10px;
  }

  .color-part-of-footer {
    padding: 16px 0px;
    margin-right: auto;
    margin-left: auto;
    background: #34387f;
  }
  .color-part-of-footer-title {
    text-align: center;
    color: rgba(250, 250, 250, 0.4);
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0.2px;
  }

  @media screen and (min-width: 768px) {
    .part-of-footer-with-links {
      padding: 64px 0px;
    }

    .footer-logo {
      width: 202px;
      height: 31px;
    }

    .footer-title {
      display: block;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
    }

    .link {
      width: 40px;
      height: 40px;
    }

    .color-part-of-footer-title {
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.28px;
    }
  }
`;
