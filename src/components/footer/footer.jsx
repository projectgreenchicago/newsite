/* eslint-disable */
import React from "react";
import { Redirect } from "react-router";
import { Container, Row, Col } from "reactstrap";
import { HashLink as Link } from "react-router-hash-link";

import logo from "../../assets/images/logos/dark-text.png";

import AnchorLink from "react-anchor-link-smooth-scroll";

//auth
import { auth } from "../../firebase/firebase.utils";

const Footer = ({ currentUser }) => {
  return (
    <div className="footer4 b-t spacer bg-light">
      <Container>
        <Row>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Address</h5>
            <p>1501 Circle Avenue Forest Park, IL 60130</p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Phone</h5>
            <p>
              (708)366-4733 <br />
              F: (708)366-4733
            </p>
          </Col>
          <Col lg="3" md="6" className="m-b-30">
            <h5 className="m-b-20">Email</h5>
            <p>
              Office :{" "}
              <a href="info@projectgreenchicago.com" className="link">
                info@projectgreenchicago.com
              </a>
            </p>
          </Col>
          <Col lg="3" md="6">
            <a href="/projectgreen/">
              <img src={logo} alt="wrapkit" />
            </a>
          </Col>
        </Row>
        <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="d-flex font-14">
                <div className="m-t-10 m-b-10 copyright">
                  © Project Green 2022
                </div>
                <div className="links ml-auto m-t-10 m-b-10">
                  <a href="#" className="p-10 p-l-0">
                    Terms of Use
                  </a>
                  <a href="#" className="p-10">
                    Legal Disclaimer
                  </a>
                  <a href="#" className="p-10">
                    Privacy Policy
                  </a>
                  {/* {
                                        currentUser ?
                                        <a className="option p-10" href="#/signin">{currentUser.displayName}</a>
                                        :
                                        <Link to="/signin" className="p-10">Sign In</Link>
                                    } */}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
