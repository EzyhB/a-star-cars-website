import styled from "styled-components";

enum ButtonSize {
  "s" = 120,
  "m" = 150,
  "l" = 180,
}

interface Props {
  size: keyof typeof ButtonSize;
}

const ButtonHollow = styled.button<Props>`
  min-width: ${({ size }) => ButtonSize[size]}px;
  min-height: ${({ size }) => ButtonSize[size] / 4}px;
  border: 2px solid ${(props) => props.theme.pallette.secondary};
  background: none;

  &:hover {
    background: ${(props) => props.theme.pallette.secondary};
  }
`;

export default ButtonHollow;
