import React, { useState } from "react";
import { NavLink, NavBrand, NavBrandLink } from "styles/header/headerStyle";
import {
  Heading,
  Button,
  Div,
  UnorderedList,
  ListItem,
  Span,
  Paragraph,
} from "components";
import { navbarSchema } from "schemas";
import { BsFillArrowDownCircleFill } from "assets/icons";

export const Header = React.memo(() => {
  const [navbar, setNavbar] = useState(false);
  const [navbar2, setNavbar2] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <NavBrand>
        <NavBrandLink to="/">
          <Heading headingClass="brand-name">Learn2Earn Labs</Heading>
        </NavBrandLink>
      </NavBrand>
      <Button
        buttonClass={` me-2 ${
          navbar ? "navbar-toggler" : "navbar-toggler collapsed"
        }`}
        type="button"
        onClick={() => setNavbar(!navbar)}
      >
        <Span spanClass="navbar-toggler-icon"></Span>
      </Button>
      <Div
        divClass={`collapse navbar-collapse ${
          navbar ? "collapse show" : "collapse"
        }`}
        id="navbarNavDropdown"
      >
        <UnorderedList unorderedListClass="navbar-nav ms-auto">
          {navbarSchema && navbarSchema.length !== 0 ? (
            navbarSchema.map((item, index) => (
              <ListItem key={item.id} listItemClass="nav-item">
                {item.navItemPath ? (
                  <NavLink to={item.navItemPath}>{item.navItemName}</NavLink>
                ) : (
                  <Div>
                    <Paragraph paragraphClass="ms-3 fw-bold d-flex justify-content-between align-items-center">
                      {item.navItemName}
                      <Button type="button" onClick={() => setNavbar2(!navbar2)} buttonClass="btn me-3 mtt-0">
                        <BsFillArrowDownCircleFill />
                      </Button>
                    </Paragraph>
                    <Div
                      divClass={`collapse navbar-collapse ${
                        navbar2 ? "collapse show" : "collapse"
                      }`}
                      id="navbarNavDropdown "
                    >
                      <UnorderedList unorderedListClass="navbar-nav ms-auto">
                          {
                            item?.navsubItems && item?.navsubItems.length !== 0 ? item?.navsubItems.map((item2) => (
                              <ListItem key={item2.id}>
                                  <NavLink to={item2.navItemPath}>{item2.navItemName}</NavLink>
                              </ListItem>
                            )) : <></>
                          }
                      </UnorderedList>
                    </Div>
                  </Div>
                )}
              </ListItem>
            ))
          ) : (
            <></>
          )}
        </UnorderedList>
      </Div>
    </nav>
  );
});
