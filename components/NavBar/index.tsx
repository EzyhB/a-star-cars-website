import Link from "next/link";
import React from "react";
import { Container } from "../styles/Container";
import { DropdownItem, DropdownMenu } from "../styles/DropdownMenu";
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
        <GridItem xl="five" md="four" xs="three">
          <img
            className={css.mdLogo}
            src={
              isLight
                ? "./images/a-star-car-sales-light-logo.png"
                : "./images/a-star-car-sales-dark-logo.png"
            }
            alt="a-star-car-sales-logo"
          />
        </GridItem>
        <GridItem className={css.xsLogoGrid} xl="two" md="four" xs="six">
          <div className={css.mdNavBar}>
            <Link href={"/"}>
              <a style={{ textDecoration: "none" }}>
                <Typography>Home</Typography>
              </a>
            </Link>
            <Link href={"/cars"}>
              <a style={{ textDecoration: "none" }}>
                <Typography>Cars</Typography>
              </a>
            </Link>

            <Link href={"/faq"}>
              <a style={{ textDecoration: "none" }}>
                <Typography>FAQ/Support</Typography>
              </a>
            </Link>
            <Link href={"/about"}>
              <a style={{ textDecoration: "none" }}>
                <Typography>About</Typography>
              </a>
            </Link>
          </div>
          <div className={css.xsLogoGrid}>
            <img
              className={css.xsLogo}
              src={
                isLight
                  ? "./images/a-star-car-sales-light-logo.png"
                  : "./images/a-star-car-sales-dark-logo.png"
              }
              alt="a-star-car-sales-logo"
            />
          </div>
        </GridItem>
        <GridItem
          className={css.themeSwitchGrid}
          xl="five"
          md="four"
          xs="three"
        >
          <DropdownMenu setIsLight={setIsLight} isLight={isLight} justify="end">
            <Link href={"/about"}>
              <DropdownItem>Contact Us</DropdownItem>
            </Link>

            <DropdownItem onClick={() => setIsLight(!isLight)}>
              Theme
            </DropdownItem>
            <div className={css.xsMenu}>
              <Link href={"/"}>
                <DropdownItem>Home</DropdownItem>
              </Link>
              <Link href={"/cars"}>
                <DropdownItem>Cars</DropdownItem>
              </Link>
              <Link href={"/faq"}>
                <DropdownItem>FAQ/Support</DropdownItem>
              </Link>
              <Link href={"/about"}>
                <DropdownItem>About</DropdownItem>
              </Link>
            </div>
          </DropdownMenu>
        </GridItem>
      </GridContainer>
    </Container>
  );
}
