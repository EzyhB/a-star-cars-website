import Link from "next/link";
import React from "react";
import { Typography } from "../styles/Typography";
import css from "./FAQcard.module.css";

interface Props {
  question: string;
  answer: string;
  id: number;
}

export default function FAQcard({ question, answer, id }: Props) {
  return (
    <Link href={`/answer/${id}`}>
      <div className={css.cardBody}>
        <Typography variant="h5" className={css.cardText} center="yes">
          {question}
        </Typography>
        <Typography className={css.cardAnswer} center="yes">
          {answer.slice(0, 40)}...
        </Typography>
      </div>
    </Link>
  );
}
