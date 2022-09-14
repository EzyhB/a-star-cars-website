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
    <Container maxWidth="xl" className={css.bgContainer}>
      <Container maxWidth="md" className={css.searchBarPadding}></Container>
      <Container maxWidth="md" className={css.searchBar}>
        <InputField></InputField>
      </Container>
      <GridContainer>
        <GridItem md="four" className={css.featureGrid}>
          <Typography className={css.featureHeader}>Great Value</Typography>
          <Image
            src="/images/a-star-car-sales-great-value-icon.png"
            height={"205px"}
            width={"205px"}
            className={css.featureImage}
          />
          <Typography>
            Browse our wide range of cars from the comfort of your sofa,
            whatever your budget.
          </Typography>
        </GridItem>
        <GridItem md="four">
          <Typography className={css.featureHeader}>
            {" "}
            High-Quality Used Cars
          </Typography>
          <Image
            src="/images/a-star-car-sales-HIGH-QUALITY-USED-CAR-icon.png"
            height={"205px"}
            width={"205px"}
          />
          <Typography>
            We own our cars and each one is fully reconditioned, so quality
            comes guaranteed.
          </Typography>
        </GridItem>
        <GridItem md="four">
          <Typography className={css.featureHeader}>
            Flexible Finance Options
          </Typography>
          <Image
            src="/images/a-star-car-sales-flexible-finance-icon.png"
            height={"205px"}
            width={"205px"}
          />
          <Typography>
            Quick, easy and entirely online, get instant approvals for monthly
            finance payments.
          </Typography>
        </GridItem>
      </GridContainer>
    </Container>
  );
};

export default Home;
