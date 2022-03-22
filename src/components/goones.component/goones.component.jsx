import React, { useEffect, useState, useRef } from "react";
import "./goonies.styles.css";
import Plx from "react-plx";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

import PortfolioComponent from "../../views/project-green/sections/portfoliocomponent";

import AnchorLink from "react-anchor-link-smooth-scroll";

//GA tracking
import { sendMetrik } from "../../utils/metrics";

//images

import bg from "../../assets/images/landingpage/bg.png";
import goonies from "../../assets/images/landingpage/goonies.png";
import hero from "../../assets/images/landingpage/hero.jpeg";
import hero1 from "../../assets/images/landingpage/hero1.jpg";
import sun from "../../assets/images/landingpage/sun.gif";

const Goones = () => {
  const [state, setState] = useState({ x: 0, y: 70 });
  const cost = 29950;
  const newCost = (cost - cost * (((70 + -state.y) * -1) / 100)).toFixed(0);
  const savings = cost - newCost;
  const brightness = (70 + -state.y) * -1;
  const brightness2 = 60 + (brightness + brightness);
  const [isa, setIsa] = useState(1);

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

  //events on scroll up & down
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

  //set state.y to 70 if top is reached
  useEffect(() => {
    if (y === 0) {
      setState({ x: 0, y: 70 });
    }
  }, [y]);

  //set display to none if element is not visible
  const [display, setDisplay] = useState("block");
  useEffect(() => {
    if (y > 1600) {
      setDisplay("none");
    } else {
      setDisplay("block");
    }
  }, [y]);

  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    if (y > 1200) {
      setOpacity("0");
    } else {
      setOpacity("1");
    }
  }, [y]);

  return (
    // <Plx
    //   parallaxData={[
    //     {
    //       start: 1000,
    //       end: 1200,
    //       properties: [
    //         {
    //           startValue: 1,
    //           endValue: 0,
    //           property: "opacity",
    //         },
    //         // {
    //         //   startValue: 0,
    //         //   endValue: 2000,
    //         //   property: "left",
    //         // },
    //       ],
    //     },
    //   ]}
    // >
    <div style={{ opacity: opacity, transition: "0.3s ease-in-out" }}>
      <div id="goones-body">
        <div style={{ height: "230vh" }}>
          <Plx
            parallaxData={[
              {
                start: 0,
                end: 700,
                properties: [
                  {
                    startValue: 0.3,
                    endValue: 1,
                    property: "brightness",
                  },
                ],
                // easing: "easeInQuad",
              },
            ]}
            style={{
              position: "fixed",
              left: 0,
              top: 0,
              width: "100%",
              zIndex: 0,
            }}
          >
            <img style={{ width: "100%" }} src={hero1} alt="background" />
          </Plx>
          <Plx
            onPlxEvent={(e) => {
              setIsa(isa + 3);
            }}
            parallaxData={[
              {
                start: 0,
                end: 400,
                properties: [
                  {
                    startValue: 1,
                    endValue: 1,
                    property: "opacity",
                  },
                ],
              },
            ]}
            style={{
              position: "fixed",
              width: "100%",
              // marginTop: "300px",
              top: 150,
              display: display,
            }}
          >
            <Container>
              <Row className="justify-content-center mt-5 up">
                <Col lg="6" md="6" className="align-self-center text-center">
                  <div>
                    <h1 className="text-light">Your space can be brighter!</h1>
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
                        <div className="">
                          <div>
                            <h3 className="text-dark m-3">
                              Your Annual Electricity Bill:
                            </h3>
                            <Plx
                              parallaxData={[
                                {
                                  start: 0,
                                  end: 400,
                                  properties: [
                                    {
                                      startValue: 1.5,
                                      endValue: 0.8,
                                      property: "scale",
                                    },
                                  ],
                                },
                              ]}
                            >
                              <h2 className="text-danger">
                                $
                                {newCost
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </h2>
                            </Plx>
                          </div>
                          <div>
                            <h3 className="text-dark m-3">Your Savings:</h3>
                            <Plx
                              parallaxData={[
                                {
                                  start: 0,
                                  end: 400,
                                  properties: [
                                    {
                                      startValue: 1,
                                      endValue: 1.3,
                                      property: "scale",
                                    },
                                  ],
                                },
                              ]}
                            >
                              <h2 className="text-success">
                                $
                                {savings
                                  .toString()
                                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              </h2>
                            </Plx>
                          </div>
                          <div>
                            <h3 className="text-dark m-3">
                              Total cost reduction:
                            </h3>
                            <Plx
                              parallaxData={[
                                {
                                  start: 0,
                                  end: 400,
                                  properties: [
                                    {
                                      startValue: 1,
                                      endValue: 1.5,
                                      property: "scale",
                                    },
                                  ],
                                },
                              ]}
                            >
                              <h2 className="text-info">
                                {(70 + -state.y) * -1}%
                              </h2>
                            </Plx>
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
                    <p className="pr-5 pl-5 text-muted">
                      *The numbers presented above are just an example. The
                      actual metrics will vary depending on the case.
                    </p>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Plx>
        </div>
      </div>
    </div>
  );
};

export default Goones;
