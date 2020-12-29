import styled from "styled-components";
import { Paragraph as EvergreenParagraph, ParagraphProps } from "evergreen-ui";
import { Theme } from "@src/styles/styled";

export const Paragraph = styled(
  EvergreenParagraph
).attrs((p: ParagraphProps) => ({ ...p, size: 500 }))<{
  theme: Theme;
  size: number;
}>`
  font-family: ${(p) => p.theme.typography.fontFamilies.display} !important;
  color: ${(p) => p.theme.colors.text.default} !important;
  font-size: ${(p) => p.theme.typography.paragraph[p.size].fontSize} !important;
  font-weight: ${(p) =>
    p.theme.typography.paragraph[p.size].fontWeight} !important;
`;
