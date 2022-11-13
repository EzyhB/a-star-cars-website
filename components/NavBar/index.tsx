import Link from "next/link";
import React from "react";
import { Container } from "../styles/Container";
import { DropdownItem, DropdownMenu } from "../styles/DropdownMenu";
import { GridContainer } from "../styles/GridContainer";
import { GridItem } from "../styles/GridItem";
import { Typography } from "../styles/Typography";
import { useUser } from "@auth0/nextjs-auth0";
import { env } from "process";

import css from "./NavBar.module.css";

interface Props {
  isLight: boolean;
  setIsLight: Function;
}

export default function NavBar({ isLight, setIsLight }: Props) {
  const { user, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;

  let authorised = false;

  if (user) {
    console.log(user);
    authorised = user.sub == env.Admin || user.sub == env.Ezyh;
    console.log("Authorised", authorised);
    console.log(env.Ezyh);
    console.log(env.Admin);
  }

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
            <DropdownItem
              onClick={() => alert("Please Whatsapp us on +44 0746 583 2323")}
            >
              Contact Us
            </DropdownItem>

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
            {user ? (
              <div>
                <Link href={"/api/auth/logout"}>
                  <DropdownItem>Logout</DropdownItem>
                </Link>
              </div>
            ) : (
              <Link href="/api/auth/login">
                <DropdownItem>Login/Admin</DropdownItem>
              </Link>
            )}
            {authorised ? (
              <Link href={"/add-car"}>
                <DropdownItem>Add Cars</DropdownItem>
              </Link>
            ) : (
              <></>
            )}
          </DropdownMenu>
        </GridItem>
      </GridContainer>
    </Container>
  );
}
