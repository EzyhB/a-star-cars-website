import React from "react";
import ButtonHollow from "../components/styles/ButtonHollow";
import { Container } from "../components/styles/Container";
import { GridContainer } from "../components/styles/GridContainer";
import { GridItem } from "../components/styles/GridItem";
import { Typography } from "../components/styles/Typography";
import css from "../styles/faq.module.css";

export default function Faq() {
  return (
    <Container maxWidth="xl">
      <Container maxWidth="md" className={css.faqGridContainer}>
        <GridContainer>
          <GridItem md="six" className={css.faqGridItem}>
            <img
              src="images/a-star-car-sales-used-car.png"
              className={css.faqImage}
            />
          </GridItem>
          <GridItem md="six" className={css.faqGridItem}>
            <div className={css.faqContainer}>
              <Typography variant="h5">Buy a used A-Star car</Typography>
              <Typography>
                Complete your purchase online or visit us in person. Choose home
                delivery or collection in as little as 72 hours, any day of the
                week.
              </Typography>
              <ButtonHollow>Shop now</ButtonHollow>
            </div>
          </GridItem>
        </GridContainer>
      </Container>
      <Container maxWidth="md" className={css.faqGridContainer}>
        <GridContainer>
          <GridItem md="six" className={css.faqGridItem}>
            <img
              src="images/a-star-car-sales-finance.png"
              className={css.faqImage}
            />
          </GridItem>
          <GridItem md="six" className={css.faqGridItem}>
            <div className={css.faqContainer}>
              <Typography variant="h5">Finance made simple</Typography>
              <Typography>
                Apply for finance and sign your agreement all online. Simply
                choose from monthly payment options to suit you and we’ll give
                you a decision within minutes.
              </Typography>
              <ButtonHollow>Shop now</ButtonHollow>
            </div>
          </GridItem>
        </GridContainer>
      </Container>
      <Container maxWidth="md" className={css.faqGridContainer}>
        <GridContainer>
          <GridItem md="six" className={css.faqGridItem}>
            <img
              src="images/a-star-car-sales-sell.png"
              className={css.faqImage}
            />
          </GridItem>
          <GridItem md="six" className={css.faqGridItem}>
            <div className={css.faqContainer}>
              <Typography variant="h5">Sell your car the A-Star way</Typography>
              <Typography>
                We’ll take your car off your hands in as little as 48 hours and
                give you an instant, online valuation that’s guaranteed for 7
                days. We’ll even pick it up from your door if you like.
              </Typography>
              <ButtonHollow>Shop now</ButtonHollow>
            </div>
          </GridItem>
        </GridContainer>
      </Container>
    </Container>
  );
}
