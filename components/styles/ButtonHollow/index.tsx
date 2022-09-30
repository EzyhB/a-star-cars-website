import styled from "styled-components";

enum ButtonSize {
  "s" = 100,
  "m" = 120,
  "l" = 150,
  "xl" = 180,
}

interface Props {
  size?: keyof typeof ButtonSize;
}

const ButtonHollow = styled.button<Props>`
  min-width: ${({ size }) => (size ? ButtonSize[size] : ButtonSize["l"])}px;
  min-height: ${({ size }) =>
    size ? ButtonSize[size] / 4 : ButtonSize["l"] / 4}px;
  border: 2px solid ${(props) => props.theme.pallette.secondary};
  border-radius: 0.6rem;
  background: none;
  display: block;

  &:hover {
    background: ${(props) => props.theme.pallette.secondary};
    cursor: pointer;
  }
`;

export default ButtonHollow;
