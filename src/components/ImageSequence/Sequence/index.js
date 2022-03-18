import React, { forwardRef, useState, useEffect } from "react";
import { Skeleton } from "../Skeleton";
import ImageArray from "./ImageArray";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { sendMetrik } from "../../../utils/metrics";

import { Container, Row, Col, Card, CardBody } from "reactstrap";
import Plx from "react-plx";

const ImageSequence = forwardRef(({ progress }, ref) => {
  const newImages = ImageArray();

  const [state, setState] = useState({ x: 0, y: 70 });
  const cost = 29950;
  const newCost = (cost - cost * (((70 + -state.y) * -1) / 100)).toFixed(0);
  const savings = cost - newCost;

  let index = Math.round(progress * 1 * (newImages.length - 1));

  if (newImages[index][1] !== undefined) {
    if (newImages[index][1] === "loading") {
      return <Skeleton width="100%" height="100%" />;
    } else {
      return newImages.map((item, i) => (
        <div
          ref={ref}
          key={i}
          style={{
            display: i !== index ? "none" : "block",
            height: "100%",
            width: "100%",
            backgroundImage: `url('${item[0] ? item[0].src : null}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ));
    }
  }
});

export default ImageSequence;
