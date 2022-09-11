import type { NextPage } from "next";
import ButtonHollow from "../components/styles/ButtonHollow";
import { Container } from "../components/styles/Container";
import { DropdownMenu } from "../components/styles/DropdownMenu";
import { GridContainer } from "../components/styles/GridContainer";
import { GridItem } from "../components/styles/GridItem";
import { Typography } from "../components/styles/Typography";
import css from "../styles/Index.module.css";

const Home: NextPage = () => {
  return <Container maxWidth="xl" className={css.bgContainer}></Container>;
};

export default Home;
