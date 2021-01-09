import { Theme } from "@src/styles/styled";
import { precision, unit } from "@src/utils/styleHelpers";
import styled, { ThemedStyledProps } from "styled-components";

export const Container = styled.a<ThemedStyledProps<{}, Theme>>`
  width: ${unit(36)};
  background-color: ${(p) => p.theme.colors.border.default};
  display: flex;
  border-radius: ${unit(1)};
  padding: ${unit(3)} ${unit(4)};
  text-align: center;
  justify-content: center;
  color: ${(p) => p.theme.colors.text.dark};
  font-family: ${(p) => p.theme.typography.fontFamilies.mono};
  text-decoration: none;

  box-shadow: ${precision(2)} ${precision(3)} ${unit(3)}
    ${(p) => p.theme.colors.background.overlay};

  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0.2s;

  :hover {
    transform: translateY(${unit(1.5)});
    padding-bottom: ${unit(6)};

    ::after {
      opacity: 1;
    }
  }
  ::after {
    content: "(Não custa nada)";
    position: absolute;
    bottom: 0;
    padding-bottom: ${unit(1.5)};
    padding-top: ${unit(1)};
    opacity: 0;
    background-color: rgba(0.1, 0.1, 0.1, 0.1);
    width: 100%;
    transition: all 1.2s ease-in 0.1s;
  }
`;
