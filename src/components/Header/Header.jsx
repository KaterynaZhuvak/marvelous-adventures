import React from "react";
import { NavLink } from "react-router-dom";
import { StyledHeader } from "./Styled";
import logo from "../../img/logo.png";
import logo2x from "../../img/logo@2x.png";

const Header = () => {
  return (
    <StyledHeader>
      <header className="container">
        <div>
          <div className="nav-wrapper">
            <img srcSet={`${logo} 1x, ${logo2x} 2x`} alt="Logo" />
            <nav>
              <NavLink className="home link" to="/">
                Home
              </NavLink>
              <NavLink className="search link" to="/search">
                Search
              </NavLink>
            </nav>
          </div>
        </div>
      </header>
    </StyledHeader>
  );
};

export default Header;
