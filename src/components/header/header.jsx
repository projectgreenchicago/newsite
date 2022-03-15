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

import logo from "../../assets/images/logos/white-text1.png";
import logo1 from "../../assets/images/logos/dark-text1.png";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  /*--------------------------------------------------------------------------------*/
  /*To open NAVBAR in MOBILE VIEW                                                   */
  /*--------------------------------------------------------------------------------*/

  return (
    <div className="topbar" id="top">
      <div className="header6">
        <Container className="po-relative">
          <Navbar
            className="navbar-expand-lg h6-nav-bar"
            style={{ position: "relative", width: "100%" }}
          >
            <NavbarBrand href="/">
              <img
                src={props.view === "sign-in" ? logo1 : logo}
                alt="wrapkit"
                style={{ maxHeight: "4rem" }}
              />
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
                  <AnchorLink
                    className={
                      props.view === "sign-in"
                        ? "nav-link text-dark"
                        : "nav-link"
                    }
                    href={"/companyNarrative"}
                  >
                    About Us
                  </AnchorLink>
                </NavItem>
                <NavItem>
                  <AnchorLink
                    className={
                      props.view === "sign-in"
                        ? "nav-link text-dark"
                        : "nav-link"
                    }
                    href={"/case"}
                  >
                    Our Recent Project
                  </AnchorLink>
                </NavItem>
                <NavItem>
                  <AnchorLink
                    className={
                      props.view === "sign-in"
                        ? "nav-link text-dark"
                        : "nav-link"
                    }
                    href={"/contact-us"}
                  >
                    Contact Us
                  </AnchorLink>
                </NavItem>
              </Nav>
              <div className="act-buttons">
                <AnchorLink
                  href="/book-assessment"
                  className="btn btn-success-gradiant font-14"
                >
                  Book Energy Assessment
                </AnchorLink>
              </div>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};
export default Header;
