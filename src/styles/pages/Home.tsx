import { unit } from "@src/utils/styleHelpers";
import { Pane } from "evergreen-ui";
import React from "react";

import styled from "styled-components";
import theme from "../theme";

export const Container = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr 960px 1fr;
  grid-template-areas: "... content ...";

  @media screen and (max-width: 960px) {
    grid-template-columns: 0 1fr 0;
  }
`;

export const ContentContainer = styled.div`
  border: 0.3rem solid ${theme.colors.border.default};
  border-top-width: 0;
  border-bottom-width: 0;
  position: relative;
  grid-area: content;
  min-height: 100vh;
  z-index: 300;

  ul,
  li {
    color: ${theme.colors.text.default};
  }
`;

export const ShadowBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0.8rem;
  top: 0.8rem;

  background: repeating-linear-gradient(
    -45deg,
    ${theme.colors.border.default} 0.1rem,
    ${theme.colors.border.default} 0.4rem,
    ${theme.colors.border.default}00 0.4rem,
    ${theme.colors.border.default}00 0.7rem
  );
  z-index: -1;
  border: 0.3rem solid ${theme.colors.border.default};
  transition: transform 0.3s ease-in-out;
`;

type WithShadowProps = {
  children: React.ReactNode;
  Component: React.ComponentType;
  background?: string;
  style?: string;
};

//TODO: transformar isso num component like "BoxWithShadow"
export function WithShadow({
  children,
  Component,
  style,
}: // background = theme.palette.base,
WithShadowProps) {
  const Container = styled.div`
    position: relative;
    margin: 8px;
    ${style && style};
  `;
  return (
    <Container>
      <Component>{children}</Component>
      <ShadowBox className="ShadowBox" />
    </Container>
  );
}

export const MainPaneContainer = styled(Pane).attrs({
  minHeight: 480,
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  paddingX: unit(12),
  paddingTop: unit(20),
})`
  @media screen and (max-width: 670px) {
    flex-direction: column;
    padding-left: ${unit(4)} !important;
    padding-right: ${unit(4)} !important;

    & > div {
      padding: 0 ${unit(4)};
      padding-left: ${unit(4)};
    }
    & > div:first-child {
      justify-content: flex-start;
      /* padding: 0 ${unit(4)}; */
      /* padding-left: ${unit(12)}; */
    }
  }
`;

export const ActivitiesContainer = styled(Pane)`
  ul {
    display: flex;
    @media screen and (max-width: 670px) {
      flex-direction: column;
      div {
        width: 100% !important;
      }
    }
  }
`;
