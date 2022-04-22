import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";

import AnchorLink from "react-anchor-link-smooth-scroll";

//GA tracking
import { sendMetrik } from "../../utils/metrics";
import ReactGA from "react-ga";

//animation
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const HeaderBanner2 = (props) => {
  const [headlineInput, setHeadlineInput] = useState(false);
  const [headline, setHeadline] = useState(
    "Applying for a rebate can be intimidating.",
  );
  const handleClick = () => {
    setHeadlineInput(!headlineInput);
  };

  const handleChange = (event) => {
    setHeadline(event.target.value);
  };

  //GA

  useEffect(() => {
    ReactGA.initialize("G-RGJPW12CWC");
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <div className="static-slider-head" id="hero" style={{ height: "100vh" }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg="12" md="6" className="align-self-center text-center">
            <AnimationOnScroll
              animateOnce
              delay={100}
              animateIn="animate__fadeIn"
            >
              {headlineInput ? (
                <form>
                  <input
                    onChange={handleChange}
                    style={{ backgroundColor: "black" }}
                    value={headline}
                    className="title"
                  ></input>
                  <button onClick={handleClick}>Cancel</button>
                  <button type="submit" onClick={handleClick}>
                    Submit
                  </button>
                </form>
              ) : (
                <h1
                  className="title"
                  style={{ textShadow: "0px 0px 10px #333333" }}
                >
                  {headline}
                </h1>
              )}
            </AnimationOnScroll>
            <h4 className="subtitle font-light">
              We will handle the paperwork for you and ensure seemless
              installation.
            </h4>
            <AnchorLink
              href={"#contact-us"}
              className="btn btn-outline-light m-r-20 btn-md m-t-30 font-14"
              onClick={() => {
                sendMetrik("click", "contact-us-button-banner");
              }}
            >
              Contact Us
            </AnchorLink>
            <AnchorLink
              href={"#book-assessment"}
              className="btn btn-md m-t-30 btn-info-gradiant font-14"
              onClick={() => {
                sendMetrik("click", "rebate-assessment-button-banner");
              }}
            >
              GET FREE ENERGY ASSESSMENT
            </AnchorLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderBanner2;
