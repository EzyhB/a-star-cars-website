import React, { useState, useEffect } from "react";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import ButtonHollow from "../../components/styles/ButtonHollow";
import CarSpecs from "../../components/styles/CarSpecs";
import { Container } from "../../components/styles/Container";
import { GridContainer } from "../../components/styles/GridContainer";
import { GridItem } from "../../components/styles/GridItem";
import { Typography } from "../../components/styles/Typography";

import carDB from "../../tempData/carDB";
import { carImageDB } from "../../tempData/carDB";
import { Car, FetchImage } from "..";

import css from "./Car.module.css";
import { useRouter } from "next/router";

const defaultCarState = {
  id: "radomIDGen2003",
  name: "Ford Kuga",
  image:
    "https://cdn.discordapp.com/attachments/786789211315109927/1025101243712028692/unknown.png",
  sub_name: "2.5L ST-Line X EcoBoost Duratec",
  price: 31000,
  miles: 15123,
  reg: 2020,
  trans: "Automatic",
  fuel: "Petrol",
  seats: 5,
  engine: "2.5",
  body_type: "5 door SUV",
  exterior_color: "Grey",
  drive_type: "Front wheel drive",
  reg_num: "YR20 YXU",
  previous_owners: 1,
  num_of_keys: 2,
  top_speed: 125,
  acceleration: "9.2",
  power: 222,
  created: "2022-09-29T16:56:03.670Z",
};

const defaultImageState = {
  id: "radomIDGen2000",
  image1:
    "https://cdn.discordapp.com/attachments/786789211315109927/1023647229191397456/unknown.png",
  image2:
    "https://cdn.discordapp.com/attachments/786789211315109927/1023647267795775558/unknown.png",
  image3:
    "https://cdn.discordapp.com/attachments/786789211315109927/1023647288389800047/unknown.png",
  image4:
    "https://cdn.discordapp.com/attachments/786789211315109927/1023647322187513966/unknown.png",
  image5:
    "https://cdn.discordapp.com/attachments/786789211315109927/1023647352248090815/unknown.png",
  image6:
    "https://cdn.discordapp.com/attachments/786789211315109927/1023647380471558174/unknown.png",
  image7:
    "https://cdn.discordapp.com/attachments/786789211315109927/1023647412264374433/unknown.png",
  image8:
    "https://cdn.discordapp.com/attachments/786789211315109927/1023647441142153308/unknown.png",
  image9:
    "https://cdn.discordapp.com/attachments/786789211315109927/1023647465934688376/unknown.png",
  image10:
    "https://cdn.discordapp.com/attachments/786789211315109927/1023647490374905967/unknown.png",
  image11:
    "https://cdn.discordapp.com/attachments/786789211315109927/1023647513175134279/unknown.png",
  image12:
    "https://cdn.discordapp.com/attachments/786789211315109927/1023647542686257193/unknown.png",
};

export default function Car() {
  const [car, setCar] = useState<Car>(defaultCarState);
  const [image, setImage] = useState<FetchImage>(defaultImageState);
  const carr = carDB[0];
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getCarByID = async () => {
      const res = await fetch(
        `https://a-star-cars-backend.vercel.app/api/car/${id}`
      );
      const data = await res.json();
      console.log("car", data);

      setCar(data);
    };
    const getImagesByID = async () => {
      const res = await fetch(
        `https://a-star-cars-backend.vercel.app/api/image/${id}`
      );
      const data = await res.json();
      console.log("image", data);

      setImage(data);
    };

    getCarByID();
    getImagesByID();
  }, [id]);

  return (
    <Container>
      <Container padding="no" className={css.topMargin}>
        <GridContainer>
          <GridItem lg="eight" md="seven">
            <Carousel images={image} />
          </GridItem>
          <GridItem lg="four" md="five" className={css.carPaymentInfoGrid}>
            <div className={css.carPaymentInfoCard}>
              <Typography variant="h6">{car.name}</Typography>
              <Typography>{car.sub_name}</Typography>
              <div className={css.shortSpecs}>
                <CarSpecs miles={car.miles} />
                <CarSpecs reg={car.reg} />
                <CarSpecs trans={car.trans} />
                <CarSpecs fuel={car.fuel} />
              </div>
              <Container
                className={css.carPaymentActionCard}
                background="primary"
              >
                <div className={css.carPrice}>
                  <Typography variant="h6">
                    {car.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "GBP",
                    })}
                  </Typography>
                  <Typography>
                    {((car.price / 100) * 1.7).toLocaleString("en-US", {
                      style: "currency",
                      currency: "GBP",
                    })}
                    /monthly
                  </Typography>
                </div>
                <Typography variant="h6">Plus £14.99 admin fees</Typography>
                <div className={css.actionButton}>
                  <ButtonHollow size="xl">Contact us</ButtonHollow>
                </div>
              </Container>
            </div>
          </GridItem>
        </GridContainer>
      </Container>
      <Container background="primary" className={css.buyInstructionsContainer}>
        <Typography variant="h5" center="yes">
          How buying an A-star car works
        </Typography>
        <GridContainer>
          <GridItem lg="three" md="six">
            1
            <Typography variant="h6" center="yes">
              Find your perfect car
            </Typography>
            <Typography center="yes">
              Browse our wide range of high-quality and great value used cars
            </Typography>
          </GridItem>
          <GridItem lg="three" md="six">
            2
            <Typography variant="h6" center="yes">
              Choose how to pay
            </Typography>
            <Typography center="yes">
              You can buy outright or apply for car finance entirely online.
            </Typography>
          </GridItem>
          <GridItem lg="three" md="six">
            3
            <Typography variant="h6" center="yes">
              Delivery or collection
            </Typography>
            <Typography center="yes">
              Home delivery or collection in as little as 72 hours, any day of
              the week.
            </Typography>
          </GridItem>
          <GridItem lg="three" md="six">
            4
            <Typography variant="h6" center="yes">
              7 days to decide
            </Typography>
            <Typography center="yes">
              Enjoy your car for up to 7 days and get a full refund if you
              change your mind.
            </Typography>
          </GridItem>
        </GridContainer>
      </Container>
      <Container padding="no">
        <GridContainer>
          <GridItem md="six" className={css.specsGrid1}>
            <div className={css.carPrice}>
              <Typography>Miles</Typography>
              <Typography variant="body2">{car.miles}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Registration</Typography>
              <Typography variant="body2">{car.reg}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Transmission</Typography>
              <Typography variant="body2">{car.trans}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Seats</Typography>
              <Typography variant="body2">{car.seats}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Fuel</Typography>
              <Typography variant="body2">{car.fuel}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Engine</Typography>
              <Typography variant="body2">{car.engine}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Body Type</Typography>
              <Typography variant="body2">{car.body_type}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Exterior Colour</Typography>
              <Typography variant="body2">{car.exterior_color}</Typography>
            </div>
          </GridItem>
          <GridItem md="six" className={css.specsGrid2}>
            <div className={css.carPrice}>
              <Typography>Drive Type</Typography>
              <Typography variant="body2">{car.drive_type}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Registration Number</Typography>
              <Typography variant="body2">{car.reg_num}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Previous Owners</Typography>
              <Typography variant="body2">{car.previous_owners}</Typography>
            </div>

            <div className={css.carPrice}>
              <Typography>Top Speed</Typography>
              <Typography variant="body2">{car.top_speed}</Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Acceleration (0-60)MPH</Typography>
              <Typography variant="body2">
                {car.acceleration} seconds
              </Typography>
            </div>
            <div className={css.carPrice}>
              <Typography>Power</Typography>
              <Typography variant="body2">{car.power} bhp</Typography>
            </div>
          </GridItem>
        </GridContainer>
      </Container>
      <Footer />
    </Container>
  );
}
