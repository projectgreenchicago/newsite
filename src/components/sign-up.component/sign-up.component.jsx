import React, { useState, useRef } from 'react';
import { Row, Col, Container, FormGroup, Input, Button } from 'reactstrap';

//animate
import "animate.css/animate.min.css";

//signUn
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';



    const SignUpComponent = (props) => {

    const form = useRef();
    
    const [displayName, setDisplayName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const handleDisplayName = (event) => {
        setDisplayName(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }

    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email, 
                password
            );

            await createUserProfileDocument(user, { displayName });

            setDisplayName("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
            
        } catch(error) {
            console.error(error)
        }
    }

    
    return (
            <div className="contact1 p-3" id="contact-us">
                    <Container>
                            <Row className="m-0 spacer mt-5">
                                    <div className="contact-box p-r-40 mx-auto">
                                        <form ref={form} onSubmit={handleSubmit}>
                                        <h4 className="title">Sign Up</h4>
                                            <Row>
                                                <Col lg="6">
                                                    <FormGroup className="m-t-15">
                                                        <Input 
                                                            type="text"
                                                            name="displayName"
                                                            className="form-control"
                                                            id="displayName"
                                                            placeholder="enter your name"
                                                            onChange={handleDisplayName}
                                                            value={displayName}
                                                            required
                                                         />
                                                    </FormGroup>
                                                </Col>
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
                                                </Row>
                                                <Row>
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
                                                <Col lg="6">
                                                    <FormGroup className="m-t-15">
                                                        <Input 
                                                            type="password"
                                                            name="password"
                                                            className="form-control"
                                                            id="password"
                                                            placeholder="confirm your password" 
                                                            onChange={handleConfirmPassword}
                                                            value={confirmPassword}
                                                            required
                                                        />
                                                    </FormGroup>
                                                </Col>
                                                </Row>
                                                <Row>
                                                <Col lg="12">
                                                    <Button 
                                                        type="submit" 
                                                        className="btn btn-danger-gradiant m-t-20 btn-arrow mr-3"
                                                        >
                                                        <span>Sign Up <i className="ti-arrow-right"></i></span>
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

export default SignUpComponent;
