import React from 'react';
import { Row, Col, Container, Form, FormGroup, Input, Button } from 'reactstrap';

const ContactComponent = (props) => {
    return (
        <div>
            <div className="contact1" style={props.style}>
                <Row>
                    <Container>
                        <div className="spacer">
                            <Row className="m-0">
                                <Col lg="6">
                                    <div className="contact-box p-r-40">
                                        <h4 className="title">Contact Us</h4>
                                        <Form>
                                            <Row>
                                                <Col lg="6">
                                                    <FormGroup className="m-t-15">
                                                        <Input type="text" placeholder="name" />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="6">
                                                    <FormGroup className="m-t-15">
                                                        <Input type="text" placeholder="email" />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="12">
                                                    <FormGroup className="m-t-15">
                                                        <Input type="textarea" name="text" placeholder="message" />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="12">
                                                    <Button type="submit" className="btn btn-success-gradiant m-t-20 btn-arrow"><span>SUBMIT <i className="ti-arrow-right"></i></span></Button>
                                                </Col>
                                            </Row>
                                        </Form>
                                    </div>
                                </Col>
                                <Col lg="6">
                                    <div className="detail-box p-40 bg-info">
                                        <h2 className="text-white">Project Green Environmental Solutions</h2>
                                        <p className="text-white m-t-30 op-8">Phone: (708)366-4733
                                            <br />E-mail: info@projectgreenchicago.com</p>
                                        <p className="text-white op-8">1501 Circle Avenue
                                            <br />Forest Park, IL 60130</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </Row>
            </div>
        </div>
    );
}

export default ContactComponent;