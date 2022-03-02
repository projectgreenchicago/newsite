/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody } from 'reactstrap';

import img1 from '../../../assets/images/portfolio/img1.jpg';
import img2 from '../../../assets/images/portfolio/img2.jpg';
import img3 from '../../../assets/images/portfolio/img3.jpg';
import img4 from '../../../assets/images/portfolio/img4.jpg';
import img5 from '../../../assets/images/portfolio/img5.jpg';
import img6 from '../../../assets/images/portfolio/img6.jpg';

const PortfolioComponent = (props) => {
    return (
        <div>
            <div className="spacer" id="services">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h2 className="title">Our Services</h2>
                            <h6 className="subtitle">We offer management consultant services to a diverse range of clients in various industries. Some of our important practice areas are listed below.</h6>
                        </Col>
                    </Row>
                    <Row className="m-t-40">
                        <Col md="4">
                            <Card className="card-shadow">
                                <a href="#" className="img-ho"><img className="card-img-top" src={img1} alt="wrappixel kit" /></a>
                                <CardBody>
                                    <h5 className="font-medium m-b-3">Energy Assessment</h5>
                                    <p className="m-b-0 font-14">Identify ways for you to reduce the amount of energy you use</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-shadow">
                                <a href="#" className="img-ho"><img className="card-img-top" src={img2} alt="wrappixel kit" /></a>
                                <CardBody>
                                    <h5 className="font-medium m-b-3">Incentive Paperwork and Grant Writing</h5>
                                    <p className="m-b-0 font-14">
                                        Make it as simple as possible for you to secure energy incentives.
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-shadow">
                                <a href="#" className="img-ho"><img className="card-img-top" src={img3} alt="wrappixel kit" /></a>
                                <CardBody>
                                    <h5 className="font-medium m-b-3">Full Service Electical and HVAC contracting</h5>
                                    <p className="m-b-0 font-14">Excute your project unobtrusive to your work flow and leave your space clean and tidy as it was before the work began</p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default PortfolioComponent;
