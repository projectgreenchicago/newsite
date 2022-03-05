import React from 'react';
import { Row, Col, Container, Form, FormGroup, Input, Button } from 'reactstrap';

import emailjs from 'emailjs-com';
import { useRef } from 'react';

const ContactComponent = (props) => {

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1by7v2a', 'template_s0uw88j', form.current, 'SP9Zd4ei-nPm19OWr')
      .then((result) => {
          console.log(result.text);
          alert("SUCCESS!");
      }, (error) => {
          console.log(error.text);
          alert("FAILED...", error);
      });
  };
    
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
                                        <form ref={form} onSubmit={sendEmail}>
                                            <Row>
                                                <Col lg="6">
                                                    <FormGroup className="m-t-15">
                                                        <Input 
                                                            type="name"
                                                            name="name"
                                                            className="form-control"
                                                            id="name"
                                                            placeholder="enter your name" 
                                                            requred
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="6">
                                                    <FormGroup className="m-t-15">
                                                        <Input 
                                                            type="email"
                                                            name="email"
                                                            className="form-control"
                                                            id="email"
                                                            placeholder="enter your email"
                                                            required
                                                         />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="12">
                                                    <FormGroup className="m-t-15">
                                                        <Input 
                                                            type="textarea" 
                                                            name="message" 
                                                            placeholder="message" 
                                                            id="email_body" 
                                                            className="form-control" 
                                                            required
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="12">
                                                    <Button type="submit" className="btn btn-success-gradiant m-t-20 btn-arrow"><span>SUBMIT <i className="ti-arrow-right"></i></span></Button>
                                                </Col>
                                            </Row>
                                        </form>
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
