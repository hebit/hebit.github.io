import { Theme } from "@src/styles/styled";
import { unit } from "@src/utils/styleHelpers";
import { Pane, PaneProps } from "evergreen-ui";
import styled, { ThemedStyledProps } from "styled-components";

const bgContainerColor = {
  light: (p: ThemedStyledProps<ContainerProps, Theme>) =>
    p.theme.colors.text.default,
  dark: (p: ThemedStyledProps<ContainerProps, Theme>) =>
    p.theme.colors.text.dark,
};

interface ContainerProps extends PaneProps {
  bgImg: string;
  bgColor: keyof typeof bgContainerColor;
  name: string;
  hasPreviewLink: boolean;
}

function constrast(
  bgColor: ContainerProps["bgColor"]
): ContainerProps["bgColor"] {
  return bgColor === "dark" ? "light" : "dark";
}

export const Container = styled(Pane)<ContainerProps>`
  background: linear-gradient(
      to bottom,
      ${(p) => bgContainerColor[p.bgColor](p)}99,
      ${(p) => bgContainerColor[p.bgColor](p)}00,
      ${(p) => bgContainerColor[p.bgColor](p)}99
    )
    ${(p) => p.bgImg && `,url("${p.bgImg}")`};
  display: flex;
  background-size: cover;
  position: relative;
  overflow-y: hidden;
  width: ${unit(60)};
  min-height: ${unit(36)};
  margin: 0 ${unit(4)};
  flex-shrink: 0;
  border-radius: 2px;
  box-shadow: 1px 2px 12px rgba(0, 0, 0, 0.3);

  :hover {
    box-shadow: 1px 2px 18px rgba(0, 0, 0, 0.3);

    .bottom-bar {
      ${(p) => p.hasPreviewLink && "transform: translateY(0)"};
    }
  }
  &:first-child {
    margin-left: 0;
  }

  .bottom-bar {
    position: absolute;
    height: ${unit(10)};
    width: 90%;
    left: 5%;
    border: ${unit(1)} solid #101010;
    bottom: 5%;
    display: flex;
    align-items: center;
    background-color: #161616;
    transform: translateY(${unit(12)});
    transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);

    a {
      margin: 0 ${unit(2)};
      color: ${(p) => p.theme.colors.text.default};
    }

    ::before {
      content: "${(p) => p.name}";
      position: absolute;
      top: -1.8em;
      font-family: ${(p) => p.theme.typography.fontFamilies.display};
      font-size: ${(p) => p.theme.typography.paragraph[500].fontSize};
      color: ${(p) => bgContainerColor[constrast(p.bgColor)](p)};
      text-align: right;
      width: 100%;
    }
  }
`;
