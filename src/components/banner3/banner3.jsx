import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col, FormGroup, Input, Button } from "reactstrap";

import AnchorLink from "react-anchor-link-smooth-scroll";
import emailjs from "emailjs-com";

//GA tracking
import { sendMetrik } from "../../utils/metrics";
import ReactGA from "react-ga";

//animation
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import BBB from "../../assets/images/logos/BBB.png";
import ComEd from "../../assets/images/logos/ComEd.png";

const HeaderBanner3 = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4mxwziq",
        "template_mbj3xmb",
        form.current,
        "4wRLF5yWA7bslp3YO",
      )
      .then(
        (result) => {
          setName("");
          setEmail("");
          setPhone("");
          setTime("");
          setShow(!show);
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        },
      );
  };

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [time, setTime] = useState();
  const [show, setShow] = useState(false);

  //format phone number
  const formatPhone = (e) => {
    const value = e.target.value;
    const newValue = value.replace(/\D/g, "");
    const newValue2 = newValue.replace(/^(\d{3})(\d)/, "($1) $2");
    const newValue3 = newValue2.slice(0, 13);
    const newValue4 = newValue3.replace(/(\d)(\d{4})$/, "$1-$2");
    setPhone(newValue4);
  };
  //GA

  useEffect(() => {
    ReactGA.initialize("G-RGJPW12CWC");
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <div
      className="static-slider-head"
      id="hero"
      style={{
        height: "100vh",
        position: "relative",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col
            lg="6"
            md="6"
            className="align-self-center text-center"
            style={{
              backgroundColor: "rgba(255,255,255,0.97)",
              // borderTopLeftRadius: "8px",
              // borderBottomLeftRadius: "8px",
            }}
          >
            <AnimationOnScroll
              animateOnce
              delay={100}
              animateIn="animate__fadeIn"
            >
              <h1
                className="title vertical-align-center text-dark"
                // style={{ textShadow: "0px 0px 10px #333333" }}
              >
                Brighten your space.
                <br /> Shrink your bills.
                <br />
                <span className="text-success">With Project Green.</span>
              </h1>
              <div className="row p-3 m-3">
                <div className="col">
                  <a
                    target="_blank"
                    href="https://www.bbb.org/us/il/forest-park/profile/lighting-consultant/project-green-environmental-solutions-0654-88693996"
                  >
                    <img src={BBB} style={{ maxWidth: "100%" }} />
                  </a>
                </div>
                <div className="col">
                  <a
                    target="_blank"
                    href="https://eeserviceproviders.com/2019-campaigns/out-west/project-green/"
                  >
                    <img src={ComEd} style={{ maxWidth: "100%" }} />
                  </a>
                </div>
              </div>
            </AnimationOnScroll>
          </Col>
          <Col lg="6" className="bg-dark justify-content-center rounded shadow">
            <div className="pt-5 p-3 pb-5">
              <Row className="m-0">
                <div className="contact-box">
                  {show ? (
                    <div>
                      <div
                        className="d-flex align-items-center"
                        style={{ overflow: "visible" }}
                      ></div>
                      <div className="">
                        <h1 className="text-center text-success">Success!</h1>
                        <br />
                        <h3 className="text-center text-light">
                          Your assessment request has been sent.
                        </h3>
                        <h5 className="text-center text-light">
                          We'll be in touch with you shortly!
                        </h5>
                      </div>
                    </div>
                  ) : (
                    <form ref={form} onSubmit={sendEmail}>
                      <h4
                        className="text-success"
                        style={{ fontSize: "1.5rem", fontWeight: "bold" }}
                      >
                        BOOK A FREE ENERGY ASSESSMENT
                      </h4>
                      <h5 className="subtitle text-light">
                        Find out how much brighter your place can be and how
                        much you can be saving.
                      </h5>
                      <Row>
                        <Col lg="6">
                          <AnimationOnScroll
                            animateOnce
                            delay={300}
                            animateIn="animate__lightSpeedInRight"
                          >
                            <FormGroup className="m-t-15">
                              <Input
                                type="name"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder="enter your name"
                                value={name}
                                required
                              />
                            </FormGroup>
                          </AnimationOnScroll>
                        </Col>
                        <Col lg="6">
                          <AnimationOnScroll
                            animateOnce
                            delay={150}
                            animateIn="animate__lightSpeedInRight"
                          >
                            <FormGroup className="m-t-15">
                              <Input
                                type="email"
                                name="email"
                                className="form-control"
                                id="email"
                                placeholder="enter your email"
                                value={email}
                                required
                              />
                            </FormGroup>
                          </AnimationOnScroll>
                        </Col>
                        <Col lg="12">
                          <AnimationOnScroll
                            animateOnce
                            delay={150}
                            animateIn="animate__lightSpeedInRight"
                          >
                            <FormGroup className="m-t-15">
                              <Input
                                type="tel"
                                onChange={formatPhone}
                                name="phone"
                                placeholder="your phone number"
                                id="phone"
                                className="form-control"
                                value={phone}
                                required
                              />
                            </FormGroup>
                          </AnimationOnScroll>
                        </Col>
                        <Col lg="12">
                          <AnimationOnScroll
                            animateOnce
                            delay={350}
                            animateIn="animate__bounceIn"
                          >
                            <FormGroup className="m-t-15">
                              <select
                                className="form-control"
                                name="time"
                                placeholder="How can we help you?"
                                id="time"
                                value={time}
                                required
                              >
                                <option>Select best time to talk</option>
                                <option>8AM - 10AM</option>
                                <option>10AM - 12PM</option>
                                <option>12PM - 2PM</option>
                                <option>2PM - 4PM</option>
                                <option>4PM - 6PM</option>
                              </select>
                            </FormGroup>
                          </AnimationOnScroll>
                        </Col>
                        <Col lg="12">
                          <AnimationOnScroll
                            animateOnce
                            delay={400}
                            animateIn="animate__fadeInUp"
                          >
                            <Button
                              type="submit"
                              className="btn btn-info-gradiant m-t-20 btn-arrow w-100"
                            >
                              <span>
                                BOOK NOW <i className="ti-arrow-right"></i>
                              </span>
                            </Button>
                          </AnimationOnScroll>
                        </Col>
                      </Row>
                    </form>
                  )}
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <div
        className="bg-dark w-100 text-center p-1"
        style={{ position: "absolute", bottom: 0 }}
      >
        <h2 className="text-light">
          Small to mid-sized businesses and large corporations.
        </h2>
      </div> */}
    </div>
  );
};

export default HeaderBanner3;
