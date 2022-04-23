/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";

import "../../../assets/scss/collapsible.scss";

import dawgBefore from "../../../assets/images/before-after/before1.png";
import dawgAfter from "../../../assets/images/before-after/after1.png";
import truckBefore from "../../../assets/images/before-after/before2.png";
import truckAfter from "../../../assets/images/before-after/after2.png";
import schoolBefore from "../../../assets/images/before-after/before3.png";
import schoolAfter from "../../../assets/images/before-after/after3.png";

const JsComponents = (props) => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const toggle1 = () => {
    setModal1(!modal1);
  };

  const toggle2 = () => {
    setModal2(!modal2);
  };
};

const BeforeAfterComponent = (props) => {
  return (
    <div id="beforeAfter">
      <div className="m-5" id="services">
        <Container>
          <h1 className="text-center p-3">Customer Sites</h1>
          <div className="before-after pt-3">
            <h2 className="pt-1 pb-1">SuperDawg - Chicago</h2>
            <h5 className="pt-1 pb-1">
              The historic restaurant upgraded its outdoor and indoor lighting
              fixtures to high-efficiency LED bulbs and fixtures, which reduced
              the location’s energy use by over 20% in the first month.
            </h5>
            <Row className="pt-2 pb-2">
              <Col md="6" className="text-center">
                <img
                  src={dawgBefore}
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  className="pt-1 pb-1"
                />
              </Col>
              <Col md="6" className="text-center">
                <img
                  src={dawgAfter}
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  className="pt-1 pb-1"
                />
              </Col>
            </Row>
          </div>
          <div className="before-after pt-5">
            <h2 className="pt-1 pb-1">JLG Trucking Company</h2>
            <h5 className="pt-1 pb-1">
              A mix of 8’ fluorescents, 400 watt, and 1000 watt fixtures taken
              to LED UFO HIghbays
            </h5>
            <Row className="pt-2 pb-2">
              <Col md="6" className="text-center">
                <img
                  src={truckBefore}
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  className="pt-1 pb-1"
                />
              </Col>
              <Col md="6" className="text-center">
                <img
                  src={truckAfter}
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  className="pt-1 pb-1"
                />
              </Col>
            </Row>
          </div>
          <div className="before-after pt-5">
            <h2 className="pt-1 pb-1">Providence Highschool </h2>
            <h5 className="pt-1 pb-1">
              All the classrooms at Providence had the same lighting, 4’ and 8’
              fluorescent fixtures, and were replaced with LED strip fixtures
              that are brighter, nicer looking, and have much lower wattage.
            </h5>
            <Row className="pt-2 pb-2">
              <Col md="6" className="text-center">
                <img
                  src={schoolBefore}
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  className="pt-1 pb-1"
                />
              </Col>
              <Col md="6" className="text-center">
                <img
                  src={schoolAfter}
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  className="pt-1 pb-1"
                />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BeforeAfterComponent;
