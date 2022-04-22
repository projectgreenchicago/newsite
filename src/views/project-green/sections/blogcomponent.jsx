/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card } from "reactstrap";

import img1 from "../../../assets/images/blog/blog-home/img1.jpg";
import img2 from "../../../assets/images/blog/blog-home/img2.jpg";
import img3 from "../../../assets/images/blog/blog-home/img3.jpg";

import { render } from "react-dom";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const BlogComponent = () => {
  return (
    <div>
      <div className="blog-home2 bg-white pt-5" id="case-study">
        <Container>
          <Row className="justify-content-center">
            <Col md="8" className="text-center">
              <h2 className="title">Case Studies</h2>
              {/* <h6 className="subtitle">
                You can relay on our amazing features list and also our customer
                services will be great experience for you without doubt and in
                no-time
              </h6> */}
            </Col>
          </Row>
          <Row className="m-t-40 justify-content-center">
            <Col lg="4" md="6">
              <Card className="p-3">
                <a
                  href="https://www.chicagotribune.com/suburbs/daily-southtown/ct-sta-nl-historical-church-st-0301-20180302-story.html"
                  target="_blank"
                >
                  <img
                    className="card-img-top"
                    src={img1}
                    alt="wrappixel kit"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                </a>
                <div className="date-pos bg-info-gradiant">
                  <span>Tribune</span>
                </div>
                <h5 className="font-medium m-t-30">
                  <a
                    href="https://www.chicagotribune.com/suburbs/daily-southtown/ct-sta-nl-historical-church-st-0301-20180302-story.html"
                    className="link"
                    target="_blank"
                  >
                    Repurposing 119-year-old New Lenox church is a 'miracle'
                  </a>
                </h5>
                <p className="m-t-20">
                  All around, men were installing new lights, thanks to a "very,
                  very generous donation" from Project Green and Com Ed, which
                  teamed up to replace all 147 light fixtures throughout the
                  building with high quality LED lighting, worth $33,000,
                  according to Lindberg.
                </p>
                <a
                  href="https://www.chicagotribune.com/suburbs/daily-southtown/ct-sta-nl-historical-church-st-0301-20180302-story.html"
                  className="linking text-themecolor m-t-10"
                  target="_blank"
                >
                  Read More <i className="ti-arrow-right"></i>
                </a>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="p-3">
                <a
                  href="https://www.comed.com/WaysToSave/ForYourBusiness/Pages/CaseStudies/CountryRidgeStables.aspx"
                  target="_blank"
                >
                  <img
                    className="card-img-top"
                    src={img2}
                    alt="wrappixel kit"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                </a>
                <div className="date-pos bg-danger-gradiant">
                  <span>ComEd</span>
                </div>
                <h5 className="font-medium m-t-30">
                  <a
                    href="https://www.comed.com/WaysToSave/ForYourBusiness/Pages/CaseStudies/CountryRidgeStables.aspx"
                    className="link"
                    target="_blank"
                  >
                    Country Ridge Stables. A Small Business Project
                  </a>
                </h5>
                <p className="m-t-20">
                  “The horses receive even better care since the crew can see
                  and examine the horses much better. No nicks or cuts are
                  missed”, commented owner and CEO, Ann Marie Santowski.
                </p>
                <a
                  href="https://www.comed.com/WaysToSave/ForYourBusiness/Pages/CaseStudies/CountryRidgeStables.aspx"
                  className="linking text-themecolor m-t-10"
                  target="_blank"
                >
                  Read More <i className="ti-arrow-right"></i>
                </a>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="p-3">
                <a
                  href="https://www.comed.com/WaysToSave/ForYourBusiness/Pages/CaseStudies/SuperdawgVideo.aspx"
                  target="_blank"
                >
                  <img
                    className="card-img-top"
                    src={img3}
                    alt="wrappixel kit"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                </a>
                <div className="date-pos bg-danger-gradiant">
                  <span>ComEd</span>
                </div>
                <h5 className="font-medium m-t-30">
                  <a
                    href="https://www.comed.com/WaysToSave/ForYourBusiness/Pages/CaseStudies/SuperdawgVideo.aspx"
                    className="link"
                    target="_blank"
                  >
                    The historic restaurant upgraded its energy use by over 20%
                    month
                  </a>
                </h5>
                <p className="m-t-20">
                  The project succeeded thanks in part to the Service Provider’s
                  (Project Green) ability to recommend energy efficiency
                  measures that worked for the customer’s specific need.
                </p>
                <a
                  href="https://www.comed.com/WaysToSave/ForYourBusiness/Pages/CaseStudies/SuperdawgVideo.aspx"
                  className="linking text-themecolor m-t-10"
                  target="_blank"
                >
                  Read More <i className="ti-arrow-right"></i>
                </a>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="bg-white">
        <Row className="pt-5 pb-5">
          <Col md="5">
            <h1>Powering Hope House</h1>
            <h5 className="subtitle pt-3">
              Hope House, located in New Lenox, helps veterans with
              post-traumatic stress disorder receive assistance when returning
              to civilian life. The community spent the money on purchasing the
              building. ComEd provided free labor and energy efficiency
              improvements to the building. The savings from the lighting
              improvements is over 75%.
            </h5>
          </Col>
          <Col md="7" className="">
            <div className="p-1 bg-success">
              <LiteYouTubeEmbed id="5v8HxZ1m1Rg" title="Powering Hope House" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogComponent;
