import styled from "styled-components";

const RoundNumbersBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const RoundNumber = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 1px solid ${(props) => props.theme.pallette.secondary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  number: number;
}

export default function RoundNumbers({ number }: Props) {
  return (
    <RoundNumbersBody>
      <RoundNumber>{number}</RoundNumber>
    </RoundNumbersBody>
  );
}
