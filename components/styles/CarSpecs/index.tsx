import styled from "styled-components";

import React from "react";
import { Typography } from "../Typography";

const SpecBody = styled.div`
  display: inline-flex;
  background-color: ${(props) => props.theme.pallette.primary};
  border-radius: 5px;
  padding: 2px 6px;
  margin: 5px 5px 5px 0;
`;

interface Props {
  miles?: string;
  reg?: number;
  trans?: string;
  fuel?: string;
}

export default function CarSpecs({ miles, reg, trans, fuel }: Props) {
  return (
    <SpecBody>
      {miles && <Typography>{miles} Miles</Typography>}
      {reg && <Typography>{reg} Reg</Typography>}
      {trans && <Typography>{trans}</Typography>}
      {fuel && <Typography>{fuel}</Typography>}
    </SpecBody>
  );
}
