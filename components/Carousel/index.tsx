import React, { useState, useEffect } from "react";
import { Container } from "../styles/Container";
import { GridContainer } from "../styles/GridContainer";
import { GridItem } from "../styles/GridItem";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { FetchImage as Images } from "../../pages";

import css from "./Carousel.module.css";

interface Props {
  images: Images;
}

export default function Carousel({ images }: Props) {
  const [mainImage, setMainImage] = useState(images["image1"]);
  const [carouselNav, setCarouselNav] = useState(1);
  const [NavImage1, setNavImage1] = useState(mainImage[carouselNav - 1]);
  const [NavImage2, setNavImage2] = useState(mainImage[carouselNav]);
  const [NavImage3, setNavImage3] = useState(mainImage[carouselNav + 1]);

  useEffect(() => {
    setMainImage(Object.values(images)[1]);
    setNavImage1(Object.values(images)[1]);
    setNavImage2(Object.values(images)[2]);
    setNavImage3(Object.values(images)[3]);
  }, [images]);

  const handleNavButtonClick = (operation: string) => {
    if (operation == "add") {
      if (carouselNav == 38) {
        return;
      }
      setNavImage1(Object.values(images)[carouselNav + 1]);
      setNavImage2(Object.values(images)[carouselNav + 2]);
      setNavImage3(Object.values(images)[carouselNav + 3]);
      setCarouselNav(carouselNav + 1);
    } else {
      if (carouselNav == 1) {
        return;
      }
      setNavImage1(Object.values(images)[carouselNav - 1]);
      setNavImage2(Object.values(images)[carouselNav]);
      setNavImage3(Object.values(images)[carouselNav + 1]);
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
