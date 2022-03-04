/* eslint-disable */
import React from 'react';
import { Row, Col, Container, Card, CardBody, Form } from 'reactstrap';

import banner from '../../../assets/images/form-banners/banner1/banner-img.png';

import img1 from '../../../assets/images/features/feature13/img1.jpg';
import img2 from '../../../assets/images/features/feature13/img2.jpg';
import img3 from '../../../assets/images/features/feature13/img3.jpg';
import img4 from '../../../assets/images/features/feature13/img4.jpg';

const NarrativeComponent = (props) => {
    return (
        <div>
            <div className="spacer" id="companyNarrative">
                <Container className="feature30">
                    <Row>
                        <Col lg="10"><img src={props.img} className="rounded img-responsive" alt="wrappixel" /></Col>
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

export default NarrativeComponent;
