import React, { useState, useRef } from 'react';
import { Row, Col, Container, FormGroup, Input, Button } from 'reactstrap';
import emailjs from 'emailjs-com';
import ConfettiExplosion from 'react-confetti-explosion';
import logo from '../../assets/images/logos/white-text.png';

//pages
import Header from '../header/header';
import Footer from '../footer/footer';

//track events with GA
import { sendMetrik } from '../../utils/metrics'
import VisibilitySensor from 'react-visibility-sensor';
import GoogleAnalytics from '../../components/google-analytics/GoogleAnalytics';

//animate
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

//signIn
import { signInWithGoogle } from '../../firebase/firebase.utils'



const SignInComponent = (props) => {

    const form = useRef();

  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

    
    return (
        <div>
            <Header view="sign-in" />
            <div className="contact1 p-3" id="contact-us">
                <Row>
                    <Container>
                        <div className="spacer mt-5">
                            <Row className="m-0">
                                    <div className="contact-box p-r-40 mx-auto">
                                        <form ref={form}>
                                        <h4 className="title">Sign In</h4>
                                            <Row>
                                                <Col lg="6">
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
                                                </Col>
                                                <Col lg="6">
                                                    <FormGroup className="m-t-15">
                                                        <Input 
                                                            type="password"
                                                            name="password"
                                                            className="form-control"
                                                            id="password"
                                                            placeholder="enter your password" 
                                                            value={password}
                                                            required
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                <Col lg="12">
                                                    <Button 
                                                        type="submit" 
                                                        className="btn btn-success-gradiant m-t-20 btn-arrow mr-3"
                                                        >
                                                        <span>Sign In <i className="ti-arrow-right"></i></span>
                                                    </Button>
                                                    <Button 
                                                        type="submit" 
                                                        className="btn btn-info-gradiant m-t-20 btn-arrow"
                                                        onClick={signInWithGoogle}
                                                        >
                                                        <span>Sign In With Google <i className="ti-arrow-right"></i></span>
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </form>
                                    </div>
                            </Row>
                        </div>
                    </Container>
                </Row>
            </div>
        </div>
    );
}

export default SignInComponent;
