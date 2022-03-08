/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody, Form } from 'reactstrap';

import AnchorLink from 'react-anchor-link-smooth-scroll';

import banner from '../../../assets/images/form-banners/banner1/banner-img.png';

//animate
import "animate.css/animate.min.css";

import { AnimationOnScroll } from 'react-animation-on-scroll';

//track with GA
import { sendMetrik } from '../../../utils/metrics'


const PlanComponent = (props) => {
    return (
        <div>
            <div className="bg-light spacer feature20">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <AnimationOnScroll animateOnce delay={100} animateIn="animate__backInUp">
                            <span className="label label-success label-rounded">THE GAME PLAN</span>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce delay={200} animateIn="animate__backInUp">
                            <h2 className="title">Your Rebate Incentive Success Plan</h2>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce delay={300} animateIn="animate__backInUp">
                            <h5 className="subtitle">Here are the steps to make your incentive rebate process pain-free</h5>
                            </AnimationOnScroll>
                        </Col>
                    </Row>
                    <Row className="wrap-feature-20">
                        <Col lg="8">
                            <AnimationOnScroll animateOnce animateIn="animate__backInLeft">
                            <Card>
                                <Row>
                                    <Col md="3" className="text-center">
                                        <a href="#" className="text-white linking bg-success-gradiant h-100">STEP 1</a>
                                    </Col>
                                    <Col md="8">
                                        
                                        <CardBody className="d-flex no-block my-auto h-100">
                                            <div className="my-auto">
                                                <h5 className="font-medium">You reach out to us and tell us about your site.</h5>
                                            </div>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card> 
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce delay={500} animateIn="animate__backInLeft">
                            <Card>
                                <Row>
                                    <Col md="3" className="text-center">
                                        <a href="#" className="text-white linking bg-success-gradiant h-100">STEP 2</a>
                                    </Col>
                                    <Col md="8">
                                        <CardBody className="d-flex no-block my-auto h-100">
                                            <div className="my-auto">
                                                <h5 className="font-medium">We analyze your case and design a plan to minimize your costs and maximize rebates.</h5>
                                            </div>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card> 
                            </AnimationOnScroll>
                            <AnimationOnScroll animateOnce delay={750} animateIn="animate__backInLeft">
                            <Card>
                                <Row>
                                    <Col md="3" className="text-center">
                                        <a href="#" className="text-white linking bg-success-gradiant h-100">STEP 3</a>
                                    </Col>
                                    <Col md="8">
                                        <CardBody className="d-flex no-block my-auto h-100">
                                            <div className="my-auto">
                                                <h5 className="font-medium">We take care of the installation and you start saving money.</h5>
                                            </div>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card> 
                            </AnimationOnScroll>
                            <div className="game-plan-cta">
                                <AnimationOnScroll animateOnce delay={1000} animateIn="animate__bounceIn">
                                <AnchorLink 
                                    className="btn btn-info-gradiant btn-md btn-arrow m-t-20" 
                                    href={"#contact-us"} 
                                    onClick={() => { sendMetrik('click', "how-much-can-i-save")}}>
                                <span>HOW MUCH CAN I SAVE? <i className="ti-arrow-right"></i></span>
                                </AnchorLink>
                                </AnimationOnScroll>
                            </div>
                        </Col>
                        <Col lg="4" md="12" className="align-self-center ml-auto">
                            <AnimationOnScroll animateOnce delay={1000} animateIn="animate__backInRight">
                            <img src={banner} alt="We are Digital Agency" className="img-fluid" />
                            </AnimationOnScroll>
                        </Col>    
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default PlanComponent;
