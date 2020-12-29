import React from "react";
import { animated as a, interpolate, OpaqueInterpolation } from "react-spring";
import { Container } from "./style";

type Props = {
  y: OpaqueInterpolation<number>;
  interpolation: (...args: number[]) => any;
  Component: React.ComponentType;
  opacity?: number;
  containerPosition: [number, number];
  forceTransition?: boolean;
};

function Bubble({
  y,
  interpolation,
  Component,
  opacity,
  forceTransition,
  containerPosition: [containerPositionX, containerPositionY],
}: Props) {
  const interpolatedY = interpolate([y], interpolation);
  return (
    <Container
      // testingY={y.getValue()}
      top={containerPositionY}
      left={containerPositionX}
      opacity={opacity ?? 0.1}
      forceTransition={forceTransition}
    >
      <a.div
        style={{
          transform: interpolatedY,
        }}
      >
        <Component />
      </a.div>
    </Container>
  );
}

export default Bubble;
