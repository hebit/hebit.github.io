import styled from "styled-components";
import { Theme } from "@src/styles/styled";
import { unit } from "@src/utils/styleHelpers";

export const StyleContainer = styled.div<{ theme: Theme }>`
  * {
    margin: 4px 0;
  }
  p,
  li,
  h5 {
    color: ${(p) => p.theme.colors.text.default} !important;
    font-family: ${(p) => p.theme.typography.fontFamilies.display};
    font-size: ${(p) => p.theme.typography.text[500].fontSize};
  }
  a {
    font-weight: 600;
    color: ${(p) => p.theme.palette.red.base};
    :visited {
      color: ${(p) => p.theme.palette.red.base};
    }
  }
  ul {
    padding-left: ${unit(4)};
  }
  hr {
    border-color: ${(p) => p.theme.colors.text.default};
    opacity: 0.7;
    margin: ${unit(3)} 0;
  }
  margin-bottom: ${unit(4)};
`;
