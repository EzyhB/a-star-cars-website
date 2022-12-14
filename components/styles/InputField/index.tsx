import { useState } from "react";
import styled from "styled-components";
import css from "./inputField.module.css";

const InputForm = styled.form`
  max-width: 700px;
  height: 90px;
  background: none;
  border: none;
  display: flex;
  margin: auto;
  @media only screen and (max-width: 900px) {
    height: 80px;
  }
  @media only screen and (max-width: 800px) {
    height: 70px;
  }
  @media only screen and (max-width: 700px) {
    height: 60px;
  }
  @media only screen and (max-width: 600px) {
    height: 50px;
  }
  @media only screen and (max-width: 500px) {
    height: 40px;
  }
`;
const SearchBarOutline = styled.div`
  width: 80%;

  height: 100%;
  border-radius: 45px;
  border: 1px solid ${(props) => props.theme.pallette.secondary};

  background-color: rgba(255, 255, 255, 0.74);
`;

const TextSearch = styled.input`
  width: 50%;
  height: 100%;
  background: none;
  border: none;
  padding-left: 1rem;

  color: ${(props) => props.theme.pallette.text};

  border-radius: 45px;
`;

const RegSearch = styled.select`
  width: 25%;
  height: 100%;
  cursor: pointer;
  font-family: inherit;

  transition: all 150ms ease;
  text-align: center;

  background: none;
  border: none;

  border-radius: 45px;
`;

const TypeSearch = styled.select`
  width: 25%;
  height: 100%;
  cursor: pointer;
  font-family: inherit;

  transition: all 150ms ease;
  text-align: center;
  background: none;
  border: none;

  border-radius: 45px;
`;

const searchButtonDiv = styled.div`
  width: 20%;
`;
const InputSearchButton = styled.button`
  flex-grow: 0.4;
  height: 100%;

  background: url(${(props) =>
    props.theme.pallette.primary == "#A7DBAB"
      ? "/images/search-icon-light.png"
      : "/images/search-icon-dark.png"});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

import React from "react";
import Link from "next/link";

export default function InputField() {
  const [Name, setName] = useState("");
  const [Reg, setReg] = useState("");
  const [Trans, setTrans] = useState("");

  return (
    <InputForm>
      <SearchBarOutline>
        <TextSearch
          type={"text"}
          lang={"en"}
          title={"Search for your car..."}
          placeholder={"Search for your car..."}
          onChange={(e) => {
            if (e.target.value.trim()) {
              setName(e.target.value);
            }
          }}
        ></TextSearch>
        <RegSearch
          title={"select year of registeation..."}
          onChange={(e) => {
            if (e.target.value !== "Registration-") {
              setReg(e.target.value);
            }
          }}
        >
          <option>Registration-</option>
          <option value={"2022"}>2022</option>
          <option value={"2021"}>2021</option>
          <option value={"2020"}>2020</option>
          <option value={"2019"}>2019</option>
          <option value={"2018"}>2018</option>
          <option value={"2017"}>2017</option>
          <option value={"2016"}>2016</option>
          <option value={"2015"}>2015</option>
          <option value={"2014"}>2014</option>
          <option value={"2013"}>2013</option>
          <option value={"2012"}>2012</option>
          <option value={"2011"}>2011</option>
          <option value={"2010"}>2010</option>
          <option value={"2009"}>2009</option>
          <option value={"2008"}>2008</option>
          <option value={"2007"}>2007</option>
          <option value={"2006"}>2006</option>
          <option value={"2005"}>2005</option>
          <option value={"2004"}>2004</option>
          <option value={"2003"}>2003</option>
          <option value={"2002"}>2002</option>
          <option value={"2001"}>2001</option>
          <option value={"2000"}>2000</option>
          <option value={"1999"}>1999</option>
        </RegSearch>
        <TypeSearch
          title={"select transmition"}
          onChange={(e) => {
            if (e.target.value !== "Transmition-") {
              setTrans(e.target.value);
            }
          }}
        >
          <option>Transmition-</option>
          <option value={"automatic"}>Automatic</option>
          <option value={"manual"}>Manual</option>
        </TypeSearch>
      </SearchBarOutline>
      <Link href={`/cars/search?name=${Name}&trans=${Trans}&reg=${Reg}`}>
        <InputSearchButton type={"submit"}></InputSearchButton>
      </Link>
    </InputForm>
  );
}
