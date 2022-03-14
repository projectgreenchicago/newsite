import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

import AnchorLink from "react-anchor-link-smooth-scroll";

//GA tracking
import { sendMetrik } from "../../utils/metrics";
import ReactGA from "react-ga";

//animation
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import VisibilitySensor from "react-visibility-sensor";

//slider
import Slider from "react-input-slider";
import "./banner1.styles.css";
import hero1 from "../../assets/images/landingpage/hero1.jpg";
import hero2 from "../../assets/images/landingpage/hero2.jpg";

const HeaderBanner1 = (props) => {
  const [state, setState] = useState({ x: 0, y: 70 });
  const cost = 29950;
  const newCost = (cost - cost * (((70 + -state.y) * -1) / 100)).toFixed(0);
  const savings = cost - newCost;
  const brightness = (70 + -state.y) * -1;
  const brightness2 = 60 + (brightness + brightness);
  //GA
  useEffect(() => {
    ReactGA.initialize("G-RGJPW12CWC");
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  //slider animation

  //set image brightness equal to state.y
  const style = {
    filter: `brightness(${brightness2}%)`,
    transition: "all 0.5s ease",
    height: "100vh",
    width: "100vw",
    position: "absolute",
    overflow: "hidden",
    zIndex: "0",
    objectFit: "cover",
  };

  return (
    <div className="static-slider-head" id="hero1" style={{ height: "100vh" }}>
      <img src={hero2} style={style} />
      <Container>
        <VisibilitySensor>
          <Row className="justify-content-center mt-5 up">
            <Col lg="6" md="6" className="align-self-center text-center">
              <h1 className="text-light text-left">Transform your space</h1>
              <div>
                {/* <Slider
                yreverse
                ymin={70}
                ymax={100}
                axis="y"
                y={state.y}
                onChange={({ y }) => setState((state) => ({ ...state, y }))}
              /> */}
                {/* //create a range slider */}
                <input
                  id="light-slider"
                  style={{ backgroundColor: "#66000000" }}
                  type="range"
                  min="70"
                  max="100"
                  value={state.y}
                  onChange={({ target: { value } }) =>
                    setState((state) => ({ ...state, y: value }))
                  }
                ></input>
                <h1 className="text-white text-left">
                  Illumination: {70 + brightness}%
                </h1>
                {/* <h1 className="text-light text-left">
                  Brightness: {70 + (70 + -state.y) * -1}%
                </h1> */}
              </div>
            </Col>
            <Col lg="6" md="7" className="text-center">
              <Card
                className="card-shadow p-3 up"
                style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
              >
                <CardBody>
                  <div>
                    <span className="label label-success label-rounded">
                      Project Green
                    </span>
                    <div className="mt-5">
                      <div>
                        <h3 className="text-dark m-3">
                          Your Annual Electricity Bill:
                        </h3>
                        <h2 className="text-success">
                          $
                          {newCost
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </h2>
                      </div>
                      <div>
                        <h3 className="text-dark m-3">Your Savings:</h3>
                        <h2 className="text-success">
                          $
                          {savings
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </h2>
                      </div>
                      <div>
                        <h3 className="text-dark m-3">Total cost reduction:</h3>
                        <h2 className="text-info">{(70 + -state.y) * -1}%</h2>
                      </div>
                    </div>

                    <AnchorLink
                      className="btn btn-success-gradiant btn-md btn-arrow m-t-20"
                      href={"#book-assessment"}
                      onClick={() => {
                        sendMetrik("click", "maximize-savings-narrative");
                      }}
                    >
                      <span>
                        I WANT A BRIGHTER SPACE{" "}
                        <i className="ti-arrow-right"></i>
                      </span>
                    </AnchorLink>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </VisibilitySensor>
      </Container>
    </div>
  );
};

export default HeaderBanner1;
