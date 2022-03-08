import React, { useEffect, useState } from "react";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner2 from "../../components/banner2/banner2.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page
import PlanComponent from "./sections/plancomponent.jsx";
import NarrativeComponent from './sections/narrativecomponent';
import CaseComponent from "./sections/casecomponent.jsx";
import PortfolioComponent from "./sections/portfoliocomponent.jsx";
import TeamComponent from "./sections/teamcomponent.jsx";
import TestimonialComponent from "./sections/testimonialcomponent.jsx";
import C2aComponent from "./sections/c2acomponent.jsx";
import ContactComponent from "./sections/contactcomponent.jsx";
import FormBannerComponent from "./sections/formbannercomponent.jsx";

import LazyLoad from 'react-lazyload';

//track with GA

import GoogleAnalytics from "../../components/google-analytics/GoogleAnalytics.js";
import { sendMetrik } from '../../utils/metrics';
import VisibilitySensor from 'react-visibility-sensor';

//to top button

import ScrollButton from '../../components/scroll-to-top/ScrollButton';

//animation

import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


const ProjectGreen = () => {

        //Tracking states

    const [metrikSentPortfolio, setMetrikSentPortfolio] = useState(false)
    const [metrikSentC2A, setMetrikSentC2A] = useState(false)
    const [metrikSentTeam, setMetrikSentTeam] = useState(false)
    const [metrikSentTestimonial, setMetrikSentTestimonial] = useState(false)
    const [metrikSentPlan, setMetrikSentPlan] = useState(false)
    const [metrikSentNarrative, setMetrikSentNarrative] = useState(false)
    const [metrikSentCase, setMetrikSentCase] = useState(false)
    const [metrikSentContact, setMetrikSentContact] = useState(false)


    return (
        <div id="main-wrapper">
            <Header 
            />
            <div className="page-wrapper"> 
                <div className="container-fluid">
                    <HeaderBanner2 />
                    <VisibilitySensor intervalDelay={5000} onChange={(isVisible) => {
                            if(isVisible && !metrikSentPortfolio){
                            sendMetrik('show', 'SawServices')
                            setMetrikSentPortfolio(true)
                            }
                    }}>
                    <PortfolioComponent />
                    </VisibilitySensor>
                    <VisibilitySensor intervalDelay={5000} partialVisibility onChange={(isVisible) => {
                            if(isVisible && !metrikSentC2A){
                            sendMetrik('show', 'SawCTA')
                            setMetrikSentC2A(true)
                            }
                    }}>
                    <C2aComponent />
                    </VisibilitySensor>
                    <VisibilitySensor intervalDelay={5000} partialVisibility onChange={(isVisible) => {
                            if(isVisible && !metrikSentTeam){
                            sendMetrik('show', 'SawClients')
                            setMetrikSentTeam(true)
                            }
                    }}>
                    <TeamComponent  />
                    </VisibilitySensor>
                    <VisibilitySensor intervalDelay={5000} partialVisibility onChange={(isVisible) => {
                            if(isVisible && !metrikSentTestimonial){
                            sendMetrik('show', 'SawTestimonials')
                            setMetrikSentTestimonial(true)
                            }
                    }}>
                    <TestimonialComponent /> 
                    </VisibilitySensor>
                    
                    <VisibilitySensor intervalDelay={5000} partialVisibility onChange={(isVisible) => {
                            if(isVisible && !metrikSentPlan){
                            sendMetrik('show', 'SawPlan')
                            setMetrikSentPlan(true)
                            }
                    }}>
                    <PlanComponent />
                    </VisibilitySensor> 
                    <VisibilitySensor intervalDelay={5000} partialVisibility onChange={(isVisible) => {
                            if(isVisible && !metrikSentNarrative){
                            sendMetrik('show', 'SawNarrative')
                            setMetrikSentNarrative(true)
                            }
                    }}>
                    <NarrativeComponent />
                    </VisibilitySensor>
                    <VisibilitySensor intervalDelay={5000} partialVisibility onChange={(isVisible) => {
                            if(isVisible && !metrikSentCase){
                            sendMetrik('show', 'SawCase')
                            setMetrikSentCase(true)
                            }
                    }}>
                    <CaseComponent/>
                    </VisibilitySensor>
                    <VisibilitySensor intervalDelay={5000} partialVisibility onChange={(isVisible) => {
                            if(isVisible && !metrikSentContact){
                            sendMetrik('show', 'SawContactForm')
                            setMetrikSentContact(true)
                            }
                    }}>
                    <ContactComponent />
                    </VisibilitySensor>
                    <ScrollButton />
                    <GoogleAnalytics />
                </div>
            </div>
            <Footer />
        </div>
    );
}



export default ProjectGreen;
