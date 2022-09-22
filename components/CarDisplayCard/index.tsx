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
        <div>
          <Typography variant="h6" className={css.carPrice}>
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: "GBP",
            })}
          </Typography>
        </div>
        <div className={css.buttonContainer}>
          <ButtonHollow className={css.button} size="xl">
            <Typography center="yes">View this car</Typography>
          </ButtonHollow>
        </div>
      </Container>
    </div>
  );
}
