/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';


const TeamComponent = (props) => {
    return (
        <div style={props.style}>
            <div className="spacer team2">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="9" className="text-center">
                            <h2 className="title mb-3">{props.title}</h2>
                            <h5 className="text-muted">{props.subtitle}</h5>
                        </Col>
                    </Row>
                    <Row className="m-t-30">
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters text-center">
                                <Col md="12" className="pro-pic t1">
                                    <div className="card-img-overlay">
                                        <p style={{color: 'white'}}>{props.descriptionClient1}</p>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <a href={props.clientLink1}><h5 className="title font-medium mb-3">{props.titleClient1}</h5></a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters text-center">
                                <Col md="12" className="col-md-12 pro-pic t2">
                                    <div className="card-img-overlay">
                                        <p style={{color: 'white'}}>{props.descriptionClient2}</p>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <a href={props.clientLink2}><h5 className="title font-medium mb-3">{props.titleClient2}</h5></a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters text-center">
                                <Col md="12" className="col-md-12 pro-pic t3">
                                    <div className="card-img-overlay">
                                        <p style={{color: 'white'}}>{props.descriptionClient3}</p>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <a href={props.clientLink3}><h5 className="title font-medium mb-3">{props.titleClient3}</h5></a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters text-center">
                                <Col md="12" className="col-md-12 pro-pic t4">
                                    <div className="card-img-overlay">
                                        <p style={{color: 'white'}}>{props.descriptionClient4}</p>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <a href={props.clientLink4}><h5 className="title font-medium mb-3">{props.titleClient4}</h5></a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className="justify-content-center mb-4">
                        <Col md="7" className="text-center">
                            <h2 className="title">{props.title2}</h2>
                            <h6 className="subtitle">{props.subtitle2}</h6>
                        </Col>
                    </Row>

                    <Row className="m-t-3">
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters text-center">
                                <Col md="12">
                                    <div className="p-t-10">
                                        {props.industryIcon1}
                                        <h5 className="title font-medium mb-3">{props.titleIndustry1}</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters text-center">
                                <Col md="12">
                                    <div className="p-t-10">
                                        {props.industryIcon2}
                                        <h5 className="title font-medium mb-3">{props.titleIndustry2}</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters text-center">
                                <Col md="12">
                                    <div className="p-t-10">
                                        {props.industryIcon3}
                                        <h5 className="title font-medium mb-3">{props.titleIndustry3}</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters text-center">
                                <Col md="12">
                                    <div className="p-t-10">
                                        {props.industryIcon4}
                                        <h5 className="title font-medium mb-3">{props.titleIndustry4}</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="4" md="6" className="m-b-30">
                            <Row className="no-gutters text-center">
                                <Col md="12">
                                    <div className="p-t-10">
                                        {props.industryIcon5}
                                        <h5 className="title font-medium mb-3">{props.titleIndustry5}</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="4" md="6" className="m-b-30">
                            <Row className="no-gutters text-center">
                                <Col md="12">
                                    <div className="p-t-10">
                                        {props.industryIcon6}
                                        <h5 className="title font-medium mb-3">{props.titleIndustry7}</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="4" md="6" className="m-b-30">
                            <Row className="no-gutters text-center">
                                <Col md="12">
                                    <div className="p-t-10">
                                        {props.industryIcon7}
                                        <h5 className="title font-medium mb-3">{props.titleIndustry6}</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default TeamComponent;
