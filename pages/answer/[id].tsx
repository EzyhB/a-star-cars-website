import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { Container } from "../../components/styles/Container";
import { Typography } from "../../components/styles/Typography";

import faqDB from "../../tempData/faqDB";

import css from "./answer.module.css";

// export const getStaticPaths = () => {
//   const paths = faqDB.map((el) => {
//     return {
//       params: { id: el.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

type AnswerState = string[];

export default function FAQAnswer() {
  const [answer, setAnswer] = useState<AnswerState>();
  const [id, setId] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const query = router.query;

    setId(Number(query.id));
    const splitAns = faqDB[Number(query.id)].answer.split("*");

    setAnswer(splitAns);
  }, [router.query]);

  return (
    <Container maxWidth="md">
      <Head>
        <title>{faqDB[id].question}</title>
        <meta
          name="description"
          content="We don't just sell cars. We will help you finance, insure, and maintain your vehicle. Call A Star Car Sales today to go over all the options available to you."
        />
      </Head>
      <Container className={css.topContainerSpacing} background="primary">
        <Typography variant="h4">{faqDB[id].question}</Typography>
      </Container>
      <Container>
        {answer?.map((el, index) => (
          <Typography key={index} className={css.textSpacing}>
            {el}
          </Typography>
        ))}
      </Container>
      <Container background="primary" className={css.footerPadding}></Container>
      <Footer />
    </Container>
  );
}
