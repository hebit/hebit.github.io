import { unit } from "@src/utils/styleHelpers";
import { Pane } from "evergreen-ui";
import styled from "styled-components";

export const Container = styled(Pane)`
  background-color: #161616;
  // TODO: add the background-color to theme!
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: ${unit(60)};
  min-height: ${unit(36)};
  margin: 0 ${unit(4)};
  flex-shrink: 0;
  border: #101010 solid ${unit(1)};
  // TODO: add the border-color to theme!

  &:first-child {
    margin-left: 0;
  }

  .text-container {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      display: block;
      margin-top: ${unit(1)};
      cursor: default;
    }
  }

  .bottom-bar {
    background-color: ${(p) => p.theme.colors.text.default};
    height: 0;
    overflow: hidden;
    min-height: 0;
    transition: min-height 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    a,
    span {
      color: #101010 !important;
    }
  }

  &:hover {
    .bottom-bar {
      min-height: ${unit(10)};
    }
  }
`;
