import styled from "styled-components";

interface Props {
  reverse?: string;
}

const GridContainer = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  flex-flow: ${(props) =>
      props.reverse ? (props.reverse == "yes" ? "row-reverse" : "row") : "row"}
    wrap;
  width: 100%;
`;

export { GridContainer };
