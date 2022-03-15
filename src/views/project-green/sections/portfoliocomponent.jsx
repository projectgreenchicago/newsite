/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

import img1 from "../../../assets/images/portfolio/img1.jpg";
import img2 from "../../../assets/images/portfolio/img2.jpg";
import img3 from "../../../assets/images/portfolio/img3.jpg";
import img4 from "../../../assets/images/portfolio/img4.jpg";
import img5 from "../../../assets/images/portfolio/img5.jpg";
import img6 from "../../../assets/images/portfolio/img6.jpg";

const JsComponents = (props) => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const toggle1 = () => {
    setModal1(!modal1);
  };

  const toggle2 = () => {
    setModal2(!modal2);
  };
};

//animate
import "animate.css/animate.min.css";

import { AnimationOnScroll } from "react-animation-on-scroll";

const PortfolioComponent = (props) => {
  return (
    <div>
      <div className="mt-5" id="services">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" className="text-center">
              <AnimationOnScroll
                animateOnce
                delay={0}
                animateIn="animate__fadeInUp"
              >
                <h2 className="title">
                  Here's how we transform spaces and reduce bills...
                </h2>
                <h5 className="subtitle">
                  We carefully analyze your space and identify the best options
                  to make your space brighter and your energy bills lower.
                </h5>
              </AnimationOnScroll>
            </Col>
          </Row>
          <Row className="m-t-40">
            <Col md="4">
              <AnimationOnScroll
                animateOnce
                delay={500}
                animateIn="animate__fadeInLeft"
              >
                <Card className="card-shadow">
                  <a href="#" className="img-ho">
                    <img
                      className="card-img-top"
                      src={img1}
                      alt="wrappixel kit"
                    />
                  </a>
                  <CardBody>
                    <h5 className="font-medium m-b-3">Energy Assessment</h5>
                    <p className="m-b-0 font-14">
                      Identify ways for you to reduce the amount of energy you
                      use.
                    </p>
                  </CardBody>
                </Card>
              </AnimationOnScroll>
            </Col>
            <Col md="4">
              <AnimationOnScroll
                animateOnce
                delay={500}
                animateIn="animate__fadeInUp"
              >
                <Card className="card-shadow">
                  <a href="#" className="img-ho">
                    <img
                      className="card-img-top"
                      src={img2}
                      alt="wrappixel kit"
                    />
                  </a>
                  <CardBody>
                    <h5 className="font-medium m-b-3">
                      Incentive Paperwork and Grant Writing
                    </h5>
                    <p className="m-b-0 font-14">
                      Make it as simple as possible for you to secure energy
                      incentives.
                    </p>
                  </CardBody>
                </Card>
              </AnimationOnScroll>
            </Col>
            <Col md="4">
              <AnimationOnScroll
                animateOnce
                delay={500}
                animateIn="animate__fadeInRight"
              >
                <Card className="card-shadow">
                  <a href="#" className="img-ho">
                    <img
                      className="card-img-top"
                      src={img3}
                      alt="wrappixel kit"
                    />
                  </a>
                  <CardBody>
                    <h5 className="font-medium m-b-3">
                      Full Service Electical and HVAC contracting
                    </h5>
                    <p className="m-b-0 font-14 subtitle">
                      Excute your project unobtrusive to your work flow and
                      leave your space clean and tidy as it was before the work
                      began.
                    </p>
                  </CardBody>
                </Card>
              </AnimationOnScroll>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PortfolioComponent;
