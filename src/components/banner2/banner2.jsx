import React, {useEffect} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';

import AnchorLink from 'react-anchor-link-smooth-scroll';

//GA tracking
import GoogleAnalytics from "../google-analytics/GoogleAnalytics";
import { sendMetrik } from '../../utils/metrics';
import ReactGA from 'react-ga'

//animation
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';



const HeaderBanner2 = (props) => {


    useEffect(() => {
        ReactGA.initialize('G-RGJPW12CWC');
        ReactGA.pageview(window.location.pathname + window.location.search);
    });

    return (
        <div className="static-slider-head" id="hero">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="12" md="6" className="align-self-center text-center">
                        <AnimationOnScroll animateOnce delay={100} animateIn="animate__fadeIn">
                        <h1 className="title" style={{textShadow: '0px 0px 10px #333333'}}>Applying for a rebate can be overwhelming.</h1>
                        </AnimationOnScroll>
                        <h4 className="subtitle font-light">We will handle the paperwork for you and ensure seemless installation.</h4>
                        <AnchorLink href={"#contact-us"} className="btn btn-outline-light m-r-20 btn-md m-t-30 font-14"
                            onClick={() => {sendMetrik('click', 'contact-us-button-banner')}}>
                                Contact Us
                                </AnchorLink>
                        <AnchorLink href={"#contact-us"} className="btn btn-md m-t-30 btn-info-gradiant font-14"
                            onClick={() => {sendMetrik('click', 'rebate-assessment-button-banner')}}
                        >
                        GET FREE ENERGY ASSESSMENT
                        </AnchorLink>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner2;
