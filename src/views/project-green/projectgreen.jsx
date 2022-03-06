import React, { useState } from "react";

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


//to top button

import ScrollButton from '../../components/scroll-to-top/ScrollButton';



const ProjectGreen = () => {
    return (
        <div id="main-wrapper">
            <Header 
            />
            <div className="page-wrapper">
                
                <div className="container-fluid">
                    <HeaderBanner2 />
                    <PortfolioComponent />
                    <C2aComponent />
                    <TeamComponent  />
                    <TestimonialComponent /> 
                    <PlanComponent />
                    <NarrativeComponent />
                    <CaseComponent />
                    <ContactComponent />
                    <ScrollButton />
                </div>
            </div>
            <Footer />
        </div>
    );
}



export default ProjectGreen;
