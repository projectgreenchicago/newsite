import React, { useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Plx from "react-plx";

import "./styles.css";
import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./Sequence";
import PortfolioComponent from "../../views/project-green/sections/portfoliocomponent";
import Goones from "../goones.component/goones.component";

const ImgSequence = () => {
  const ref = useRef();
  return (
    <div className="App">
      {/* <div>
        <Plx
          parallaxData={[
            {
              start: 1500,
              end: 1600,
              properties: [
                {
                  startValue: 1,
                  endValue: 0,
                  property: "opacity",
                },
              ],
            },
          ]}
          style={{
            position: "fixed",
            zIndex: "1",
            margin: "20% 10%",
            opacity: "1",
          }}
        >
          <h1 className="text-light display-4">Your Space</h1>
        </Plx>
        <Plx
          parallaxData={[
            {
              start: 70,
              end: 400,
              properties: [
                {
                  startValue: 0,
                  endValue: 1,
                  property: "opacity",
                },
              ],
            },
            {
              start: 1500,
              end: 1600,
              properties: [
                {
                  startValue: 1,
                  endValue: 0,
                  property: "opacity",
                },
              ],
            },
          ]}
          style={{
            position: "fixed",
            zIndex: "1",
            margin: "18% 32%",
            opacity: "0",
          }}
        >
          <h1 className="text-light font-weight-bold display-2">Can Be</h1>
        </Plx>
        <Plx
          parallaxData={[
            {
              start: 610,
              end: 1500,
              properties: [
                {
                  startValue: 0,
                  endValue: 1,
                  property: "opacity",
                },
              ],
            },
            {
              start: 1500,
              end: 1600,
              properties: [
                {
                  startValue: 1,
                  endValue: 0,
                  property: "opacity",
                },
              ],
            },
          ]}
          style={{
            position: "fixed",
            zIndex: "1",
            margin: "17.5% 55.3%",
            opacity: "0",
          }}
        >
          <h1 className="text-success font-weight-bold display-1">Brighter</h1>
        </Plx>
      </div> */}
      <div id="ImageSequenceHero" className="row align-items-center">
        <div className="col-lg-4">
          <h1 className="text-dark">Your Space</h1>
        </div>
        <div className="col-lg-4">
          <h1 className="text-dark">Can Be</h1>
        </div>
        <div className="col-lg-4">
          <h1 className="text-success">Brighter</h1>
        </div>
      </div>
      <Plx
        parallaxData={[
          {
            start: 600,
            end: 800,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity",
              },
            ],
          },
          {
            start: 810,
            end: 1500,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity",
              },
            ],
          },
        ]}
      >
        <Controller>
          <Scene duration="200%" triggerHook="onLeave" pin>
            {(progress) => (
              <div style={{ height: "100vh", position: "relative" }}>
                <Sequence ref={ref} progress={progress} />
              </div>
            )}
          </Scene>
        </Controller>
      </Plx>
    </div>
  );
};

export default ImgSequence;
