import styled from "styled-components";
import { lightTheme } from "../Theme";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

interface Props {
  maxWidth?: keyof typeof lightTheme.breakPoints;
  background?: keyof typeof lightTheme.pallette;
}

const Container = styled.div<Props>`
  max-width: ${({ maxWidth, theme }) =>
    maxWidth ? theme.breakPoints[maxWidth] : theme.breakPoints.lg};

  background-color: ${(props) =>
    props.background ? props.theme.pallette[props.background] : "none"};
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export { Container };
