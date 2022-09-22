import React from "react";
import { Typography } from "../styles/Typography";
import css from "./FAQcard.module.css";

interface Props {
  question: string;
  answer: string;
}

export default function FAQcard({ question, answer }: Props) {
  return (
    <div className={css.cardBody}>
      <Typography variant="h5" className={css.cardText} center="yes">
        {question}
      </Typography>
      <Typography className={css.cardAnswer} center="yes">
        {answer.slice(0, 40)}...
      </Typography>
    </div>
  );
}
