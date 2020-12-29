import { Pane, PaneProps } from "evergreen-ui";
import styled from "styled-components";

interface Props extends PaneProps {
  top: number;
  left: number;
  forceTransition?: boolean;
}
export const Container = styled(Pane)<Props>`
  position: absolute;
  top: ${(p) => p.top}vh !important;
  left: ${(p) => p.left}vw !important;
  /* overflow: hidden; */

  div {
    overflow: hidden;
    ${(p) => p.forceTransition && "transition: all 0.3s ease-in-out;"}
  }
`;
