import styled from "styled-components";
import { lightTheme } from "../Theme";

enum ButtonSize {
  "s" = "120px",
  "m" = "150px",
  "l" = "180px",
}

interface Props {
  size?: keyof typeof ButtonSize;
}

const ButtonHollow = styled.button<Props>`
  max-width: ${({ size }) => (size ? ButtonSize[size] : ButtonSize["l"])};
  max-height: 57px;
  border: 2px solid ${({ size, theme }) => theme.pallette.secondary};
  background: none;

  &:hover {
    background: ${({ size, theme }) => theme.pallette.secondary};
  }
`;

export default ButtonHollow;
