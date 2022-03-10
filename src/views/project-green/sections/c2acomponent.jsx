/* eslint-disable */
import React from 'react';
import { Container } from 'reactstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { sendMetrik } from '../../../utils/metrics';


const C2aComponent = () => {

    return (
        <div>
            <div className="mini-spacer bg-info text-white c2a7">
                <Container>
                    <div className="d-flex">
                        <div className="display-7 align-self-center">Wondering how much you could be saving?</div>
                        <div className="ml-auto m-t-10 m-b-10">
                            <AnchorLink 
                                href={"#contact-us"} 
                                className="btn btn-outline-light btn-md" 
                                onClick={() => { sendMetrik('click', "energy-assessment-report-cta")}
                            }>
                            GET ENERGY ASSESSMENT REPORT
                            </AnchorLink>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default C2aComponent;
