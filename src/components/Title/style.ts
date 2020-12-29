import styled from "styled-components";
import { Heading } from "evergreen-ui";
import { Theme } from "@src/styles/styled";

const combine = (props: Object & { size?: number }) => ({
  ...props,
  size: props.size ? props.size : 500,
});

export const Title = styled(Heading).attrs(combine)<{
  theme: Theme;
  size: number;
}>`
  font-family: ${(p) => p.theme.typography.fontFamilies.display} !important;
  color: ${(p) => p.theme.typography.headings[p.size].color} !important;
  font-size: ${(p) => p.theme.typography.headings[p.size].fontSize} !important;
  font-weight: ${(p) =>
    p.theme.typography.headings[p.size].fontWeight} !important;
`;
