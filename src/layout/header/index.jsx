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
          <NavLink to="/aboutus">
            About Us
          </NavLink>
          <NavLink to="/courses">
            Courses
          </NavLink>
          <NavLink to="/placements">
            Placements
          </NavLink>
          <NavLink to="/blog">
            Blog
          </NavLink>
          <NavLink to="/contact">
            Contact
          </NavLink>
          <NavLink to="/download">
            Downloads
          </NavLink>
          <NavLink to="/practise">
            Practice
          </NavLink>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
  );
});

