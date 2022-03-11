import React, { useState, useRef } from 'react';
import { Row, Col, Container, FormGroup, Input, Button } from 'reactstrap';

//animate
import "animate.css/animate.min.css";

//signIn
import { signInWithGoogle } from '../../firebase/firebase.utils'
import { auth } from '../../firebase/firebase.utils';




const SignInComponent = (props) => {

    const form = useRef();

    const [password, setPassword] = useState();
    const [email, setEmail] = useState();

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleSubmit = async (event) => {
        console.log("submitting...")
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setEmail("")
            setPassword("")
        } catch(error){
            console.error(error)
        } 

        setEmail("");
        setPassword("");
    }

  

    
    return (
            <div className="contact1 p-3" id="contact-us">
                    <Container className="spacer mt-5">
                            <Row className="m-0">
                                    <div className="contact-box p-r-40 mx-auto">
                                        <form ref={form} onSubmit={handleSubmit}>
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
                                                            onChange={handleEmail}
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
                                                            onChange={handlePassword}
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
                    </Container>
            </div>
    );
}

export default SignInComponent;
