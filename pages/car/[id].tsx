import React from "react";
import { Container } from "../../components/styles/Container";
import { GridContainer } from "../../components/styles/GridContainer";
import { GridItem } from "../../components/styles/GridItem";

export default function Car() {
  return (
    <Container>
      <Container>
        <GridContainer>
          <GridItem md="seven"></GridItem>
          <GridItem md="five"></GridItem>
        </GridContainer>
      </Container>
    </Container>
  );
}
