import Link from "next/link";
import React, { useEffect, useState } from "react";
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
  carId: string;
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
  carId,
}: props) {
  const [newImage, setNewImage] = useState("");

  useEffect(() => {
    setNewImage(carImage);
  }, [carImage]);

  return (
    <div className={css.cardBody}>
      <div>
        <img src={newImage} alt={carName} className={css.cardImage} />
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
          <Link href={`https://a-star-cars-website.vercel.app/car/${carId}`}>
            <ButtonHollow className={css.button} size="xl">
              <Typography center="yes">View this car</Typography>
            </ButtonHollow>
          </Link>
        </div>
      </Container>
    </div>
  );
}
