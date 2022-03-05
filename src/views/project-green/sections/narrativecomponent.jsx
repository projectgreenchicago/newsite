/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody, Form } from 'reactstrap';

import banner from '../../../assets/images/form-banners/banner1/banner-img.png';


import img5 from '../../../assets/images/features/feature30/img1.jpg'


const NarrativeComponent = (props) => {
    return (
        <div>
            <div className="spacer" id="companyNarrative">
                <Container className="feature30">
                    <Row>
                        <Col lg="10"><img src={img5} className="rounded img-responsive" alt="wrappixel" /></Col>
                        <Col lg="6" md="7" className="text-center wrap-feature30-box">
                            <Card className="card-shadow">
                                <CardBody>
                                    <div className="p-20">
                                        <span className="label label-success label-rounded">Project Green</span>
                                        <h3 className="title">PROJECT GREEN HELPS YOU SAVE MONEY ON ENERGY</h3>
                                        <p>No matter what your business is, Project Green can help identify ways to reduce your energy usage by performing an energy assessment at no charge to you. We will then identify what incentives are available to you for the project, many times bringing your return on investment to under a year. We are full service and facilitate all of the paperwork required to reserve the available money making it as simple to you as just a few signatures. Let our professional installers help make your energy savings a reality.</p>
                                        <a className="btn btn-success-gradiant btn-md btn-arrow m-t-20" href="#"><span>MAXIMIZE ENERGY SAVINGS NOW <i className="ti-arrow-right"></i></span></a>
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

export default NarrativeComponent;
