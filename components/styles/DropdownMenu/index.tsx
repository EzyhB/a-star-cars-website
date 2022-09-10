import styled from "styled-components";
import React, { useState } from "react";
import Link from "next/link";

const MenuBody = styled.nav`
  min-height: 0.6rem;
  max-height: 6rem;
  /* background-color: ${(props) => props.theme.pallette.primary}; */
  padding: 0 1rem;
  /* border-bottom: 1px solid ${(props) => props.theme.pallette.secondary}; */
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

const MenuItem = styled.li`
  width: 60 * 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuAnchor = styled.a`
  color: ${(props) => props.theme.pallette.text};
  text-decoration: none;
  background-color: ${(props) => props.theme.pallette.primary};
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;

  &:hover {
    background-color: ${(props) => props.theme.pallette.primary};
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  min-width: 200px;
  top: 70px;
  transform: translate(-45%);
  background-color: ${(props) => props.theme.pallette.primary};
  border-bottom: 1px solid ${(props) => props.theme.pallette.secondary};
  border-radius: 8px;
  padding: 1rem 1rem;
  overflow: hidden;
  animation: growDown 300ms ease-in-out forwards;
  transform-origin: top center;

  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }

    100% {
      transform: scaleY(1);
    }
  }
`;

const DropdownItem = styled.a`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 8px;

  transition: filter 300ms;
  padding: 0.5rem;

  &:hover {
    background-color: ${(props) => props.theme.pallette.primary};
    filter: brightness(0.9);
    cursor: pointer;
  }
`;

interface Props {
  isLight: boolean;
  setIsLight: Function;
}

export const DropdownMenu = ({ isLight, setIsLight }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <MenuBody>
      <MenuList>
        <MenuItem>
          <MenuAnchor onClick={() => setOpen(!open)}>M</MenuAnchor>
          {open && (
            <Dropdown>
              <Link href={"/about"}>
                <DropdownItem>Contact Us</DropdownItem>
              </Link>

              <DropdownItem onClick={() => setIsLight(!isLight)}>
                Theme
              </DropdownItem>

              <Link href={"/about"}>
                <DropdownItem>Admin/Login</DropdownItem>
              </Link>
            </Dropdown>
          )}
        </MenuItem>
      </MenuList>
    </MenuBody>
  );
};
