import React, { useState, useRef } from 'react';
import { Row, Col, Container, FormGroup, Input, Button } from 'reactstrap';
import emailjs from 'emailjs-com';
import ConfettiExplosion from 'react-confetti-explosion';



//animate
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';



const ContactComponent = (props) => {

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1by7v2a', 'template_s0uw88j', form.current, 'SP9Zd4ei-nPm19OWr')
      .then((result) => {
          setName(""); 
          setEmail(""); 
          setMessage("");
          setShow(!show);
      }, (error) => {
          console.log(error.text);
          alert("FAILED...", error);
      });
  };

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [show, setShow] = useState(false);


    
    return (
        <div>
            <div className="contact1" id="contact-us">
                <Row>
                    <Container>
                        <div className="spacer">
                            <Row className="m-0">
                                <Col lg="6" className="d-flex align-items-center justify-content-center">
                                    <div className="contact-box p-r-40">
                                        {show ?
                                        <div>
                                            <div className="d-flex align-items-center justify-content-center">
                                            <ConfettiExplosion />
                                            </div>
                                            <div className="">
                                                <h1 className="text-center text-success">Success!</h1>
                                                <br/>
                                                <h2 className="text-center">Thanks for reaching out!</h2>
                                                <h5 className="text-center text-info">We'll be in touch with you soon.</h5>
                                            </div> 
                                        </div>
                                            :
                                        <form ref={form} onSubmit={sendEmail}>
                                        <h4 className="title">Contact Us</h4>
                                            <Row>
                                                <Col lg="6">
                                                    <AnimationOnScroll animateOnce delay={300} animateIn="animate__lightSpeedInLeft">
                                                    <FormGroup className="m-t-15">
                                                        <Input 
                                                            type="name"
                                                            name="name"
                                                            className="form-control"
                                                            id="name"
                                                            placeholder="enter your name" 
                                                            value={name}
                                                            required
                                                        />
                                                    </FormGroup>
                                                    </AnimationOnScroll>
                                                </Col>
                                                <Col lg="6">
                                                    <AnimationOnScroll animateOnce delay={150} animateIn="animate__lightSpeedInLeft">
                                                    <FormGroup className="m-t-15">
                                                        <Input 
                                                            type="email"
                                                            name="email"
                                                            className="form-control"
                                                            id="email"
                                                            placeholder="enter your email"
                                                            value={email}
                                                            required
                                                         />
                                                    </FormGroup>
                                                    </AnimationOnScroll>
                                                </Col>
                                                <Col lg="12">
                                                    <AnimationOnScroll animateOnce delay={350} animateIn="animate__bounceIn">
                                                    <FormGroup className="m-t-15">
                                                        <Input 
                                                            type="textarea" 
                                                            name="message" 
                                                            placeholder="How can we help you?" 
                                                            id="email_body" 
                                                            className="form-control" 
                                                            value={message}
                                                            required
                                                        />
                                                    </FormGroup>
                                                    </AnimationOnScroll>
                                                </Col>
                                                <Col lg="12">
                                                    <AnimationOnScroll animateOnce delay={400} animateIn="animate__lightSpeedInLeft">
                                                    <Button 
                                                        type="submit" 
                                                        className="btn btn-success-gradiant m-t-20 btn-arrow"
                                                        >
                                                        <span>SUBMIT <i className="ti-arrow-right"></i></span>
                                                    </Button>
                                                    </AnimationOnScroll>
                                                </Col>
                                            </Row>
                                        </form>
                                        }
                                    </div>
                                </Col>
                                <Col lg="6">
                                <AnimationOnScroll animateOnce delay={500} animateIn="animate__fadeInRight">
                                    <div className="detail-box p-40 bg-info">
                                        {/* <img id="contact-form-logo" src={logo} alt="wrapkit"/> */}
                                        <h2 className="text-white">Project Green Environmental Solutions</h2>
                                        <p className="text-white m-t-30 op-8">Phone: (708)366-4733
                                            <br />E-mail: info@projectgreenchicago.com</p>
                                        <p className="text-white op-8">1501 Circle Avenue
                                            <br />Forest Park, IL 60130</p>
                                    </div>
                                </AnimationOnScroll>
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
