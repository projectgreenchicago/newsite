/* eslint-disable */
import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import Plx from "react-plx";

import AnchorLink from "react-anchor-link-smooth-scroll";

import logo from "../../assets/images/logos/white-text.png";
import logo1 from "../../assets/images/logos/dark-text1.png";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState({ x: 0, y: 70 });

  const toggle = () => setIsOpen(!isOpen);

  const [headerBackground, setHeaderBackground] = useState("transparent");

  //set max state.y to 100
  useEffect(() => {
    if (state.y > 100) {
      setState({ x: 0, y: 100 });
    }
  }, [state.y]);

  //set min state.y to 70
  useEffect(() => {
    if (state.y < 70) {
      setState({ x: 0, y: 70 });
    }
  }, [state.y]);

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      // console.log("scrolling up");
    } else if (y < window.scrollY) {
      // console.log("scrolling down");
      setState({ y: (70 + window.scrollY / 25).toFixed(0) });
    }
    setY(window.scrollY);
  };
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    setY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      // return a cleanup function to unregister our function since its gonna run multiple times
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);

  //set header background to white when on top
  useEffect(() => {
    if (y > 70) {
      setHeaderBackground("rgba(37,50,55,0.5)");
    } else {
      setHeaderBackground("transparent");
    }
  }, [y]);

  /*--------------------------------------------------------------------------------*/
  /*To open NAVBAR in MOBILE VIEW                                                   */
  /*--------------------------------------------------------------------------------*/

  return (
    <div className="topbar" id="top">
      {props.view === "sign-in" ? (
        <div
          className="header6 pt-1 bg-light"
          style={{
            backgroundColor: `${headerBackground}`,
            position: "fixed",
            width: "100%",
          }}
        >
          <Container className="po-relative bg">
            <Navbar className="navbar-expand-lg h6-nav-bar">
              <NavbarBrand href="/projectgreen/">
                <img id="project-green-logo" src={logo1} alt="wrapkit" />
              </NavbarBrand>
              <NavbarToggler onClick={toggle}>
                <span className="ti-menu"></span>
              </NavbarToggler>
              <Collapse
                isOpen={isOpen}
                navbar
                className="hover-dropdown font-14 ml-auto"
                id="h6-info"
              >
                <Nav navbar className="ml-auto">
                  <NavItem>
                    <Link
                      className="nav-link text-dark"
                      to="/projectgreen/#services"
                    >
                      Services
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      className="nav-link text-dark"
                      to="/projectgreen/#case"
                    >
                      Recent Project
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      className="nav-link text-dark"
                      to="/projectgreen/#companyNarrative"
                    >
                      About Us
                    </Link>
                  </NavItem>
                </Nav>
                <div className="act-buttons">
                  <AnchorLink
                    href={"#contact-us"}
                    className="btn btn-success-gradiant font-14"
                  >
                    Contact Us
                  </AnchorLink>
                </div>
              </Collapse>
            </Navbar>
          </Container>
        </div>
      ) : (
        <Plx>
          <div
            className="header6 pt-1"
            style={{
              backgroundColor: `${headerBackground}`,
              position: "fixed",
              width: "100%",
            }}
          >
            <Container className="po-relative">
              <Navbar className="navbar-expand-lg h6-nav-bar">
                <NavbarBrand href="/projectgreen/">
                  <img id="project-green-logo" src={logo} alt="wrapkit" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle}>
                  <span className="ti-menu"></span>
                </NavbarToggler>
                <Collapse
                  isOpen={isOpen}
                  navbar
                  className="hover-dropdown font-14 ml-auto"
                  id="h6-info"
                >
                  <Nav navbar className="ml-auto">
                    {/* <NavItem>
                      <Link className="nav-link" to="/goones">
                        Goones
                      </Link>
                    </NavItem> */}
                    <NavItem>
                      <AnchorLink className="nav-link" href={"#services"}>
                        Services
                      </AnchorLink>
                    </NavItem>
                    <NavItem>
                      <AnchorLink className="nav-link" href={"#case"}>
                        Recent Project
                      </AnchorLink>
                    </NavItem>
                    <NavItem>
                      <AnchorLink
                        className="nav-link"
                        href={"#companyNarrative"}
                      >
                        About Us
                      </AnchorLink>
                    </NavItem>
                  </Nav>
                  <div className="act-buttons">
                    <AnchorLink
                      href={"#contact-us"}
                      className="btn btn-success-gradiant font-14"
                    >
                      Contact Us
                    </AnchorLink>
                  </div>
                </Collapse>
              </Navbar>
            </Container>
          </div>
        </Plx>
      )}
    </div>
  );
};
export default Header;
