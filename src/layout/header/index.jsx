import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBrand,
  NavBrandLink
} from "styles/header/headerStyle";

export const Header = React.memo(() => {
  return (
      <Nav>
        <Bars />
        <NavBrand>
            <NavBrandLink to="/">
                <h1 className="brand-name">Learn2Earn Labs</h1>
            </NavBrandLink>
        </NavBrand>
        <NavMenu>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/about">
            About Us
          </NavLink>
          <NavLink to="/training">
            Training Programs
          </NavLink>
          <NavLink to="/placements">
            Placements
          </NavLink>
          <NavLink to="/blog">
            Blog
          </NavLink>
          <NavLink to="/download">
            Downloads
          </NavLink>
          <NavLink to="/practise">
            Practice
          </NavLink>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
  );
});

