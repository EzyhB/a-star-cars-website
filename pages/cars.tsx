import React from "react";
import CarDiscplayCard from "../components/CarDisplayCard";
import { Container } from "../components/styles/Container";
import { GridContainer } from "../components/styles/GridContainer";
import { GridItem } from "../components/styles/GridItem";
import InputField from "../components/styles/InputField";
import { Typography } from "../components/styles/Typography";
import css from "../styles/cars.module.css";

import mockDB from "../mockDB";
import Footer from "../components/Footer";

export default function cars() {
  return (
    <Container maxWidth="xl">
      <div>
        <Typography variant="h4" className={css.carsHeader}>
          We make buying cars easy &#38; simple
        </Typography>
        <Typography className={css.carsSubHeader}>
          At A-Star, you can get your next used car from the comfort of your
          sofa. We own all our cars, so we can guarantee the quality.
        </Typography>
        <InputField />
      </div>
      <Typography variant="h5" className={css.cardTitles}>
        Best Match
      </Typography>

      <GridContainer>
        <GridItem lg="four" md="six" className={css.featureCarImageContainer}>
          <CarDiscplayCard
            carName={mockDB[0].carName}
            carImage={mockDB[0].carImage}
            carSubName={mockDB[0].carSubname}
            miles={mockDB[0].miles}
            reg={mockDB[0].reg}
            trans={mockDB[0].trans}
            fuel={mockDB[0].fuel}
            price={mockDB[0].price}
          ></CarDiscplayCard>
        </GridItem>
        <GridItem lg="four" md="six" className={css.featureCarImageContainer}>
          <CarDiscplayCard
            carName={mockDB[1].carName}
            carImage={mockDB[1].carImage}
            carSubName={mockDB[1].carSubname}
            miles={mockDB[1].miles}
            reg={mockDB[1].reg}
            trans={mockDB[1].trans}
            fuel={mockDB[1].fuel}
            price={mockDB[1].price}
          ></CarDiscplayCard>
        </GridItem>
        <GridItem lg="four" md="six" className={css.featureCarImageContainer}>
          <CarDiscplayCard
            carName={mockDB[2].carName}
            carImage={mockDB[2].carImage}
            carSubName={mockDB[2].carSubname}
            miles={mockDB[2].miles}
            reg={mockDB[2].reg}
            trans={mockDB[2].trans}
            fuel={mockDB[2].fuel}
            price={mockDB[2].price}
          ></CarDiscplayCard>
        </GridItem>
      </GridContainer>

      <Container padding="no" maxWidth="xl" background="primary">
        <Typography variant="h5" className={css.cardTitles}>
          Our Selection
        </Typography>
        <GridContainer>
          {mockDB.map((el, index) => (
            <GridItem
              lg="four"
              md="six"
              className={css.featureCarImageContainer}
              key={index}
            >
              <CarDiscplayCard
                carName={el.carName}
                carImage={el.carImage}
                carSubName={el.carSubname}
                miles={el.miles}
                reg={el.reg}
                trans={el.trans}
                fuel={el.fuel}
                price={el.price}
              ></CarDiscplayCard>
            </GridItem>
          ))}
        </GridContainer>
      </Container>
      <Footer />
    </Container>
  );
}
