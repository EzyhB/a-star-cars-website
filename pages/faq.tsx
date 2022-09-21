import React from "react";
import { Container } from "../components/styles/Container";
import { GridContainer } from "../components/styles/GridContainer";
import { GridItem } from "../components/styles/GridItem";
import { Typography } from "../components/styles/Typography";
import css from "../styles/faq.module.css";

import faqDB from "../faqDB";
import FAQcard from "../components/FAQcard";
import Footer from "../components/Footer";

export default function faq() {
  return (
    <Container maxWidth="xl">
      <Container
        maxWidth="xl"
        background="primary"
        className={css.headerContainer}
      >
        <Typography variant="h4" className={css.headdersPadding}>
          A-Star Support
        </Typography>
        <Typography className={css.textPadding}>
          Have a question? Whatever you need, we’re here to help.
        </Typography>
        <Typography>
          We’re here to help 7 days a week from 8am-8pm. You can chat to us,
          WhatsApp us on 07984 395 125 or call 020 3901 3488.
        </Typography>
      </Container>
      <Container maxWidth="xl">
        <GridContainer>
          {faqDB.map((el, index) => (
            <GridItem lg="four" md="six" key={index}>
              <FAQcard question={el.question} answer={el.answer}></FAQcard>
            </GridItem>
          ))}
        </GridContainer>
      </Container>
      <Footer />
    </Container>
  );
}
