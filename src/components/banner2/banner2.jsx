import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';

const HeaderBanner2 = (props) => {
    return (
        <div className="static-slider-head banner2" id="hero">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="10" md="6" className="align-self-center text-center">
                        <h1 className="title" style={{textShadow: '0px 0px 10px #333333'}}>Applying for a rebate can be overwhelming</h1>
                        <h4 className="subtitle font-light">We will handle the paperwork for you and ensure seemless installation.</h4>
                        <a href="https://eeserviceproviders.com/2019-campaigns/out-west/project-green/" className="btn btn-outline-light m-r-20 btn-md m-t-30 font-14">Contact Us</a>
                        <a href="https://eeserviceproviders.com/2019-campaigns/out-west/project-green/" className="btn btn-md m-t-30 btn-info-gradiant font-14">GET FREE REBATE ASSESSMENT</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner2;