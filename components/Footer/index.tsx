import Link from "next/link";
import React from "react";
import { Container } from "../styles/Container";
import { GridContainer } from "../styles/GridContainer";
import { GridItem } from "../styles/GridItem";
import { Typography } from "../styles/Typography";
import css from "./footer.module.css";

export default function Footer() {
  const handleWhatsappClick = () => {
    alert("Call us on Whatsapp +44 0746 583 2323");
  };
  return (
    <Container maxWidth="xl">
      <div className={css.paddingDiv}>
        <Typography variant="h6" className={css.textCenter1} center="yes">
          If you need any help, we’re available from 8am-8pm, 7 days a week.
        </Typography>
        <Typography variant="h5" className={css.textCenter} center="yes">
          299 Highgate Rd, Sparkbrook, Birmingham B12 8DN
        </Typography>
      </div>
      <Container maxWidth="sm">
        <GridContainer>
          <GridItem xs="four" className={css.gridCenter} center="yes">
            <Link href={"https://www.instagram.com/astarcarsales_ltd/"}>
              <img src="/images/a-star-car-sales-instagram-icon.png" />
            </Link>
          </GridItem>
          <GridItem xs="four" className={css.gridCenter} center="yes">
            <Link href={"https://www.facebook.com/astarcarsalesltd"}>
              <img src="/images/a-star-car-sales-facebook-icon.png" />
            </Link>
          </GridItem>
          <GridItem xs="four" className={css.gridCenter} center="yes">
            <img
              src="/images/a-star-car-sales-whatsapp-icon.png"
              onClick={() => handleWhatsappClick()}
            />
          </GridItem>
        </GridContainer>
      </Container>
      <div>
        <Typography variant="body1" color="secondary" className={css.textEnd}>
          All Rights Reserved 2022 Ⓒ
        </Typography>
      </div>
    </Container>
  );
}
