import React from "react";
import { NavLink } from "react-router-dom";
import { StyledHeader } from "./Styled";
import logo from "../../img/logo.png";


const Header = () => {
  return (
    <StyledHeader>
      <header className="container">
        <div>
          <div className="nav-wrapper">
            <img src={logo} alt="logo" />
            <nav>
              <NavLink className='home link' to="/">Home</NavLink>
              <NavLink className='search link' to="/search">Search</NavLink>
            </nav>
          </div>
        </div>
      </header>
    </StyledHeader>
  );
};

export default Header;
