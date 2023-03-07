import React, { useState, useEffect } from "react";
import { Container } from "../styles/Container";
import { GridContainer } from "../styles/GridContainer";
import { GridItem } from "../styles/GridItem";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FetchImage as Images } from "../../pages";

import css from "./Carousel.module.css";

interface Props {
  carID: string;
  length: number;
}

let string =
  "https://astarcarsales-bucket.s3.eu-west-2.amazonaws.com/8712d343-1b1f-4a05-97d4-d0b24ed6d245/2.jpeg";

export default function Carousel({ carID, length }: Props) {
  const [carouselNav, setCarouselNav] = useState(0);
  const [mainImage, setMainImage] = useState(
    `https://astarcarsales-bucket.s3.eu-west-2.amazonaws.com/${carID}/${carouselNav}.jpeg`
  );
  const [NavImage1, setNavImage1] = useState(
    `https://astarcarsales-bucket.s3.eu-west-2.amazonaws.com/${carID}/${carouselNav}.jpeg`
  );
  const [NavImage2, setNavImage2] = useState(
    `https://astarcarsales-bucket.s3.eu-west-2.amazonaws.com/${carID}/${
      carouselNav + 1
    }.jpeg`
  );
  const [NavImage3, setNavImage3] = useState(
    `https://astarcarsales-bucket.s3.eu-west-2.amazonaws.com/${carID}/${
      carouselNav + 2
    }.jpeg`
  );

  // useEffect(() => {
  //   setMainImage(Object.values(images)[1]);
  //   setNavImage1(Object.values(images)[1]);
  //   setNavImage2(Object.values(images)[2]);
  //   setNavImage3(Object.values(images)[3]);
  // }, [images]);

  const handleNavButtonClick = (operation: string) => {
    if (operation == "add") {
      if (carouselNav == length - 2) {
        return;
      }
      setNavImage1(
        `https://astarcarsales-bucket.s3.eu-west-2.amazonaws.com/${carID}/${
          carouselNav + 1
        }.jpeg`
      );
      setNavImage2(
        `https://astarcarsales-bucket.s3.eu-west-2.amazonaws.com/${carID}/${
          carouselNav + 2
        }.jpeg`
      );
      setNavImage3(
        `https://astarcarsales-bucket.s3.eu-west-2.amazonaws.com/${carID}/${
          carouselNav + 3
        }.jpeg`
      );
      setCarouselNav(carouselNav + 1);
    } else {
      if (carouselNav == 0) {
        return;
      }
      setNavImage1(
        `https://astarcarsales-bucket.s3.eu-west-2.amazonaws.com/${carID}/${
          carouselNav - 1
        }.jpeg`
      );
      setNavImage2(
        `https://astarcarsales-bucket.s3.eu-west-2.amazonaws.com/${carID}/${
          carouselNav - 2
        }.jpeg`
      );
      setNavImage3(
        `https://astarcarsales-bucket.s3.eu-west-2.amazonaws.com/${carID}/${
          carouselNav - 3
        }.jpeg`
      );
      setCarouselNav(carouselNav - 1);
    }
  };

  return (
    <Container padding="no">
      <Container padding="yes">
        <img
          src={mainImage}
          alt="A-Star Car Sales car image"
          className={css.carouselMainImg}
        />
      </Container>
      <div className={css.carouselNavDiv}>
        <button
          className={css.navButton}
          onClick={() => {
            handleNavButtonClick("remove");
          }}
        >
          <BsArrowLeftShort size={"2em"} className={css.navButtonIcon} />
        </button>
        <Container>
          <GridContainer>
            <GridItem
              sm="four"
              xs="six"
              className={css.carouselNavGridItem}
              center="yes"
            >
              <div>
                <img
                  src={NavImage1}
                  alt="A-Star Car Sales car image"
                  className={css.carouselNavImage}
                  onClick={() => setMainImage(NavImage1)}
                />
              </div>
            </GridItem>
            <GridItem
              sm="four"
              xs="six"
              className={css.carouselNavGridItem}
              center="yes"
            >
              <div>
                <img
                  src={NavImage2}
                  alt="A-Star Car Sales car image"
                  className={css.carouselNavImage}
                  onClick={() => setMainImage(NavImage2)}
                />
              </div>
            </GridItem>
            <GridItem
              sm="four"
              xs="six"
              className={css.carouselNavGridItem}
              center="yes"
            >
              <div>
                <img
                  src={NavImage3}
                  alt="A-Star Car Sales car image"
                  className={css.carouselNavImage}
                  onClick={() => setMainImage(NavImage3)}
                />
              </div>
            </GridItem>
          </GridContainer>
        </Container>
        <button
          className={css.navButton}
          onClick={() => {
            handleNavButtonClick("add");
          }}
        >
          <BsArrowRightShort size={"2em"} className={css.navButtonIcon} />
        </button>
      </div>
      <div className={css.carouselNavDivXS}>
        <button
          className={css.navButton}
          onClick={() => {
            handleNavButtonClick("remove");
          }}
        >
          <BsArrowLeftShort size={"2em"} className={css.navButtonIcon} />
        </button>
        <GridContainer>
          <GridItem xs="six" className={css.carouselNavGridItem} center="yes">
            <div>
              <img
                src={NavImage1}
                alt="A-Star Car Sales car image"
                className={css.carouselNavImage}
                onClick={() => setMainImage(NavImage1)}
              />
            </div>
          </GridItem>
          <GridItem xs="six" className={css.carouselNavGridItem} center="yes">
            <div>
              <img
                src={NavImage2}
                alt="A-Star Car Sales car image"
                className={css.carouselNavImage}
                onClick={() => setMainImage(NavImage2)}
              />
            </div>
          </GridItem>
        </GridContainer>
        <button
          className={css.navButton}
          onClick={() => {
            handleNavButtonClick("add");
          }}
        >
          <BsArrowRightShort size={"2em"} className={css.navButtonIcon} />
        </button>
      </div>
    </Container>
  );
}
