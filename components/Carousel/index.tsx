import React, { useState } from "react";
import { Container } from "../styles/Container";
import { GridContainer } from "../styles/GridContainer";
import { GridItem } from "../styles/GridItem";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import css from "./Carousel.module.css";

interface Images {
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

interface Props {
  images: Images;
}

export default function Carousel({ images }: Props) {
  const [mainImage, setMainImage] = useState(images["image1"]);
  const [carouselNav, setCarouselNav] = useState(1);

  let nav0 = ("image" + carouselNav.toString()) as keyof typeof images;
  let nav1 = ("image" + (carouselNav + 1).toString()) as keyof typeof images;
  let nav2 = ("image" + (carouselNav + 2).toString()) as keyof typeof images;

  const handleNavButtonClick = (operation: string) => {
    if (operation == "add") {
      if (carouselNav == 10) {
        return;
      }
      setCarouselNav(carouselNav + 1);
    } else {
      if (carouselNav == 1) {
        return;
      }
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
                  src={images[nav0]}
                  alt="A-Star Car Sales car image"
                  className={css.carouselNavImage}
                  onClick={() => setMainImage(images[nav0])}
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
                  src={images[nav1]}
                  alt="A-Star Car Sales car image"
                  className={css.carouselNavImage}
                  onClick={() => setMainImage(images[nav1])}
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
                  src={images[nav2]}
                  alt="A-Star Car Sales car image"
                  className={css.carouselNavImage}
                  onClick={() => setMainImage(images[nav2])}
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
                src={images[nav0]}
                alt="A-Star Car Sales car image"
                className={css.carouselNavImage}
                onClick={() => setMainImage(images[nav0])}
              />
            </div>
          </GridItem>
          <GridItem xs="six" className={css.carouselNavGridItem} center="yes">
            <div>
              <img
                src={images[nav1]}
                alt="A-Star Car Sales car image"
                className={css.carouselNavImage}
                onClick={() => setMainImage(images[nav1])}
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
