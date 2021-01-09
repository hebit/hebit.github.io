import styled from "styled-components";
import { unit, precision } from "@src/utils/styleHelpers";
import { Text, TextOwnProps } from "evergreen-ui";
import { Theme } from "@src/styles/styled";

export const Container = styled.div<{ theme: Theme }>`
  position: relative;
  padding-right: ${unit(1)};
  box-sizing: border-box;
  img {
    border: ${(p) => p.theme.stroke.border};
  }
`;

export const TintText = styled(Text)<{ theme: Theme }>`
  font-family: "M PLUS 1p", sans-serif;
  color: ${(p) => p.theme.colors.text.danger} !important;
  font-weight: 800 !important;
  font-size: ${unit(8)} !important;
  position: absolute;
  right: 0;
  top: 30%;
  z-index: 30;
  writing-mode: vertical-rl;
  text-orientation: upright;
  display: flex;
  height: 120%;
`;
