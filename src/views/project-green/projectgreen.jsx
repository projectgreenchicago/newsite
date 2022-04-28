import React, { useState, useRef } from "react";

// core components
import Header from "../../components/header/header.jsx";
import HeaderBanner3 from "../../components/banner3/banner3.jsx";
import HeaderBanner4 from "../../components/banner4/banner4.jsx";
import Footer from "../../components/footer/footer.jsx";

// sections for this page
import PlanComponent from "./sections/plancomponent.jsx";
import NarrativeComponent from "./sections/narrativecomponent";
import CaseComponent from "./sections/casecomponent.jsx";
import PortfolioComponent from "./sections/portfoliocomponent.jsx";
import TeamComponent from "./sections/teamcomponent.jsx";
import TestimonialComponent from "./sections/testimonialcomponent.jsx";
import ContactComponent from "./sections/contactcomponent.jsx";
import BookAssessment from "./sections/book-assessment.jsx";
import BeforeAfterComponent from "./sections/before-after.component.jsx";
import BlogComponent from "./sections/blogcomponent.jsx";
//track with GA

import GoogleAnalytics from "../../components/google-analytics/GoogleAnalytics.js";
import { sendMetrik } from "../../utils/metrics";
import VisibilitySensor from "react-visibility-sensor";

//to top button

import ScrollButton from "../../components/scroll-to-top/ScrollButton";

//animation

import "animate.css/animate.min.css";

const ProjectGreen = () => {
  //Tracking states

  const [metrikSentPortfolio, setMetrikSentPortfolio] = useState(false);
  const [metrikSentBookAssessment, setMetrikSentBookAssessment] =
    useState(false);
  const [metrikSentTeam, setMetrikSentTeam] = useState(false);
  const [metrikSentTestimonial, setMetrikSentTestimonial] = useState(false);
  const [metrikSentPlan, setMetrikSentPlan] = useState(false);
  const [metrikSentNarrative, setMetrikSentNarrative] = useState(false);
  const [metrikSentCase, setMetrikSentCase] = useState(false);
  const [metrikSentContact, setMetrikSentContact] = useState(false);

  const [banner, setBanner] = useState(false);

  const ref = useRef();

  return (
    <div id="main-wrapper" style={{ backgroundColor: "#fff" }}>
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">
          {/* <HeaderBanner3 /> */}
          <HeaderBanner4 />
          <VisibilitySensor
            intervalDelay={5000}
            onChange={(isVisible) => {
              if (isVisible && !metrikSentPortfolio) {
                sendMetrik("show", "SawServices");
                setMetrikSentPortfolio(true);
              }
            }}
          >
            <PortfolioComponent />
          </VisibilitySensor>
          <VisibilitySensor
            intervalDelay={5000}
            partialVisibility
            onChange={(isVisible) => {
              if (isVisible && !metrikSentBookAssessment) {
                sendMetrik("show", "SawBookAssessment");
                setMetrikSentBookAssessment(true);
              }
            }}
          >
            <BookAssessment />
          </VisibilitySensor>
          <BeforeAfterComponent />
          <VisibilitySensor
            intervalDelay={5000}
            partialVisibility
            onChange={(isVisible) => {
              if (isVisible && !metrikSentTeam) {
                sendMetrik("show", "SawClients");
                setMetrikSentTeam(true);
              }
            }}
          >
            <TeamComponent />
          </VisibilitySensor>
          <VisibilitySensor
            intervalDelay={5000}
            partialVisibility
            onChange={(isVisible) => {
              if (isVisible && !metrikSentTestimonial) {
                sendMetrik("show", "SawTestimonials");
                setMetrikSentTestimonial(true);
              }
            }}
          >
            <TestimonialComponent />
          </VisibilitySensor>

          <VisibilitySensor
            intervalDelay={5000}
            partialVisibility
            onChange={(isVisible) => {
              if (isVisible && !metrikSentPlan) {
                sendMetrik("show", "SawPlan");
                setMetrikSentPlan(true);
              }
            }}
          >
            <PlanComponent />
          </VisibilitySensor>
          <VisibilitySensor
            intervalDelay={5000}
            partialVisibility
            onChange={(isVisible) => {
              if (isVisible && !metrikSentNarrative) {
                sendMetrik("show", "SawNarrative");
                setMetrikSentNarrative(true);
              }
            }}
          >
            <NarrativeComponent />
          </VisibilitySensor>
          <VisibilitySensor
            intervalDelay={5000}
            partialVisibility
            onChange={(isVisible) => {
              if (isVisible && !metrikSentCase) {
                sendMetrik("show", "SawCase");
                setMetrikSentCase(true);
              }
            }}
          >
            <CaseComponent />
          </VisibilitySensor>
          <VisibilitySensor
            intervalDelay={5000}
            partialVisibility
            onChange={(isVisible) => {
              if (isVisible && !metrikSentContact) {
                sendMetrik("show", "SawContactForm");
                setMetrikSentContact(true);
              }
            }}
          >
            <BlogComponent />
          </VisibilitySensor>
          <VisibilitySensor
            intervalDelay={5000}
            partialVisibility
            onChange={(isVisible) => {
              if (isVisible && !metrikSentContact) {
                sendMetrik("show", "SawContactForm");
                setMetrikSentContact(true);
              }
            }}
          >
            <ContactComponent />
          </VisibilitySensor>
          <ScrollButton />
          <GoogleAnalytics />
          <div style={{ marginTop: "auto" }}>
            <Footer
            // currentUser={this.state.currentUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGreen;
