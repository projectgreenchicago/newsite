import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Container, Row, Col } from 'reactstrap';

const HeaderBanner2 = (props) => {
    return (
        <div className="static-slider-head banner2">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="10" md="6" className="align-self-center text-center">
                        <h1 className="title">{props.title}</h1>
                        <h4 className="subtitle font-light">{props.subtitle}</h4>
                        <a href={props.cta1Link} className="btn btn-outline-light m-r-20 btn-md m-t-30 font-14">{props.cta1}</a>
                        <a href={props.cta2Link} className="btn btn-md m-t-30 btn-info-gradiant font-14">{props.cta2}</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner2;
