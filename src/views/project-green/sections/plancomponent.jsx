/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody, Form } from 'reactstrap';

import banner from '../../../assets/images/form-banners/banner1/banner-img.png';

const PlanComponent = (props) => {
    return (
        <div>
            <div className="bg-light spacer feature20">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <span className="label label-success label-rounded">THE GAME PLAN</span>
                            <h2 className="title">Your Rebate Incentive Success Plan</h2>
                            <h5 className="subtitle">Here are the steps to make your incentive rebate process pain-free</h5>
                        </Col>
                    </Row>
                    <Row className="wrap-feature-20">
                        <Col lg="8">
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
                            <div className="game-plan-cta">
                                <a className="btn btn-info-gradiant btn-md btn-arrow m-t-20" href="#"><span>HOW MUCH CAN I SAVE? <i className="ti-arrow-right"></i></span></a>
                            </div>
                        </Col>
                        <Col lg="4" md="12" className="align-self-center ml-auto">
                            <img src={banner} alt="We are Digital Agency" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default PlanComponent;
