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
    console.log(splitAns);

    setAnswer(splitAns);
  }, []);

  return (
    <Container maxWidth="md">
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
