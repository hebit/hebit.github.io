import styled from "styled-components";
import { unit, precision } from "@src/utils/styleHelpers";
import theme from "@src/styles/theme";

export const Divider = styled.hr<{ compact?: boolean }>`
  margin: 0;
  padding: 0;
  border: 0;
  background: repeating-linear-gradient(
    -45deg,
    ${theme.colors.border.default} ${precision(1)},
    ${theme.colors.border.default} ${precision(4)},
    #33333300 ${precision(4)},
    #33333300 ${precision(7)}
  );
  width: 100%;
  border: ${precision(3)} solid ${theme.colors.border.default};
  border-left-width: 0;
  border-right-width: 0;
  margin: ${(p) => (p.compact ? unit(2) : unit(3))} 0;
  min-height: ${(p) => (p.compact ? unit(2) : unit(4))};
`;
