import React from "react";
import logo from "../../img/logo.png";
import { StyledFooter } from "./Styled";
import { Linkedin } from "../../img/Linkedin";
import { Telegram } from "../../img/Telegram";
import { Email } from "../../img/Email";

const Footer = () => {
  return (
    <StyledFooter>
      <footer className="container">
        <div className="part-of-footer-with-links">
          <img className="footer-logo" src={logo} alt="logo" />
          <p className="footer-title">Comics</p>
          <ul className="list-of-links">
            <li>
              <a
                className="link"
                rel="noreferrer noopener"
                href="https://www.linkedin.com/in/kateryna-zhuvak-b53385247/"
                target="_blank"
              >
                <Linkedin width="20" height="20" />
              </a>
            </li>
            <li>
              <a
                className="link"
                rel="noreferrer noopener"
                href="https://t.me/KaterynaZhuvak"
                target="_blank"
              >
                <Telegram width="20" height="20" />
              </a>
            </li>
            <li>
              <a
                className="link"
                rel="noreferrer noopener"
                href="mailto:ekaterinazuvak1@gmail.com"
                target="_blank"
              >
                <Email width="20" height="20" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="color-part-of-footer">
        <p className="color-part-of-footer-title">
          Privacy Policy Public Offering Agreement
        </p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
