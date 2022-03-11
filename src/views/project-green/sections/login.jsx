import React from 'react';
import { Row, Col } from 'reactstrap';

//pages
import Header from '../../../components/header/header';
import SignInComponent from '../../../components/sign-in.component/sign-in.component';
import SignUpComponent from '../../../components/sign-up.component/sign-up.component';

//animate
import "animate.css/animate.min.css";



const LoginComponent = (props) => {

    
    return (
        <div>
        <Header view="sign-in" />
        <Row className="p-5 justify-content-center">
            <Col lg="6">
            <SignInComponent />
            </Col>
            <Col lg="6">
            <SignUpComponent />
            </Col>
        </Row>
        </div>
    );
}

export default LoginComponent;
