import React from "react";

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

import { Redirect } from "react-router";

//assets
import img5 from '../../assets/images/features/feature30/img1.jpg'
import caseImg from '../../assets/images/features/feature30/caseImg.jpg'


const ProjectGreen = () => {
    return (
        <div id="main-wrapper">
            <Header 
                cta="Contact Us"
                ctaLink="https://eeserviceproviders.com/2019-campaigns/out-west/project-green/"
            />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <HeaderBanner2 
                        title="Applying for a rebate can be intimidating"
                        subtitle="We will handle the paperwork for you and ensure seemless installation."
                        cta1="Contact Us"
                        cta2="GET FREE REBATE ASSESSMENT"
                        cta1Link="https://eeserviceproviders.com/2019-campaigns/out-west/project-green/"
                        cta2Link="https://eeserviceproviders.com/2019-campaigns/out-west/project-green/"
                        
                    />
                    {/* <C2aComponent /> */}
                    <PortfolioComponent 
                    />
                    <C2aComponent />
                    <TeamComponent 
                        title="Our Client Base"
                        subtitle="Project Green Environmental Solutions specializes in assisting businesses that find themselves in need of energy efficient updating."
                        style={{backgroundColor: "#e9f3f8"}}

                        clientLink1="http://www.retailbakersofamerica.org/"
                        titleClient1="The Retail Bakers Association"
                        descriptionClient1="The retail bakers association including Roeser’s Bakery, Reuters Bakery  and Creative Cakes to improve lighting quality as well as energy savings"
                        clientLink2=""
                        titleClient2="Honey Can Do International LLC"
                        descriptionClient2="A large warehouse facility, Honey Can Do International LLC, where Project Green redesigned the lighting layout with all new LED lighting."
                        clientLink3="https://honeycando.com/"
                        titleClient3="Voco Tool"
                        descriptionClient3="A small tool manufacturer, Voco Tool, that was in dire need of upgraded lighting to illuminate a dark warehouse"
                        clientLink4=""
                        titleClient4="Merit Partners"
                        descriptionClient4="A 24 hour storage and distribution facility owned by Merit Partners, was upgraded with all new occupancy sensor light fixtures to decrease energy consumption."

                        title2="Client Industries"
                        subtitle2="We have proudly served clients from a wide range of industries, including but not limited to:"

                        titleIndustry1="Healthcare"
                        industryIcon1=<i class="fa fa-solid fa-book-medical industry-icon"></i>
                        titleIndustry2="Hospitality"
                        industryIcon2=<i class="fa fa-regular fa-door-open industry-icon"></i>
                        titleIndustry3="Manufacturing"
                        industryIcon3=<i class="fa fa-duotone fa-industry industry-icon"></i>
                        titleIndustry4="Retail"
                        industryIcon4=<i class="fa fa-solid fa-store industry-icon"></i>
                        titleIndustry5="Restaurants"
                        industryIcon5=<i class="fa fa-solid fa-utensils industry-icon"></i>
                        titleIndustry6="Churches"
                        industryIcon6=<i class="fa fa-solid fa-dove industry-icon"></i>
                        titleIndustry7="Not for profit organizations"
                        industryIcon7=<i class="fa fa-solid fa-church industry-icon"></i>    
                    />
                    <TestimonialComponent /> 
                    <PlanComponent 
                        headNote="THE GAME PLAN"
                        title="Your Rebate Incentive Success Plan"
                        subtitle="Here are the steps to make your incentive rebate process pain-free"

                        step1="You reach out to us and tell us about your site."
                        step2="We analyze your case and design a plan to minimize your costs and maximize rebates."
                        step3="We take care of the installation and you start saving money."

                        gamePlanCTA="HOW MUCH CAN I SAVE?"
                    />
                    <NarrativeComponent
                        img={img5}
                        companyNarrativeHeadNote="Project Green"
                        companyNarrativeTitle="PROJECT GREEN HELPS YOU SAVE MONEY ON ENERGY"
                        companyNarrativeDescription="No matter what your business is, Project Green can help identify ways to reduce your energy usage by performing an energy assessment at no charge to you.  We will then identify what incentives are available to you for the project, many times bringing your return on investment to under a year.  We are full service and facilitate all of the paperwork required to reserve the available money making it as simple to you as just a few signatures.  Let our professional installers help make your energy savings a reality."
                        companyNarrativeCTA="MAXIMIZE ENERGY SAVINGS NOW"
                    />
                    <CaseComponent 
                        img={caseImg}
                        caseHeadNote="Recent Customer"
                        caseTitle="PROJECT OVERVIEW"
                        // caseDescription="No matter what your business is, Project Green can help identify ways to reduce your energy usage by performing an energy assessment at no charge to you.  We will then identify what incentives are available to you for the project, many times bringing your return on investment to under a year.  We are full service and facilitate all of the paperwork required to reserve the available money making it as simple to you as just a few signatures.  Let our professional installers help make your energy savings a reality."
                        caseCTA="MAXIMIZE ENERGY SAVINGS NOW"
                    />
                    <ContactComponent 
                        style={{backgroundColor: "#e9f3f8"}}
                        title="Contact Us"
                        title2="Project Green Environmental Solutions"
                        tel="Phone: (708)366-4733"
                        email="E-mail: info@projectgreenchicago.com"
                        street="1501 Circle Avenue"
                        cityAndState="Forest Park, IL 60130"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
}



export default ProjectGreen;
