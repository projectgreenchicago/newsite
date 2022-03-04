/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody, Form } from 'reactstrap';

import banner from '../../../assets/images/form-banners/banner1/banner-img.png';

import img1 from '../../../assets/images/features/feature13/img1.jpg';
import img2 from '../../../assets/images/features/feature13/img2.jpg';
import img3 from '../../../assets/images/features/feature13/img3.jpg';
import img4 from '../../../assets/images/features/feature13/img4.jpg';
import img5 from '../../../assets/images/features/feature30/img1.jpg';

const PlanComponent = (props) => {
    return (
        <div>
            <div className="bg-light spacer feature20 up">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <span className="label label-success label-rounded">{props.headNote}</span>
                            <h2 className="title">{props.title}</h2>
                            <h6 className="subtitle">{props.subtitle}</h6>
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
                                                <h5 className="font-medium">{props.step1}</h5>
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
                                                <h5 className="font-medium">{props.step2}</h5>
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
                                                <h5 className="font-medium">{props.step3}</h5>
                                            </div>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card> 
                            <div className="game-plan-cta">
                                <a className="btn btn-info-gradiant btn-md btn-arrow m-t-20" href="#"><span>{props.gamePlanCTA} <i className="ti-arrow-right"></i></span></a>
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
