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
        <Typography variant="h5" center="yes">
          How buying an A-star car works
        </Typography>
        <GridContainer>
          <GridItem lg="three" md="six">
            1
            <Typography variant="h6" center="yes">
              Find your perfect car
            </Typography>
            <Typography center="yes">
              Browse our wide range of high-quality and great value used cars
            </Typography>
          </GridItem>
          <GridItem lg="three" md="six">
            2
            <Typography variant="h6" center="yes">
              Choose how to pay
            </Typography>
            <Typography center="yes">
              You can buy outright or apply for car finance entirely online.
            </Typography>
          </GridItem>
          <GridItem lg="three" md="six">
            3
            <Typography variant="h6" center="yes">
              Delivery or collection
            </Typography>
            <Typography center="yes">
              Home delivery or collection in as little as 72 hours, any day of
              the week.
            </Typography>
          </GridItem>
          <GridItem lg="three" md="six">
            4
            <Typography variant="h6" center="yes">
              7 days to decide
            </Typography>
            <Typography center="yes">
              Enjoy your car for up to 7 days and get a full refund if you
              change your mind.
            </Typography>
          </GridItem>
        </GridContainer>
      </Container>
    </Container>
  );
}
