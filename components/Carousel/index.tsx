import React, { useState, useEffect } from "react";
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

const ImageDefaultState = {
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

export default function Carousel({ images }: Props) {
  const [mainImage, setMainImage] = useState(images["image1"]);
  const [AllImages, setAllImages] = useState<Images>(ImageDefaultState);
  const [carouselNav, setCarouselNav] = useState(1);
  const [NavImage1, setNavImage1] = useState(mainImage[carouselNav - 1]);
  const [NavImage2, setNavImage2] = useState(mainImage[carouselNav]);
  const [NavImage3, setNavImage3] = useState(mainImage[carouselNav + 1]);

  useEffect(() => {
    setMainImage(images["image1"]);
    setAllImages(images);

    console.log("Carousel Images", images);
  }, [images]);

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
