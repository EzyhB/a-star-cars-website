import React, { useEffect, useState } from "react";
import CarDiscplayCard from "../../components/CarDisplayCard";
import { Container } from "../../components/styles/Container";
import { GridContainer } from "../../components/styles/GridContainer";
import { GridItem } from "../../components/styles/GridItem";
import InputField from "../../components/styles/InputField";
import { Typography } from "../../components/styles/Typography";
import css from "../../styles/cars.module.css";
import Footer from "../../components/Footer";
import { Car } from "..";
import { GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

export interface Params extends ParsedUrlQuery {
  name?: string;
  trans?: string;
  reg?: string;
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

interface Propss {
  RecommendedCars: Car[];
}

export default function Cars({ RecommendedCars }: Propss) {
  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
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
              miles={numberWithCommas(el.miles)}
              reg={el.reg}
              trans={capitalizeFirstLetter(el.trans)}
              fuel={el.fuel}
              price={el.price}
              carId={el.id}
            ></CarDiscplayCard>
          </GridItem>
        ))}
      </GridContainer>
      <Footer />
    </Container>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const params = context.query as Params;

  const name = params.name ? (`%${params.name}%` as string) : "%%";
  const trans = params.trans ? (`%${params.trans}%` as string) : "%%";
  const reg = params.reg ? (params.reg as string) : 0;

  const res = await fetch(
    `https://a-star-cars-backend.vercel.app/api/cars/search?name=${name}&trans=${trans}&reg=${reg}`
  );
  const data = await res.json();

  return {
    props: {
      RecommendedCars: data,
    },
  };
};
