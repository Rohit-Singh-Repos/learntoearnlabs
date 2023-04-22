import React, { useState, useEffect } from "react";
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
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
  AiOutlineMenu,
  MdOutlineClose,
} from "assets/icons";

export const Header = React.memo(() => {
  const [navbar, setNavbar] = useState(false);
  const [navbar2, setNavbar2] = useState(false);
  const [navbar3, setNavbar3] = useState(false);
  const [navbarId, setNavbarId] = useState(null);
  const [navbarId2, setNavbarId2] = useState(null);
  const [mobile, setMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 990) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  const desktopNavMenu = () => {
    return (
      <>
        <NavBrand>
          <NavBrandLink to="/">
            <Heading headingClass="brand-name">Learn2Earn Labs</Heading>
          </NavBrandLink>
        </NavBrand>
        <Div divClass="collapse navbar-collapse" id="navbarNavDropdown">
          <UnorderedList unorderedListClass="navbar-nav ms-auto">
            {navbarSchema && navbarSchema.length !== 0 ? (
              navbarSchema.map((item) => (
                <ListItem key={item.id} listItemClass="nav-item">
                  {item.navItemPath ? (
                    <NavLink to={item.navItemPath}>{item.navItemName}</NavLink>
                  ) : (
                    <ListItem listItemClass="nav-item dropdown ">
                      <Span
                        spanClass="nav-link dropdown-toggle fw-bold text-dark show"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {item.navItemName}
                      </Span>
                      <UnorderedList unorderedListClass="dropdown-menu show rounded-0  dropdown-center" >
                        {
                          item?.navsubItems && item?.navsubItems.length !== 0 ? item?.navsubItems.map((item2) => (
                            <ListItem listItemClass="dropdown-item">
                              {item2.navItemName}
                            </ListItem>
                          )) : <></>
                        }
                      </UnorderedList>
                    </ListItem>
                  )}
                </ListItem>
              ))
            ) : (
              <></>
            )}
          </UnorderedList>
        </Div>
      </>
    );
  };

  const mobileNavMenu = () => {
    return (
      <>
        <NavBrand>
          <NavBrandLink to="/">
            <Heading headingClass="brand-name">Learn2Earn Labs</Heading>
          </NavBrandLink>
        </NavBrand>
        <Button
          buttonClass={`me-2 remove-shadow border-0 ${
            navbar ? "navbar-toggler" : "navbar-toggler collapsed"
          }`}
          type="button"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <MdOutlineClose color="#fff" className="fw-bold" />
          ) : (
            <AiOutlineMenu className="fw-bold" />
          )}
        </Button>
        <Div
          divClass={`collapse navbar-collapse ${
            navbar ? "collapse show" : "collapse"
          }`}
          id="navbarNavDropdown"
        >
          <UnorderedList unorderedListClass="navbar-nav ms-auto mt-4">
            {navbarSchema && navbarSchema.length !== 0 ? (
              navbarSchema.map((item) => (
                <ListItem key={item.id} listItemClass="nav-item">
                  {item.navItemPath ? (
                    <NavLink to={item.navItemPath}>{item.navItemName}</NavLink>
                  ) : (
                    <Div>
                      <Paragraph
                        paragraphClass="ms-3 fw-bold d-flex justify-content-between align-items-center"
                        onClick={() => {
                          setNavbar2(!navbar2);
                          setNavbarId(item.id);
                        }}
                      >
                        {item.navItemName}
                        <Button
                          type="button"
                          buttonClass="btn me-3 mtt-0 remove-shadow border-0"
                        >
                          {navbar2 && navbarId === item.id ? (
                            <BsFillArrowUpCircleFill
                              color="#fff"
                              className="fw-bold"
                            />
                          ) : (
                            <BsFillArrowDownCircleFill />
                          )}
                        </Button>
                      </Paragraph>
                      <Div
                        divClass={`collapse navbar-collapse ${
                          navbar2 && navbarId === item.id
                            ? "collapse show"
                            : "collapse"
                        }`}
                        id="navbarNavDropdown "
                      >
                        <UnorderedList unorderedListClass="navbar-nav ms-auto">
                          {item?.navsubItems &&
                          item?.navsubItems.length !== 0 ? (
                            item?.navsubItems.map((item2) => (
                              <ListItem key={item2.id}>
                                <Div>
                                  <Paragraph
                                    paragraphClass={`ms-3 fw-bold d-flex justify-content-between align-items-center ${
                                      navbar3 && navbarId2 === item2.id
                                        ? "text-light"
                                        : ""
                                    }`}
                                    onClick={() => {
                                      setNavbar3(!navbar3);
                                      setNavbarId2(item2.id);
                                    }}
                                  >
                                    {item2.navItemName}
                                    <Button
                                      type="button"
                                      buttonClass="btn me-3 mtt-0 remove-shadow border-0"
                                    >
                                      {navbar3 && navbarId2 === item2.id ? (
                                        <BsFillArrowUpCircleFill
                                          color="#fff"
                                          className="fw-bold"
                                        />
                                      ) : (
                                        <BsFillArrowDownCircleFill />
                                      )}
                                    </Button>
                                  </Paragraph>
                                  <Div
                                    divClass={`collapse navbar-collapse ${
                                      navbar3 && navbarId2 === item2.id
                                        ? "collapse show"
                                        : "collapse"
                                    }`}
                                    id="navbarNavDropdown "
                                  >
                                    <UnorderedList unorderedListClass="navbar-nav ms-auto">
                                      {item2?.navsubItems &&
                                      item2?.navsubItems.length !== 0 ? (
                                        item2?.navsubItems.map((item3) => (
                                          <ListItem key={item3.id}>
                                            <NavLink to={item3.navItemPath}>
                                              {item3.navItemName}
                                            </NavLink>
                                          </ListItem>
                                        ))
                                      ) : (
                                        <></>
                                      )}
                                    </UnorderedList>
                                  </Div>
                                </Div>
                              </ListItem>
                            ))
                          ) : (
                            <></>
                          )}
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
      </>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      {
        mobile ? mobileNavMenu() : desktopNavMenu()
      }
    </nav>
  );
});
