import type { NextPage } from "next";
import Image from "next/image";
import { Container } from "../components/styles/Container";
import { GridContainer } from "../components/styles/GridContainer";
import { GridItem } from "../components/styles/GridItem";
import InputField from "../components/styles/InputField";
import { Typography } from "../components/styles/Typography";
import css from "../styles/homepage.module.css";

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
        <GridItem md="four">
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
        <GridItem md="four">
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
        <GridItem md="four">
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
      {/* <Container maxWidth="none">
        <Container maxWidth="md"></Container>
      </Container> */}

      <Container maxWidth="xl" background="primary">
        <Container className={css.subBanner}></Container>
      </Container>
      <Container
        maxWidth="xl"
        background="primary"
        className={css.carDisplayContainer}
      >
        <Typography>Browse our latest used cars</Typography>
      </Container>
    </Container>
  );
};

export default Home;
