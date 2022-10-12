import React from "react";
import { Container } from "../components/styles/Container";
import { GridContainer } from "../components/styles/GridContainer";
import { GridItem } from "../components/styles/GridItem";
import { Typography } from "../components/styles/Typography";
import css from "../styles/faq.module.css";

import faqDB from "../tempData/faqDB";
import FAQcard from "../components/FAQcard";
import Footer from "../components/Footer";
import Head from "next/head";

export default function faq() {
  return (
    <Container maxWidth="xl">
      <Head>
        <title>A Star Car Sales FAQ</title>
        <meta
          name="descrion"
          content="As one of the most trusted auto traders in the United Kingdom, we offer a wide range of services to help you find your next car. Our FAQs will answer all of your questions, plus you can request a call back from one of our team"
        ></meta>
      </Head>
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
          WhatsApp us on +44 0746 583 2323.
        </Typography>
      </Container>
      <Container maxWidth="xl">
        <GridContainer>
          {faqDB.map((el, index) => (
            <GridItem lg="four" md="six" key={index} center="yes">
              <FAQcard
                question={el.question}
                answer={el.answer}
                id={el.id}
              ></FAQcard>
            </GridItem>
          ))}
        </GridContainer>
      </Container>
      <Footer />
    </Container>
  );
}
