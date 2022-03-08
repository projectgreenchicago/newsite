/* eslint-disable */
import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import banner1 from '/Users/abc/Desktop/Jarvis Marketing/Side Projects/Project Green Website/Project Green/src/assets/images/landingpage/banner-bg.jpg'
import banner2 from '/Users/abc/Desktop/Jarvis Marketing/Side Projects/Project Green Website/Project Green/src/assets/images/landingpage/banner-bg2.jpg'

//before and after slider
import 'react-before-after-slider-component/dist/build.css';

const FIRST_IMAGE = {
    imageUrl: 'https://images.unsplash.com/photo-1591418528027-7e854ba7418b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&cover=crop&w=2900&q=80',
};
const SECOND_IMAGE = {
  imageUrl: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&cover=crop&w=2070&q=80'
};
const THIRD_IMAGE = {
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&cover=crop&w=1920&q=80'
};
const FOURTH_IMAGE = {
  imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&cover=crop&w=2094&q=80'
};

//animate
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';



const TeamComponent = (props) => {
    return (
        <div style={{backgroundColor: "#e9f3f8"}}>
            <div className="spacer team2">
                <Container>
                    <Row className="justify-content-center mb-3">
                        <Col md="7" className="text-center">
                            <AnimationOnScroll animateOnce delay={100} animateIn="animate__fadeIn">
                            <h2 className="title mb-3">Our Client Base</h2>
                            <h5 className="text-muted">We specialize in assisting businesses that want to upgrade their lighting and cut energy costs.</h5>
                            </AnimationOnScroll>
                        </Col>
                    </Row>
                    {/* <Row>
                            <Col>
                                <h1 className="text-center">Client #1</h1>
                                <ReactBeforeSliderComponent
                                    firstImage={FIRST_IMAGE}
                                    secondImage={SECOND_IMAGE}
                                />
                            </Col>
                            <Col>
                                <h1 className="text-center">Client #2</h1>
                                <ReactBeforeSliderComponent
                                    firstImage={THIRD_IMAGE}
                                    secondImage={FOURTH_IMAGE}
                                />
                            </Col>
                        </Row> */}
                    <Row className="m-t-30">
                        <Col lg="3" md="6" className="m-b-30">
                            <AnimationOnScroll animateOnce delay={1500} animateIn="animate__fadeInLeftBig">
                            <Row className="no-gutters text-center">
                                <Col md="12" className="pro-pic t1">
                                    <div className="card-img-overlay">
                                        <p style={{color: 'white'}}>The retail bakers association including Roeser’s Bakery, Reuters Bakery and Creative Cakes to improve lighting quality as well as energy savings</p>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <a href="http://www.retailbakersofamerica.org/"><h5 className="title font-medium mb-3">The Retail Bakers Association</h5></a>
                                    </div>
                                </Col>
                            </Row>
                            </AnimationOnScroll>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <AnimationOnScroll animateOnce delay={1125} animateIn="animate__fadeInLeftBig">
                            <Row className="no-gutters text-center">
                                <Col md="12" className="col-md-12 pro-pic t2">
                                    <div className="card-img-overlay">
                                        <p style={{color: 'white'}}>A large warehouse facility, Honey Can Do International LLC, where Project Green redesigned the lighting layout with all new LED lighting.</p>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <a href="https://honeycando.com/"><h5 className="title font-medium mb-3">Honey Can Do International LLC</h5></a>
                                    </div>
                                </Col>
                            </Row>
                            </AnimationOnScroll>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <AnimationOnScroll animateOnce delay={750} animateIn="animate__fadeInLeftBig">
                            <Row className="no-gutters text-center">
                                <Col md="12" className="col-md-12 pro-pic t3">
                                    <div className="card-img-overlay">
                                        <p style={{color: 'white'}}>A small tool manufacturer, Voco Tool, that was in dire need of upgraded lighting to illuminate a dark warehouse</p>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <a href="http://vocotool.com/"><h5 className="title font-medium mb-3">Voco Tool</h5></a>
                                    </div>
                                </Col>
                            </Row>
                            </AnimationOnScroll>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <AnimationOnScroll animateOnce delay={375} animateIn="animate__fadeInLeftBig">
                            <Row className="no-gutters text-center">
                                <Col md="12" className="col-md-12 pro-pic t4">
                                    <div className="card-img-overlay">
                                        <p style={{color: 'white'}}>A small tool manufacturer, Voco Tool, that was in dire need of upgraded lighting to illuminate a dark warehouse</p>
                                    </div>
                                </Col>
                                <Col md="12">
                                    <div className="p-t-10">
                                        <a href="https://www.meritpartners.com/"><h5 className="title font-medium mb-3">Merit Partners</h5></a>
                                    </div>
                                </Col>
                            </Row>
                            </AnimationOnScroll>
                        </Col>
                    </Row>

                    <Row className="justify-content-center mb-4">
                        <Col md="7" className="text-center mb-3">
                            <h2 className="title mb-3">Client Industries</h2>
                            <h5 className="text-muted">We have proudly served clients from a wide range of industries, including but not limited to:</h5>
                        </Col>
                    </Row>

                    <Row className="m-t-3">
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters text-center">
                                <Col md="12">
                                    <div className="p-t-10">
                                        <i class="fa fa-solid fa-book-medical industry-icon"></i>
                                        <h5 className="title font-medium mb-3">Healthcare</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters text-center">
                                <Col md="12">
                                    <div className="p-t-10">
                                        <i class="fa fa-regular fa-door-open industry-icon"></i>
                                        <h5 className="title font-medium mb-3">Hospitality</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters text-center">
                                <Col md="12">
                                    <div className="p-t-10">
                                        <i class="fa fa-duotone fa-industry industry-icon"></i>
                                        <h5 className="title font-medium mb-3">Manufacturing</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="3" md="6" className="m-b-30">
                            <Row className="no-gutters text-center">
                                <Col md="12">
                                    <div className="p-t-10">
                                        <i class="fa fa-solid fa-store industry-icon"></i>
                                        <h5 className="title font-medium mb-3">Retail</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="4" md="6" className="m-b-30">
                            <Row className="no-gutters text-center">
                                <Col md="12">
                                    <div className="p-t-10">
                                        <i class="fa fa-solid fa-utensils industry-icon"></i>
                                        <h5 className="title font-medium mb-3">Restaurants</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="4" md="6" className="m-b-30">
                            <Row className="no-gutters text-center">
                                <Col md="12">
                                    <div className="p-t-10">
                                        <i class="fa fa-solid fa-dove industry-icon"></i>
                                        <h5 className="title font-medium mb-3">Not for profit organizations</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="4" md="6" className="m-b-30">
                            <Row className="no-gutters text-center">
                                <Col md="12">
                                    <div className="p-t-10">
                                        <i class="fa fa-solid fa-church industry-icon"></i>
                                        <h5 className="title font-medium mb-3">Churches</h5>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default TeamComponent;
