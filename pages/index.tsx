import type { NextPage } from "next";
import ButtonHollow from "../components/styles/ButtonHollow";
import { Container } from "../components/styles/Container";
import { DropdownMenu } from "../components/styles/DropdownMenu";
import { GridContainer } from "../components/styles/GridContainer";
import { GridItem } from "../components/styles/GridItem";
import InputField from "../components/styles/InputField";
import { Typography } from "../components/styles/Typography";
import css from "../styles/index.module.css";

const Home: NextPage = () => {
  return (
    <Container maxWidth="xl" className={css.bgContainer}>
      <Container maxWidth="md" className={css.searchBarPadding}></Container>
      <Container maxWidth="md" className={css.searchBar}>
        <InputField></InputField>
      </Container>
    </Container>
  );
};

export default Home;
