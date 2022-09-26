import React from "react";
import ButtonHollow from "../../components/styles/ButtonHollow";
import CarSpecs from "../../components/styles/CarSpecs";
import { Container } from "../../components/styles/Container";
import { GridContainer } from "../../components/styles/GridContainer";
import { GridItem } from "../../components/styles/GridItem";
import { Typography } from "../../components/styles/Typography";

import carDB from "../../tempData/carDB";

import css from "./Car.module.css";

export default function Car() {
  const car = carDB[0];
  return (
    <Container>
      <Container>
        <GridContainer>
          <GridItem lg="eight" md="seven">
            hello
          </GridItem>
          <GridItem lg="four" md="five" className={css.carPaymentInfoGrid}>
            <div className={css.carPaymentInfoCard}>
              <Typography variant="h6">{car.name}</Typography>
              <Typography>{car.subName}</Typography>
              <div className={css.shortSpecs}>
                <CarSpecs miles={car.miles} />
                <CarSpecs reg={car.reg} />
                <CarSpecs trans={car.trans} />
                <CarSpecs fuel={car.fuel} />
              </div>
              <Container
                className={css.carPaymentActionCard}
                background="primary"
              >
                <div className={css.carPrice}>
                  <Typography variant="h6">
                    {car.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "GBP",
                    })}
                  </Typography>
                  <Typography>
                    {((car.price / 100) * 1.7).toLocaleString("en-US", {
                      style: "currency",
                      currency: "GBP",
                    })}
                    /monthly
                  </Typography>
                </div>
                <Typography variant="h6">Plus £14.99 admin fees</Typography>
                <div className={css.actionButton}>
                  <ButtonHollow size="xl">Contact us</ButtonHollow>
                </div>
              </Container>
            </div>
          </GridItem>
        </GridContainer>
      </Container>
      <Container>
        <Typography>How buying an A-star car works</Typography>
        <GridContainer>
          <GridItem lg="three" md="six">
            1
          </GridItem>
          <GridItem lg="three" md="six">
            2
          </GridItem>
          <GridItem lg="three" md="six">
            3
          </GridItem>
          <GridItem lg="three" md="six">
            4
          </GridItem>
        </GridContainer>
      </Container>
    </Container>
  );
}
