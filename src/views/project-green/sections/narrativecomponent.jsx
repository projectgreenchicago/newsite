/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody, Form } from 'reactstrap';

import AnchorLink from 'react-anchor-link-smooth-scroll';


import img5 from '../../../assets/images/features/feature30/img1.jpg';

//animate
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

//track with GA
import { sendMetrik } from '../../../utils/metrics'


const NarrativeComponent = (props) => {
    return (
        <div>
            <div className="spacer" id="companyNarrative">
                <Container className="feature30">
                    <Row>
                        <Col lg="10">
                            <AnimationOnScroll animateOnce delay={250} animateIn="animate__fadeIn">
                            <img src={img5} className="rounded img-responsive" alt="wrappixel" />
                            </AnimationOnScroll>
                        </Col>
                        <Col lg="6" md="7" className="text-center wrap-feature30-box">
                            <AnimationOnScroll animateOnce delay={500} animateIn="animate__slideInRight">
                            <Card className="card-shadow">
                                <CardBody>
                                    <div className="p-20">
                                        <span className="label label-success label-rounded">Project Green</span>
                                        <h3 className="title">PROJECT GREEN HELPS YOU SAVE MONEY ON ENERGY</h3>
                                        <p>No matter what your business is, Project Green can help identify ways to reduce your energy usage by performing an energy assessment at no charge to you. We will then identify what incentives are available to you for the project, many times bringing your return on investment to under a year. We are full service and facilitate all of the paperwork required to reserve the available money making it as simple to you as just a few signatures. Let our professional installers help make your energy savings a reality.</p>
                                        <AnchorLink 
                                            className="btn btn-success-gradiant btn-md btn-arrow m-t-20" 
                                            href={"#contact-us"}
                                            onClick={() => { sendMetrik('click', "maximize-savings-narrative")}}
                                        >
                                        <span>MAXIMIZE ENERGY SAVINGS NOW <i className="ti-arrow-right"></i></span>
                                        </AnchorLink>
                                    </div>
                                </CardBody>
                            </Card>
                            </AnimationOnScroll>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default NarrativeComponent;
