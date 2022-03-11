import React, { useState } from 'react';
import { Row, Col, Container } from 'reactstrap';

//pages
import Header from '../../../components/header/header';
import SignInComponent from '../../../components/sign-in.component/sign-in.component';
import SignUpComponent from '../../../components/sign-up.component/sign-up.component';

//animate
import "animate.css/animate.min.css";

//auth
import { auth } from '../../../firebase/firebase.utils';
import Button from 'reactstrap/lib/Button';
import firestore from '../../../firebase/firebase.utils';



const LoginComponent = (props) => {

    const currentUser = auth.currentUser;

    const [haveAccount, setHaveAccount] = useState(true)

    const handleClick = () => {
        setHaveAccount(!haveAccount);
    }

    
    return (
        <div>
            <Header view="sign-in" />
            {!currentUser 
            ?
            <div>
                <Container className="spacer mt-5 text-center p-b-0">
                {haveAccount ? <h4 className="title">Sign In</h4> : <h4 className="title">Sign Up</h4>}
                {haveAccount ? 
                <div className="d-flex justify-content-center">
                    <p className="subtitle">Don't have an account?</p>&nbsp;<a onClick={handleClick} className="text-info">Sign up!</a>
                </div>
                :
                <div className="d-flex justify-content-center">
                <p className="subtitle">Already have an account?</p>&nbsp;<a onClick={handleClick} className="text-info">Sign in!</a>
                </div>
                }
                </Container>
                {haveAccount 
                ?
                <div>
                    <Row className=" justify-content-center">
                        <Col lg="6">
                        <SignInComponent />
                        </Col>
                    </Row>
                </div>
                :
                <div>
                    <Row className="justify-content-center">
                        <Col lg="6">
                            <SignUpComponent />
                        </Col>
                    </Row>
                </div>
                }
            </div>
            :
            <div>
                <Container className="mt-5 spacer text-center p-b-0">
                    {/* <h4 className="title">Hi}</h4> */}
                    {/* <Button onClick={() => console.log(currentUser)}>
                        User
                    </Button> */}
                    <Button
                        type="submit"
                        className="btn btn-danger-gradiant m-t-20 btn-arrow mr-3"
                        onClick = {() => auth.signOut()}
                    >
                    <span>Sign Out <i className="ti-arrow-right"></i></span>
                    </Button>
                </Container>
            </div>
            }
        </div>
    );
}

export default LoginComponent;
