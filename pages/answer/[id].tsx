import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Container } from "../../components/styles/Container";
import { Typography } from "../../components/styles/Typography";

import faqDB from "../../faqDB";

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

export default function FAQAnswer() {
  const [answer, setAnswer] = useState({});
  const [id, setId] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const query = router.query;
    // console.log(typeof query.id);
    setId(Number(query.id));
  }, []);

  return (
    <Container>
      <Container>
        <Typography>{faqDB[id].question}</Typography>
      </Container>
      <Container>
        <Typography>{faqDB[id].answer}</Typography>
      </Container>
    </Container>
  );
}
