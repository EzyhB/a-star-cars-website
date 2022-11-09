import styled from "styled-components";

const BasicInput = styled.input`
  min-width: 400px;
  min-height: 2rem;
  border-radius: 10px;
  margin: 0.5rem 1rem;

  border-radius: 0px / 0% 0% 0% 0%;
  box-shadow: 2px 2px ${(props) => props.theme.pallette.secondary};
  transition: all 0.4s ease;
  :hover {
    border-radius: 0px / 0% 0% 0% 0%;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.25);
  }
`;
export default BasicInput;
