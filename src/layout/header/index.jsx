import React, { useState, useEffect } from "react";
import { NavLink, NavBrand, NavBrandLink, NavLink2 } from "styles/header/headerStyle";
import {
  Heading,
  Button,
  Div,
  UnorderedList,
  ListItem,
  Span,
  Paragraph,
  LinkComponent,
  Image,
} from "components";
import { navbarSchema } from "schemas";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
  AiOutlineMenu,
  MdOutlineClose,
} from "assets/icons";
import { MISCELLANEOUS_IMAGES } from "assets/images";
import { useLocation } from "react-router-dom";
import { useHookstate } from "@hookstate/core";
import { MOBILE_DETECTOR } from "globalStore/globalState";

export const Header = React.memo(() => {
  const { pathname } = useLocation()
  const [navbar, setNavbar] = useState(false);
  const [navbar2, setNavbar2] = useState(false);
  const [navbar3, setNavbar3] = useState(false);
  const [navbarId, setNavbarId] = useState(null);
  const [navbarId2, setNavbarId2] = useState(null);
  const [mobile, setMobile] = useState(false);
  const { mobileDetector } = useHookstate(MOBILE_DETECTOR);

  const handleResize = () => {
    if (mobileDetector.get()) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    setNavbar(false)
    setNavbar2(false)
    setNavbar3(false)
    setNavbarId(null)
    setNavbarId2(null)
  },[pathname]);

  useEffect(() => {
    // window.addEventListener("resize", handleResize);
    handleResize()
  },[]);

  const desktopNavMenu = () => {
    return (
      <>
        <NavBrand>
          <NavBrandLink to="/">
            <Image 
              imagePath={MISCELLANEOUS_IMAGES.l2elogo}
              imageClass="img-thumbnail"
              width="100"
              height="100"
              imageAltText=""
            />
            <Heading headingClass="brand-name ps-2 fw-bold">Learn2Earn Labs</Heading>
          </NavBrandLink>
        </NavBrand>
        <Div divClass="collapse navbar-collapse" id="navbarNavDropdown">
          <UnorderedList unorderedListClass="navbar-nav ms-auto">
            {navbarSchema && navbarSchema.length !== 0 ? (
              navbarSchema.map((item) => (
                <ListItem key={item.id} listItemClass="nav-item">
                  {item.navItemPath ? (
                    <NavLink onClick={() => {
                      setNavbarId(null);
                      setNavbarId2(null);
                      setNavbar2(false)
                      setNavbar3(false)
                    }} to={item.navItemPath}>{item.navItemName}</NavLink>
                  ) : (
                    <Div divClass="nav-item dropdown">
                      <Span
                        spanClass="nav-link dropdown-toggle fw-bold show navbar-color-normal"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        onClick={() => {
                          setNavbar2(!navbar2);
                          setNavbar3(false)
                          setNavbarId(item.id);
                        }}
                      >
                        {item.navItemName}
                      </Span>
                      <UnorderedList
                        unorderedListClass={
                          navbar2 && navbarId === item.id
                            ? `dropdown-menu navbar-dropdown show rounded-0  dropdown-center`
                            : `dropdown-menu navbar-dropdown rounded-0 dropdown-center`
                        }
                      >
                        {item?.navsubItems && item?.navsubItems.length !== 0 ? (
                          item?.navsubItems.map((item2) => (
                            <ListItem
                              key={item2.id}
                              listItemClass="dropdown-item"
                              role="button"
                            >
                              <Div divClass="nav-item dropdown">
                                <Span
                                  spanClass={`nav-link ${
                                    item.navItemName !== "Contact"
                                      ? "dropdown-toggle"
                                      : ""
                                  } fw-bold text-dark show`}
                                  role="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                  onClick={
                                    item.navItemName !== "Contact"
                                      ? () => {
                                          setNavbar3(!navbar3);
                                          setNavbarId2(item2.id);
                                        }
                                      : () => {}
                                  }
                                >
                                  <LinkComponent pathName={item2.navItemPath}>
                                    {item2.navItemName}
                                  </LinkComponent>
                                </Span>
                                <UnorderedList
                                  unorderedListClass={
                                    navbarId2 === item2.id
                                      ? `dropdown-menu subnavbar-dropdown show rounded-0  dropdown-center`
                                      : `dropdown-menu subnavbar-dropdown rounded-0 dropdown-center`
                                  }
                                >
                                  {item2?.navsubItems &&
                                  item2?.navsubItems.length !== 0 ? (
                                    item2?.navsubItems.map((item3) => (
                                      <ListItem
                                        key={item3.id}
                                        listItemClass="dropdown-item"
                                        role="button"
                                      >
                                        <NavLink2
                                          to={item3.navItemPath}
                                          onClick={() => {
                                            setNavbar2(false);
                                            setNavbar3(false)
                                            setNavbarId2(null)
                                          }}
                                        >
                                          {item3.navItemName}
                                        </NavLink2>
                                      </ListItem>
                                    ))
                                  ) : (
                                    <></>
                                  )}
                                </UnorderedList>
                              </Div>
                            </ListItem>
                          ))
                        ) : (
                          <></>
                        )}
                      </UnorderedList>
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

  const mobileNavMenu = () => {
    return (
      <>
        <NavBrand>
          <NavBrandLink to="/">
           <Image 
              imagePath={MISCELLANEOUS_IMAGES.l2elogo}
              imageClass="img-thumbnail"
              width="70"
              height="70"
              imageAltText=""
            />
            <Heading headingClass="brand-name fs-12 mt-2 ms-2">Learn2Earn Labs</Heading>
          </NavBrandLink>
        </NavBrand>
        <Button
          buttonClass={`me-2 remove-shadow border-0 fw-bold ${
            navbar ? "navbar-toggler" : "navbar-toggler collapsed"
          }`}
          type="button"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <MdOutlineClose color="#fff" className="fw-bold" />
          ) : (
            <AiOutlineMenu color="#fff" className="fw-bold" />
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
                        paragraphClass="ms-3 fw-bold d-flex justify-content-between align-items-center text-light"
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
                        divClass={`collapse navbar-collapse text-light ${
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
    <nav className="navbar navbar-expand-lg bg-primary ps-3 pe-3">
      {mobile ? mobileNavMenu() : desktopNavMenu()}
    </nav>
  );
});
