import Link from "next/link";
import React from "react";
import { Container } from "../styles/Container";
import { DropdownMenu } from "../styles/DropdownMenu";
import { GridContainer } from "../styles/GridContainer";
import { GridItem } from "../styles/GridItem";
import { Typography } from "../styles/Typography";

import css from "./NavBar.module.css";

interface Props {
  isLight: boolean;
  setIsLight: Function;
}

export default function NavBar({ isLight, setIsLight }: Props) {
  let themeSwitchBackground = isLight ? "#28293E" : "#ffffff";
  return (
    <Container maxWidth="none">
      <GridContainer>
        <GridItem lg="five" md="four" xs="three">
          <img
            className={css.mdLogo}
            src={
              isLight
                ? "./images/a-star-logo-png.png"
                : "./images/a-star-logo-png-yellow.png"
            }
            alt="a-star-car-sales-logo"
          />
        </GridItem>
        <GridItem className={css.xsLogoGrid} lg="two" md="four" xs="six">
          <Link href={"/"}>
            <a style={{ textDecoration: "none" }}>
              <Typography>Home</Typography>
            </a>
          </Link>
          <Link href={"/"}>
            <a style={{ textDecoration: "none" }}>
              <Typography>Cars</Typography>
            </a>
          </Link>

          <Link href={"/"}>
            <a style={{ textDecoration: "none" }}>
              <Typography>FAQ/Support</Typography>
            </a>
          </Link>
          <Link href={"/"}>
            <a style={{ textDecoration: "none" }}>
              <Typography>About</Typography>
            </a>
          </Link>
          <img
            className={css.xsLogo}
            src={
              isLight
                ? "./images/a-star-logo-png.png"
                : "./images/a-star-logo-png-yellow.png"
            }
            alt="a-star-car-sales-logo"
          />
        </GridItem>
        <GridItem
          className={css.themeSwitchGrid}
          lg="five"
          md="four"
          xs="three"
        >
          <DropdownMenu setIsLight={setIsLight} isLight={isLight} />
          {/* <div
            style={{ background: themeSwitchBackground }}
            className={css.themeSwitchBackground}
            onClick={() => {
              setIsLight(!isLight);
            }}
          >
            <img
              className={css.themeSwitch}
              title="theme switch"
              src={
                isLight
                  ? "./images/darkModeIcon.png"
                  : "./images/lightModeIcon.png"
              }
              alt="theme switch button"
            />
          </div> */}
        </GridItem>
      </GridContainer>
    </Container>
  );
}
