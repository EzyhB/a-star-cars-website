import React from "react";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import ButtonHollow from "../../components/styles/ButtonHollow";
import CarSpecs from "../../components/styles/CarSpecs";
import { Container } from "../../components/styles/Container";
import { GridContainer } from "../../components/styles/GridContainer";
import { GridItem } from "../../components/styles/GridItem";
import { Typography } from "../../components/styles/Typography";

import carDB from "../../tempData/carDB";
import { carImageDB } from "../../tempData/carDB";

import css from "./Car.module.css";

export default function Car() {
  const car = carDB[0];
  return (
    <Container>
      <Container padding="no" className={css.topMargin}>
        <GridContainer>
          <GridItem lg="eight" md="seven">
            <Carousel images={carImageDB[0]} />
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
      <Container background="primary" className={css.buyInstructionsContainer}>
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
      <Container padding="no">
        <GridContainer>
          <GridItem md="six" className={css.specsGrid1}>
            <div className={css.carPrice}>
              <Typography>Miles</Typography>
              <Typography variant="body2">{car.miles}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Registration</Typography>
              <Typography variant="body2">{car.reg}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Transmission</Typography>
              <Typography variant="body2">{car.trans}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Seats</Typography>
              <Typography variant="body2">{car.seats}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Fuel</Typography>
              <Typography variant="body2">{car.fuel}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Engine</Typography>
              <Typography variant="body2">{car.engine}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Body Type</Typography>
              <Typography variant="body2">{car.bodyType}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Exterior Colour</Typography>
              <Typography variant="body2">{car.exteriorColour}</Typography>
            </div>
          </GridItem>
          <GridItem md="six" className={css.specsGrid2}>
            <div className={css.carPrice}>
              <Typography>Drive Type</Typography>
              <Typography variant="body2">{car.driveType}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Registration Number</Typography>
              <Typography variant="body2">{car.regNum}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Previous Owners</Typography>
              <Typography variant="body2">{car.previousOwners}</Typography>
            </div>

            <div className={css.carPrice}>
              <Typography>Top Speed</Typography>
              <Typography variant="body2">{car.topSpeed}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Acceleration (0-60)MPH</Typography>
              <Typography variant="body2">
                {car.acceleration} seconds
              </Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Power</Typography>
              <Typography variant="body2">{car.power} bhp</Typography>
            </div>
          </GridItem>
        </GridContainer>
      </Container>
      <Footer />
    </Container>
  );
}
