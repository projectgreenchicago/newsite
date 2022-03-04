/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody, Form } from 'reactstrap';

import banner from '../../../assets/images/form-banners/banner1/banner-img.png';

import img1 from '../../../assets/images/features/feature13/img1.jpg';
import img2 from '../../../assets/images/features/feature13/img2.jpg';
import img3 from '../../../assets/images/features/feature13/img3.jpg';
import img4 from '../../../assets/images/features/feature13/img4.jpg';

const CaseComponent = (props) => {
    return (
        <div>
            <div className="spacer mt-5 bg-light" id="companyNarrative">
            <Container className="mb-5">
                <Row className="justify-content-center mb-4">
                    <h2 className="text-center">Here's how we assisted our recent customer:</h2>
                </Row>
                <Row className="text-center">
                    <Col lg="6" className="text-center mb-3">
                        <h1 className="text-success mb-3">$8,232</h1>
                        <h4>Estimated Annual Electric Cost Savings</h4>
                    </Col>
                    <Col lg="6" className="text-center">
                        <h1 className="text-info mb-3">0.4 years</h1>
                        <h4>Estimated Payback</h4>
                    </Col>
                </Row>
            </Container>
                <Container className="feature30">
                    <Row>
                        <Col lg="8" className="case-img"><img src={props.img} className="rounded img-responsive" alt="wrappixel"/></Col>
                        <Col lg="6" md="7" className="text-center wrap-case-box">
                            <Card className="card-shadow">
                                <CardBody>
                                    <div className="p-20">
                                        <span className="label label-info label-square">{props.caseHeadNote}</span>
                                        <h3 className="title">{props.caseTitle}</h3>
                                        <h4 className="subtitle text-left">Energy-saving improvements </h4>
                                        <ul className="text-left">
                                            <li>Outdoor LED fixtures</li>
                                            <li>Indoor fluorescent replacements</li>
                                            <li>Screw-in LED bulbs</li>
                                        </ul>
                                        <h4 className="subtitle text-left mt-3">Estimated annual energy savings</h4>
                                        <h5 className="subtitle text-left">103,715 kWh</h5>
                                        <h4 className="subtitle text-left mt-3">Total project cost</h4>
                                        <h5 className="subtitle text-left">$ 17,702</h5>
                                        <h4 className="subtitle text-left mt-3">ComEd Energy Efficiency Program incentive</h4>
                                        <h5 className="subtitle text-left">$ 15,356</h5>
                                        <h4 className="subtitle text-left mt-3">Project cost after incentive</h4>
                                        <h5 className="subtitle text-left text-success">$ 2,346</h5>
                                        <p>{props.caseDescription}</p>
                                        <a className="btn btn-info-gradiant btn-md btn-arrow m-t-20" href="#"><span>{props.caseCTA} <i className="ti-arrow-right"></i></span></a>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* <div className="spacer bg-light">
            </div> */}
        </div>
    );
}

export default CaseComponent;
