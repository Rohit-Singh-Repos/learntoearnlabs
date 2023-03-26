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
                Learn2Earn Labs
            </NavBrandLink>
        </NavBrand>
        <NavMenu>
          <NavLink to="/about">
            About
          </NavLink>
          <NavLink to="/events">
            Events
          </NavLink>
          <NavLink to="/annual">
            Annual Report
          </NavLink>
          <NavLink to="/team">
            Teams
          </NavLink>
          <NavLink to="/blogs">
            Blogs
          </NavLink>
          <NavLink to="/sign-up">
            Sign Up
          </NavLink>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
  );
});

