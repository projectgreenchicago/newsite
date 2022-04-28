import React, { useState, useRef } from "react";
import { Row, Col, Container, FormGroup, Input, Button } from "reactstrap";
import emailjs from "emailjs-com";

//animate
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const BookAssessment = (props) => {
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

  return (
    <div>
      <div className="contact1 bg-light" id="book-assessment">
        <Row>
          <Container>
            <div className="spacer">
              <Row className="m-0">
                <Col
                  lg="6"
                  className="d-flex align-items-center justify-content-center"
                >
                  <div className="contact-box p-r-40">
                    {show ? (
                      <div>
                        <div
                          className="d-flex align-items-center justify-content-center"
                          style={{ overflow: "visible" }}
                        ></div>
                        <div className="">
                          <h1 className="text-center text-success">Success!</h1>
                          <br />
                          <h3 className="text-center text-info">
                            Your assessment request has been sent.
                          </h3>
                          <h5 className="text-center text-info">
                            We'll be in touch with you shortly!
                          </h5>
                        </div>
                      </div>
                    ) : (
                      <form ref={form} onSubmit={sendEmail}>
                        <h4 className="title">BOOK A FREE ENERGY ASSESSMENT</h4>
                        <h5 className="subtitle">
                          Find out how nice your place can look and how much you
                          can be saving.
                        </h5>
                        <Row>
                          <Col lg="6">
                            <AnimationOnScroll
                              animateOnce
                              delay={300}
                              animateIn="animate__lightSpeedInLeft"
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
                              animateIn="animate__lightSpeedInLeft"
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
                              animateIn="animate__lightSpeedInLeft"
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
                                className="btn btn-info-gradiant m-t-20 btn-arrow"
                              >
                                <span>
                                  BOOK <i className="ti-arrow-right"></i>
                                </span>
                              </Button>
                            </AnimationOnScroll>
                          </Col>
                        </Row>
                      </form>
                    )}
                  </div>
                </Col>
                <Col lg="6">
                  <AnimationOnScroll
                    animateOnce
                    delay={500}
                    animateIn="animate__fadeInRight"
                  >
                    <div className="detail-box p-10 bg-info">
                      <img
                        style={{ maxHeight: "100%", maxWidth: "100%" }}
                        src="https://images.unsplash.com/photo-1581090585850-5a6a7c11c79d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                      />
                    </div>
                  </AnimationOnScroll>
                </Col>
              </Row>
            </div>
          </Container>
        </Row>
      </div>
    </div>
  );
};

export default BookAssessment;
