/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

import img2 from "../../../assets/images/testimonial/2.jpg";
import img3 from "../../../assets/images/testimonial/pastor.jpg";

const TestimonialComponent = (props) => {
  return (
    <div>
      <div className="testimonial3 spacer bg-white">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" className="text-center">
              <h2 className="title">Hear from our customers...</h2>
            </Col>
          </Row>
          <Row className="testi3 m-t-40 justify-content-center">
            <Col lg="5" md="5">
              <Card className="card-shadow">
                <CardBody>
                  <h6 className="font-light m-b-30">
                    I just wanted to write and tell you that Project Green did
                    great work for us today. They arrived on time, explained
                    what they were going to do and completed the job quickly.
                    They cleaned up the work area and left it as they found it.
                    Also, the new LED lights look great.
                  </h6>
                  <div className="d-flex no-block align-items-center">
                    <span className="thumb-img">
                      <img
                        src={img2}
                        alt="wrapkit"
                        className="circle"
                        style={{ height: "60px", objectFit: "cover" }}
                      />
                    </span>
                    <div className="m-l-20">
                      <h6 className="m-b-0 customer">Mark Zimney</h6>
                      <p className="m-b-0 customer">
                        St. Mary’s Episcopal Church Park Ridge
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="5" md="5">
              <Card className="card-shadow">
                <CardBody>
                  <h6 className="font-light m-b-30">
                    Thank you very much for the work you performed at the
                    church. The new lighting is amazing! Everyone that worked at
                    the church was very courteous and responsible. They were all
                    easy to work with and listened to any concerns that I might
                    have had. The work you did is a blessing to our church.
                    Thank you again for your generosity!
                  </h6>
                  <div className="d-flex no-block align-items-center">
                    <span className="thumb-img">
                      <img
                        src={img3}
                        alt="wrapkit"
                        className="circle"
                        style={{ height: "60px", objectFit: "cover" }}
                      />
                    </span>
                    <div className="m-l-20">
                      <h6 className="m-b-0 customer">Randy Chapple</h6>
                      <p className="m-b-0 customer">
                        Christian Fellowship Church
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TestimonialComponent;
