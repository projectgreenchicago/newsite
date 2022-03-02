/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody, Form } from 'reactstrap';

import banner from '../../../assets/images/form-banners/banner1/banner-img.png';

import img1 from '../../../assets/images/features/feature13/img1.jpg';
import img2 from '../../../assets/images/features/feature13/img2.jpg';
import img3 from '../../../assets/images/features/feature13/img3.jpg';
import img4 from '../../../assets/images/features/feature13/img4.jpg';
import img5 from '../../../assets/images/features/feature30/img1.jpg';

const FeatureComponent = (props) => {
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
                            <a className="btn btn-info-gradiant btn-md btn-arrow m-t-20" href="#"><span>{props.gamePlanCTA} <i className="ti-arrow-right"></i></span></a>

                        </Col>
                        <Col lg="4" md="12" className="align-self-center ml-auto">
                            <img src={banner} alt="We are Digital Agency" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="spacer mb-5" id="companyNarrative">
                <Container className="feature30">
                    <Row>
                        <Col lg="10"><img src={img5} className="rounded img-responsive" alt="wrappixel" /></Col>
                        <Col lg="6" md="7" className="text-center wrap-feature30-box">
                            <Card className="card-shadow">
                                <CardBody>
                                    <div className="p-20">
                                        <span className="label label-success label-rounded">{props.companyNarrativeHeadNote}</span>
                                        <h3 className="title">{props.companyNarrativeTitle}</h3>
                                        <p>{props.companyNarrativeDescription}</p>
                                        <a className="btn btn-success-gradiant btn-md btn-arrow m-t-20" href="#"><span>{props.companyNarrativeCTA} <i className="ti-arrow-right"></i></span></a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default FeatureComponent;
