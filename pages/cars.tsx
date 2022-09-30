import React, { useEffect, useState } from "react";
import CarDiscplayCard from "../components/CarDisplayCard";
import { Container } from "../components/styles/Container";
import { GridContainer } from "../components/styles/GridContainer";
import { GridItem } from "../components/styles/GridItem";
import InputField from "../components/styles/InputField";
import { Typography } from "../components/styles/Typography";
import css from "../styles/cars.module.css";

import { Car, CarsDefaultState } from ".";

import mockDB from "../tempData/mockDB";
import Footer from "../components/Footer";

export default function Cars() {
  const [Cars, setCars] = useState<Car[]>(CarsDefaultState);

  const [RecommendedCars, setRecommendedCars] =
    useState<Car[]>(CarsDefaultState);

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    const fetchAllCars = async () => {
      const res = await fetch(
        "https://a-star-cars-backend.vercel.app/api/cars"
      );
      const data = await res.json();

      setCars(data);
      let latest = [];
      latest = [
        data[getRandomInt(data.length - 1)],
        data[getRandomInt(data.length - 1)],
        data[getRandomInt(data.length - 1)],
      ];
      setRecommendedCars(latest);
    };
    fetchAllCars();
  }, []);

  return (
    <Container maxWidth="xl">
      <div>
        <Typography variant="h4" className={css.carsHeader} center="yes">
          We make buying cars easy &#38; simple
        </Typography>
        <Typography className={css.carsSubHeader} center="yes">
          At A-Star, you can get your next used car from the comfort of your
          sofa. We own all our cars, so we can guarantee the quality.
        </Typography>
        <InputField />
      </div>
      <Typography variant="h5" className={css.cardTitles} center="yes">
        Best Match
      </Typography>

      <GridContainer>
        {RecommendedCars.map((el, index) => (
          <GridItem
            lg="four"
            md="six"
            className={css.featureCarImageContainer}
            center="yes"
            key={el.id}
          >
            <CarDiscplayCard
              carName={el.name}
              carImage={el.image}
              carSubName={el.sub_name}
              miles={el.miles}
              reg={el.reg}
              trans={el.trans}
              fuel={el.fuel}
              price={el.price}
              carId={el.id}
            ></CarDiscplayCard>
          </GridItem>
        ))}
      </GridContainer>

      <Container padding="no" maxWidth="xl" background="primary">
        <Typography variant="h5" className={css.cardTitles} center="yes">
          Our Selection
        </Typography>
        <GridContainer>
          {Cars.map((el, index) => (
            <GridItem
              lg="four"
              md="six"
              className={css.featureCarImageContainer}
              key={index}
              center="yes"
            >
              <CarDiscplayCard
                carName={el.name}
                carImage={el.image}
                carSubName={el.sub_name}
                miles={el.miles}
                reg={el.reg}
                trans={el.trans}
                fuel={el.fuel}
                price={el.price}
                carId={el.id}
              ></CarDiscplayCard>
            </GridItem>
          ))}
        </GridContainer>
      </Container>
      <Footer />
    </Container>
  );
}
