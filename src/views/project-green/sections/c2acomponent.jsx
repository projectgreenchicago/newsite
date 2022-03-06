/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';

import AnchorLink from 'react-anchor-link-smooth-scroll';



import img1 from '../../../assets/images/features/feature48/app-store.png';
import img2 from '../../../assets/images/features/feature48/play-store.png';

const C2aComponent = () => {
    return (
        <div>
            <div className="mini-spacer bg-info text-white c2a7">
                <Container>
                    <div className="d-flex">
                        <div className="display-7 align-self-center">Wondering how much you could be saving?</div>
                        <div className="ml-auto m-t-10 m-b-10"><AnchorLink href={"#contact-us"} className="btn btn-outline-light btn-md">GET ENERGY ASSESSMENT REPORT</AnchorLink></div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default C2aComponent;
