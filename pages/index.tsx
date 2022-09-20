import type { NextPage } from "next";
import Image from "next/image";
import CarDiscplayCard from "../components/CarDisplayCard";
import { Container } from "../components/styles/Container";
import { GridContainer } from "../components/styles/GridContainer";
import { GridItem } from "../components/styles/GridItem";
import InputField from "../components/styles/InputField";
import { Typography } from "../components/styles/Typography";
import css from "../styles/homepage.module.css";
import mockDB from "../mockDB";
import ButtonHollow from "../components/styles/ButtonHollow";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <Container
      maxWidth="xl"
      className={css.bgContainer}
      background="background"
    >
      <Container maxWidth="md" className={css.searchBarPadding}></Container>
      <Container maxWidth="md" className={css.searchBar}>
        <InputField></InputField>
      </Container>
      <GridContainer className={css.featureGrid}>
        <GridItem md="four" sm="six">
          <Typography className={css.featureText}>Great Value</Typography>
          <Container className={css.featureImageContainer}>
            <img
              src="/images/a-star-car-sales-great-value-icon.png"
              height={"50%"}
              width={"50%"}
              className={css.featureImage}
            />
          </Container>

          <Typography className={css.featureText}>
            Browse our wide range of cars from the comfort of your sofa,
            whatever your budget.
          </Typography>
        </GridItem>
        <GridItem md="four" sm="six">
          <Typography className={css.featureText}>
            High-Quality Used Cars
          </Typography>
          <Container className={css.featureImageContainer}>
            <img
              src="/images/a-star-car-sales-HIGH-QUALITY-USED-CAR-icon.png"
              height={"50%"}
              width={"50%"}
              className={css.featureImage}
            />
          </Container>
          <Typography className={css.featureText}>
            We own our cars and each one is fully reconditioned, so quality
            comes guaranteed.
          </Typography>
        </GridItem>
        <GridItem md="four" sm="six">
          <Typography className={css.featureText}>
            Flexible Finance Options
          </Typography>
          <Container className={css.featureImageContainer}>
            <img
              src="/images/a-star-car-sales-flexible-finance-icon.png"
              height={"50%"}
              width={"50%"}
              className={css.featureImage}
            />
          </Container>
          <Typography className={css.featureText}>
            Quick, easy and entirely online, get instant approvals for monthly
            finance payments.
          </Typography>
        </GridItem>
      </GridContainer>

      <Container maxWidth="xl" background="primary">
        <Container className={css.subBanner}></Container>
      </Container>
      <Container
        maxWidth="xl"
        background="primary"
        className={css.carDisplayContainer}
      >
        <Typography variant="h3" className={css.subHeadders}>
          Browse our latest used cars
        </Typography>
        <GridContainer>
          <GridItem lg="four" md="six" className={css.featureImageContainer}>
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
          <GridItem lg="four" md="six" className={css.featureImageContainer}>
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
          <GridItem lg="four" md="six" className={css.featureImageContainer}>
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

        <Typography variant="h4" className={css.subHeadders}>
          Discover over 250 makes
        </Typography>
        <div className={css.footerPadding}>
          <ButtonHollow size="xl">
            <Typography variant="h6">See all cars</Typography>
          </ButtonHollow>
        </div>
      </Container>
      <Footer />
    </Container>
  );
};

export default Home;
