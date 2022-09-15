import React from "react";
import ButtonHollow from "../styles/ButtonHollow";
import CarSpecs from "../styles/CarSpecs";
import { Container } from "../styles/Container";
import { Typography } from "../styles/Typography";
import css from "./carDisplayCard.module.css";

interface props {
  carName: string;
  carImage: string;
  carSubName: string;
  miles: number;
  reg: number;
  trans: string;
  fuel: string;
  price: number;
}

export default function CarDiscplayCard({
  carName,
  carImage,
  carSubName,
  miles,
  reg,
  trans,
  fuel,
  price,
}: props) {
  return (
    <div className={css.cardBody}>
      <div>
        <img src={carImage} alt={carName} className={css.cardImage} />
      </div>
      <Container>
        <Typography variant="h6">{carName}</Typography>
        <Typography>{carSubName}</Typography>
        <div className={css.specBody}>
          <CarSpecs miles={miles} />
          <CarSpecs reg={reg} />
          <CarSpecs trans={trans} />
          <CarSpecs fuel={fuel} />
        </div>
        <Typography variant="h6">{price}</Typography>
        <div className={css.buttonContainer}>
          <ButtonHollow className={css.button}>View this car</ButtonHollow>
        </div>
      </Container>
    </div>
  );
}
