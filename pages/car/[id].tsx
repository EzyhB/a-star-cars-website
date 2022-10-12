import React from "react";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import ButtonHollow from "../../components/styles/ButtonHollow";
import CarSpecs from "../../components/styles/CarSpecs";
import { Container } from "../../components/styles/Container";
import { GridContainer } from "../../components/styles/GridContainer";
import { GridItem } from "../../components/styles/GridItem";
import { Typography } from "../../components/styles/Typography";
import { GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";

import { Car as Carr, FetchImage } from "..";

import css from "./Car.module.css";
import Head from "next/head";

export interface Params extends ParsedUrlQuery {
  id: string;
}

interface propss {
  carz: Carr;
  image: FetchImage;
}

export default function Car({ carz, image }: propss) {
  const metaContent = `You can get the best price ${carz.name}, ${carz.sub_name}. We sell cars for all brands in the country. We are the best place to buy your dream car at affordable price.`;

  const handleContactUsClick = () => {
    alert("Please call or message us on Whatsapp +44 0746 583 2323");
  };
  return (
    <Container>
      <Head>
        <title>{carz.name} for sale at A Star Car Sales</title>
        <meta name="description" content={metaContent} />
      </Head>
      <Container padding="no" className={css.topMargin}>
        <GridContainer>
          <GridItem lg="eight" md="seven">
            <Carousel images={image} />
          </GridItem>
          <GridItem lg="four" md="five" className={css.carPaymentInfoGrid}>
            <div className={css.carPaymentInfoCard}>
              <Typography variant="h6">{carz.name}</Typography>
              <Typography>{carz.sub_name}</Typography>
              <div className={css.shortSpecs}>
                <CarSpecs miles={carz.miles} />
                <CarSpecs reg={carz.reg} />
                <CarSpecs trans={carz.trans} />
                <CarSpecs fuel={carz.fuel} />
              </div>
              <Container
                className={css.carPaymentActionCard}
                background="primary"
              >
                <div className={css.carPrice}>
                  <Typography variant="h6">
                    {carz.price &&
                      carz.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "GBP",
                      })}
                  </Typography>
                  <Typography>
                    {((carz.price / 100) * 1.7).toLocaleString("en-US", {
                      style: "currency",
                      currency: "GBP",
                    })}
                    /monthly
                  </Typography>
                </div>
                <Typography variant="h6">Plus £14.99 admin fees</Typography>
                <div className={css.actionButton}>
                  <ButtonHollow
                    size="xl"
                    onClick={() => handleContactUsClick()}
                  >
                    Contact us
                  </ButtonHollow>
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
              <Typography variant="body2">{carz.miles}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Registration</Typography>
              <Typography variant="body2">{carz.reg}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Transmission</Typography>
              <Typography variant="body2">{carz.trans}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Seats</Typography>
              <Typography variant="body2">{carz.seats}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Fuel</Typography>
              <Typography variant="body2">{carz.fuel}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Engine</Typography>
              <Typography variant="body2">{carz.engine}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Body Type</Typography>
              <Typography variant="body2">{carz.body_type}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Exterior Colour</Typography>
              <Typography variant="body2">{carz.exterior_color}</Typography>
            </div>
          </GridItem>
          <GridItem md="six" className={css.specsGrid2}>
            <div className={css.carPrice}>
              <Typography>Drive Type</Typography>
              <Typography variant="body2">{carz.drive_type}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Registration Number</Typography>
              <Typography variant="body2">{carz.reg_num}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Previous Owners</Typography>
              <Typography variant="body2">{carz.previous_owners}</Typography>
            </div>

            <div className={css.carPrice}>
              <Typography>Top Speed</Typography>
              <Typography variant="body2">{carz.top_speed}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Acceleration (0-60)MPH</Typography>
              <Typography variant="body2">
                {carz.acceleration} seconds
              </Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Power</Typography>
              <Typography variant="body2">{carz.power} bhp</Typography>
            </div>
          </GridItem>
        </GridContainer>
      </Container>
      <Footer />
    </Container>
  );
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const params = context.params as Params;

  const id = params.id;
  const res = await fetch(
    `https://a-star-cars-backend.vercel.app/api/car/${id}`
  );
  const data = await res.json();

  const res1 = await fetch(
    `https://a-star-cars-backend.vercel.app/api/image/${id}`
  );
  const data1 = await res1.json();

  return {
    props: {
      carz: data[0],
      image: data1[0],
    },
  };
};
