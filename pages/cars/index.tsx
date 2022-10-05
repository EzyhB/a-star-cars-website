import React from "react";
import CarDiscplayCard from "../../components/CarDisplayCard";
import { Container } from "../../components/styles/Container";
import { GridContainer } from "../../components/styles/GridContainer";
import { GridItem } from "../../components/styles/GridItem";
import InputField from "../../components/styles/InputField";
import { Typography } from "../../components/styles/Typography";
import css from "../../styles/cars.module.css";
import Footer from "../../components/Footer";
import { Car } from "..";
import Head from "next/head";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

interface Propss {
  RecommendedCars: Car[];
  Cars: Car[];
}

export default function Cars({ Cars, RecommendedCars }: Propss) {
  return (
    <Container maxWidth="xl">
      <Head>
        <title>A Star Car Sales All Cars</title>
        <meta
          name="description"
          content="A Star Car Sales is a family owned business that offers vehicles for sale. We have small, affordable cars and large SUVs. We also offer car rentals for longer periods of time."
        />
      </Head>
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
        {RecommendedCars.map((el) => (
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

export const getServerSideProps = async () => {
  const res = await fetch("https://a-star-cars-backend.vercel.app/api/cars");
  const data = await res.json();

  let random = [];
  random = [
    data[getRandomInt(data.length - 1)],
    data[getRandomInt(data.length - 1)],
    data[getRandomInt(data.length - 1)],
  ];

  return {
    props: {
      RecommendedCars: random,
      Cars: data,
    },
  };
};
