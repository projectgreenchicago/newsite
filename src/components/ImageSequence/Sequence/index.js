import React, { forwardRef, useState, useEffect } from "react";
import { Skeleton } from "../Skeleton";
import ImageArray from "./ImageArray";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { sendMetrik } from "../../../utils/metrics";

import { Container, Row, Col, Card, CardBody } from "reactstrap";
import Plx from "react-plx";

const ImageSequence = forwardRef(({ progress }, ref) => {
  const newImages = ImageArray();

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

  const [state, setState] = useState({ x: 0, y: 70 });
  const cost = 29950;
  const newCost = (cost - cost * (((70 + -state.y) * -1) / 100)).toFixed(0);
  const savings = cost - newCost;

  let index = Math.round(progress * 1 * (newImages.length - 1));

  if (newImages[index][1] !== undefined) {
    if (newImages[index][1] === "loading") {
      return <Skeleton width="100%" height="100%" />;
    } else {
      return newImages.map((item, i) => (
        <div
          ref={ref}
          key={i}
          style={{
            display: i !== index ? "none" : "block",
            height: "100%",
            width: "100%",
            backgroundImage: `url('${item[0] ? item[0].src : null}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div style={{ position: "absolute", top: "10rem", left: "20rem" }}>
            <Container>
              <Row className="justify-content-center up">
                <Col
                  lg="6"
                  md="6"
                  className="align-self-center text-center"
                ></Col>
                <Col lg="6" md="6" className="align-self-center text-center">
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
          </div>
        </div>
      ));
    }
  }
});

export default ImageSequence;
