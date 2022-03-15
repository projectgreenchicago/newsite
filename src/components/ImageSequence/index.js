import React, { useRef } from "react";
import ReactDOM from "react-dom";

import Plx from "react-plx";

import "./styles.css";
import { Controller, Scene } from "react-scrollmagic";
import Sequence from "./Sequence";
import PortfolioComponent from "../../views/project-green/sections/portfoliocomponent";

const ImgSequence = () => {
  const ref = useRef();
  return (
    <div className="App">
      <Controller>
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
        >
          <Scene duration="200%" triggerHook="onLeave" pin>
            {(progress) => (
              <div style={{ height: "100vh", position: "relative" }}>
                <Sequence ref={ref} progress={progress} />
              </div>
            )}
          </Scene>
        </Plx>
      </Controller>
    </div>
  );
};

export default ImgSequence;
