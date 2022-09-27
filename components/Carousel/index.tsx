import React, { useState } from "react";
import { Container } from "../styles/Container";
import { GridContainer } from "../styles/GridContainer";
import { GridItem } from "../styles/GridItem";

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

  return (
    <Container padding="no">
      <Container padding="no">
        <img src={mainImage} alt="A-Star Car Sales car image" />
      </Container>
      <div className={css.carouselNavDiv}>
        L
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
        R
      </div>
      <div className={css.carouselNavDivXS}>
        L
        <GridContainer>
          <GridItem xs="six" className={css.carouselNavGridItem} center="yes">
            <div>
              <img
                src={images[nav0]}
                alt="A-Star Car Sales car image"
                className={css.carouselNavImage}
              />
            </div>
          </GridItem>
          <GridItem xs="six" className={css.carouselNavGridItem} center="yes">
            <div>
              <img
                src={images[nav1]}
                alt="A-Star Car Sales car image"
                className={css.carouselNavImage}
              />
            </div>
          </GridItem>
        </GridContainer>
        R
      </div>
    </Container>
  );
}
