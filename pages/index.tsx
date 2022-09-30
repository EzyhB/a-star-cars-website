import type { NextPage } from "next";
import Image from "next/image";
import CarDiscplayCard from "../components/CarDisplayCard";
import { Container } from "../components/styles/Container";
import { GridContainer } from "../components/styles/GridContainer";
import { GridItem } from "../components/styles/GridItem";
import InputField from "../components/styles/InputField";
import { Typography } from "../components/styles/Typography";
import css from "../styles/homepage.module.css";

import ButtonHollow from "../components/styles/ButtonHollow";
import Footer from "../components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Car {
  id: string;
  name: string;
  image: string;
  sub_name: string;
  price: number;
  miles: number;
  reg: number;
  trans: string;
  fuel: string;
  seats: number;
  engine: string;
  body_type: string;
  exterior_color: string;
  drive_type: string;
  reg_num: string;
  previous_owners: number;
  num_of_keys: number;
  top_speed: number;
  acceleration: string;
  power: number;
  created: string;
}

interface FetchImage {
  id: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
  image7: string;
  image8: string;
  image9: string;
  image10: string;
  image11: string;
  image12: string;
}

type Cars = Car[];

const CarsDefaultState = [
  {
    id: "4c83d4bd-4213-454c-af8c-5d7a989da92a",
    name: "Volkswagen Tiguan Allspace",
    image:
      "https://media.cazoo.com/image/upload/c_scale,f_auto,h_1080,q_auto,w_1920/cazoo-imagery/car_gallery_images/WVGZZZ5NZKW828571/ad84dbfd-4088-4dcd-bd1c-03071f3604d7.jpg",
    sub_name: "2L SEL TDI",
    price: 30350,
    miles: 5040,
    reg: 2019,
    trans: "Automatic",
    fuel: "Diesel",
    seats: 7,
    engine: "2",
    body_type: "5 door SUV",
    exterior_color: "Silver",
    drive_type: "Four wheel drive",
    reg_num: "LL68 WRT",
    previous_owners: 1,
    num_of_keys: 2,
    top_speed: 130,
    acceleration: "8.6",
    power: 187,
    created: "2022-09-30T05:46:08.406Z",
  },
  {
    id: "3476f373-8726-41d7-9109-c016898c3ac2",
    name: "Nissan Qashqai",
    image:
      "https://media.cazoo.com/image/upload/c_scale,f_auto,h_1080,q_auto,w_1920/cazoo-imagery/car_gallery_images/SJNTAAJ12U1008668/0db8f4c3-9230-45e2-b1fb-cbc1b8864d3c.jpg",
    sub_name: "1.3L Premiere Edition MHEV DIG-T",
    price: 27750,
    miles: 11390,
    reg: 2021,
    trans: "Automatic",
    fuel: "Petrol",
    seats: 5,
    engine: "1.3",
    body_type: "5 door SUV",
    exterior_color: "White",
    drive_type: "Front wheel drive",
    reg_num: "MC21 UDE",
    previous_owners: 2,
    num_of_keys: 2,
    top_speed: 124,
    acceleration: "9.9",
    power: 156,
    created: "2022-09-30T05:32:52.870Z",
  },
  {
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
  },
];

const Home: NextPage = () => {
  const [latestCars, setLatestCars] = useState<Cars>(CarsDefaultState);

  useEffect(() => {
    const fetchLatestCars = async () => {
      const response = await fetch(
        "https://a-star-cars-backend.vercel.app/api/cars"
      );
      let latest = [] as Cars;

      const data = await response.json();
      latest = [data[0], data[1], data[2]];

      setLatestCars(latest);
    };

    fetchLatestCars();
  }, []);

  return (
    <Container
      maxWidth="xl"
      className={css.bgContainer}
      background="background"
    >
      <Container maxWidth="md" className={css.searchBarPadding}></Container>
      <Container maxWidth="md" className={css.searchBar}>
        <InputField></InputField>
      </Container>
      <GridContainer className={css.featureGrid}>
        <GridItem md="four" sm="six">
          <Typography className={css.featureText} center="yes">
            Great Value
          </Typography>
          <Container className={css.featureImageContainer}>
            <img
              src="/images/a-star-car-sales-great-value-icon.png"
              height={"50%"}
              width={"50%"}
              className={css.featureImage}
            />
          </Container>

          <Typography className={css.featureText} center="yes">
            Browse our wide range of cars from the comfort of your sofa,
            whatever your budget.
          </Typography>
        </GridItem>
        <GridItem md="four" sm="six">
          <Typography className={css.featureText} center="yes">
            High-Quality Used Cars
          </Typography>
          <Container className={css.featureImageContainer}>
            <img
              src="/images/a-star-car-sales-HIGH-QUALITY-USED-CAR-icon.png"
              height={"50%"}
              width={"50%"}
              className={css.featureImage}
            />
          </Container>
          <Typography className={css.featureText} center="yes">
            We own our cars and each one is fully reconditioned, so quality
            comes guaranteed.
          </Typography>
        </GridItem>
        <GridItem md="four" sm="six">
          <Typography className={css.featureText} center="yes">
            Flexible Finance Options
          </Typography>
          <Container className={css.featureImageContainer}>
            <img
              src="/images/a-star-car-sales-flexible-finance-icon.png"
              height={"50%"}
              width={"50%"}
              className={css.featureImage}
            />
          </Container>
          <Typography className={css.featureText} center="yes">
            Quick, easy and entirely online, get instant approvals for monthly
            finance payments.
          </Typography>
        </GridItem>
      </GridContainer>

      <Container maxWidth="xl" background="primary">
        <Container className={css.subBanner}></Container>
      </Container>
      <Container
        maxWidth="xl"
        background="primary"
        className={css.carDisplayContainer}
      >
        <Typography variant="h3" className={css.subHeadders} center="yes">
          Browse our latest used cars
        </Typography>
        <GridContainer>
          {latestCars.map((el, index) => (
            <GridItem
              lg="four"
              md="six"
              className={css.featureImageContainer}
              center="yes"
              key={index}
            >
              <CarDiscplayCard
                carName={el.name}
                carImage={el.image}
                carSubName={el.sub_name}
                miles={el.miles}
                reg={el.reg}
                trans={el.trans}
                fuel={el.fuel}
                price={el.price}
              ></CarDiscplayCard>
            </GridItem>
          ))}
          {/* <GridItem
            lg="four"
            md="six"
            className={css.featureImageContainer}
            center="yes"
          >
            <CarDiscplayCard
              carName={mockDB[0].carName}
              carImage={mockDB[0].carImage}
              carSubName={mockDB[0].carSubname}
              miles={mockDB[0].miles}
              reg={mockDB[0].reg}
              trans={mockDB[0].trans}
              fuel={mockDB[0].fuel}
              price={mockDB[0].price}
            ></CarDiscplayCard>
          </GridItem>
          <GridItem
            lg="four"
            md="six"
            className={css.featureImageContainer}
            center="yes"
          >
            <CarDiscplayCard
              carName={mockDB[1].carName}
              carImage={mockDB[1].carImage}
              carSubName={mockDB[1].carSubname}
              miles={mockDB[1].miles}
              reg={mockDB[1].reg}
              trans={mockDB[1].trans}
              fuel={mockDB[1].fuel}
              price={mockDB[1].price}
            ></CarDiscplayCard>
          </GridItem>
          <GridItem
            lg="four"
            md="six"
            className={css.featureImageContainer}
            center="yes"
          >
            <CarDiscplayCard
              carName={mockDB[2].carName}
              carImage={mockDB[2].carImage}
              carSubName={mockDB[2].carSubname}
              miles={mockDB[2].miles}
              reg={mockDB[2].reg}
              trans={mockDB[2].trans}
              fuel={mockDB[2].fuel}
              price={mockDB[2].price}
            ></CarDiscplayCard>
          </GridItem> */}
        </GridContainer>

        <Typography variant="h4" className={css.subHeadders} center="yes">
          Discover over 250 makes
        </Typography>
        <div className={css.footerPadding}>
          <ButtonHollow size="xl">
            <Link href={"/car/1"}>
              <Typography variant="h6" center="yes">
                See all cars
              </Typography>
            </Link>
          </ButtonHollow>
        </div>
      </Container>
      <Footer />
    </Container>
  );
};

export default Home;
