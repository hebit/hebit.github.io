import { AnimationContext } from "@src/pages";
import useScrollPosition from "@src/utils/useScrollPositions";
import { Pane } from "evergreen-ui";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { useSpring } from "react-spring";
import Bubble from "./Bubble";
import Bubble1 from "./bubble-1.svg";
import Bubble2 from "./bubble-2.svg";
import Bubble3 from "./bubble-3.svg";
import Bubble4 from "./bubble-4.svg";
import Bubble5 from "./bubble-5.svg";

const invert = (num: number) => -num;

const trans1 = (y: number) => `translate3d(-10vw,${invert(y + 100)}px,0)`;
const trans2 = (y: number) => `translate3d(60vw,${invert(y * 2 - 800)}px,0)`;
const trans3 = (y: number) => `translate3d(4vw,${invert(y * 1.45 - 920)}px,0)`;
const trans4 = (y: number) => `translate3d(64vw,${invert(y / 1.2 - 1100)}px,0)`;
const trans5 = (y: number) =>
  `translate3d(-17vw, ${invert(y * 1.7 - 2600)}px,0)`;

function Bubbles() {
  const scrollPosition = useScrollPosition();

  const [{ y }, set] = useSpring(() => ({ y: 0 }));
  const onScroll = useCallback((pos: number) => set({ y: pos }), []);

  useEffect(() => {
    if (scrollPosition.toFixed(0) !== y.getValue().toFixed(0)) {
      onScroll(scrollPosition);
      console.log("call");
    }
  }, [scrollPosition]);

  const { isHoverProfileImg } = useContext(AnimationContext);

  return (
    <Pane
      top={0}
      left={0}
      position="fixed"
      maxHeight="100vh"
      maxWidth="100vw"
      overflow="hidden"
      width="100vw"
      height="100vh"
      margin={0}
    >
      <Bubble
        y={y}
        forceTransition={isHoverProfileImg}
        interpolation={trans1}
        // containerPosition={[20, -7]}
        containerPosition={[0, 0]}
        Component={(Bubble1 as unknown) as React.ComponentType}
      />
      <Bubble
        y={y}
        forceTransition={isHoverProfileImg}
        interpolation={trans2}
        // containerPosition={[75, 90]}
        containerPosition={[0, 0]}
        Component={(Bubble2 as unknown) as React.ComponentType}
        opacity={0.05}
      />
      <Bubble
        y={y}
        forceTransition={isHoverProfileImg}
        interpolation={trans3}
        // containerPosition={[30, 90]}
        containerPosition={[0, 0]}
        Component={(Bubble3 as unknown) as React.ComponentType}
        // opacity={0.5}
      />
      <Bubble
        y={y}
        forceTransition={isHoverProfileImg}
        interpolation={trans4}
        // containerPosition={[80, 100]}
        containerPosition={[0, 0]}
        Component={(Bubble4 as unknown) as React.ComponentType}
        opacity={0.05}
      />
      <Bubble
        y={y}
        forceTransition={isHoverProfileImg}
        interpolation={trans5}
        containerPosition={[15, 90]}
        Component={(Bubble5 as unknown) as React.ComponentType}
      />
    </Pane>
  );
}

export default Bubbles;
