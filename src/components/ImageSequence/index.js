import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

import { Container, Row, Col, Card, CardBody } from "reactstrap";

import "./styles.css";

import Plx from "react-plx";

import "./styles.css";
import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./Sequence";
import PortfolioComponent from "../../views/project-green/sections/portfoliocomponent";
import Goones from "../goones.component/goones.component";

import AnchorLink from "react-anchor-link-smooth-scroll";

//GA tracking
import { sendMetrik } from "../../utils/metrics";

const ImgSequence = () => {
  const [state, setState] = useState({ x: 0, y: 70 });
  const cost = 29950;
  const newCost = (cost - cost * (((70 + -state.y) * -1) / 100)).toFixed(0);
  const savings = cost - newCost;
  const brightness = (70 + -state.y) * -1;
  const brightness2 = 60 + (brightness + brightness);
  const [isa, setIsa] = useState(1);

  const ref = useRef();
  return (
    <div className="App">
      <div className="row text-left" style={{ padding: "0 100px" }}>
        <div className="col-md-12">
          <Plx
            parallaxData={[
              {
                start: 0,
                end: 300,
                properties: [
                  {
                    startValue: 0,
                    endValue: -200,
                    property: "translateY",
                  },
                ],
              },
              {
                start: 0,
                end: 200,
                properties: [
                  {
                    startValue: 0,
                    endValue: 1,
                    property: "opacity",
                  },
                ],
              },
            ]}
            className="container"
            style={{ position: "fixed", zIndex: 1, top: 400 }}
          >
            <h1 className="text-white display-1">Your space</h1>
          </Plx>
          <Plx
            parallaxData={[
              {
                start: 250,
                end: 450,
                properties: [
                  {
                    startValue: 0,
                    endValue: -110,
                    property: "translateY",
                  },
                ],
              },
              {
                start: 250,
                end: 450,
                properties: [
                  {
                    startValue: 0,
                    endValue: 1,
                    property: "opacity",
                  },
                ],
              },
            ]}
            className="container"
            style={{ position: "fixed", zIndex: 1, top: 400, opacity: 0 }}
          >
            <h1 className="text-white display-1">
              Can be
              <span className="font-weight-bold text-warning"> brighter</span>
            </h1>
          </Plx>
          <Plx
            parallaxData={[
              {
                start: 700,
                end: 900,
                properties: [
                  {
                    startValue: 0,
                    endValue: -280,
                    property: "translateX",
                  },
                ],
              },
              {
                start: 700,
                end: 900,
                properties: [
                  {
                    startValue: 0,
                    endValue: 1,
                    property: "opacity",
                  },
                ],
              },
            ]}
            className="container"
            style={{
              position: "fixed",
              zIndex: 1,
              top: 380,
              left: 400,
              opacity: 0,
            }}
          >
            <h1 className="text-success font-weight-bold display-1">
              <span
                className="text-light"
                style={{ fontWeight: "normal", fontSize: "4.5rem" }}
              >
                with
              </span>{" "}
              Project Green
            </h1>
          </Plx>
        </div>
      </div>
      <Plx
        parallaxData={[
          {
            start: 400,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
          {
            start: 910,
            end: 1100,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
          {
            start: 1300,
            end: 1500,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
        ]}
      >
        <Controller>
          <Scene duration="200%" triggerHook="onLeave" pin>
            {(progress) => (
              <div style={{ height: "100vh", position: "relative" }}>
                <Sequence ref={ref} progress={progress} />
              </div>
            )}
          </Scene>
        </Controller>
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 1800,
            end: 2200,
            properties: [
              {
                startValue: 1,
                endValue: 1.3,
                property: "scale",
              },
            ],
          },
        ]}
        style={{
          position: "absolute",
          height: "100vh",
        }}
      >
        <Container>
          <Row className="justify-content-center mt-5 up">
            <Col lg="3" md="3" className="align-self-center text-center"></Col>
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
                        <h3 className="text-dark m-3">Total cost reduction:</h3>
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
                          <h2 className="text-info">{(70 + -state.y) * -1}%</h2>
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
                  *The numbers presented above are just an example. The actual
                  metrics will vary depending on the case.
                </p>
              </Card>
            </Col>
            <Col lg="3" md="3"></Col>
          </Row>
        </Container>
      </Plx>
    </div>
  );
};

export default ImgSequence;
