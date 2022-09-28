import styled from "styled-components";
import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
import { BsCaretDownFill } from "react-icons/bs";

const MenuBody = styled.nav`
  min-height: 0.6rem;
  max-height: 6rem;
  /* background-color: ${(props) => props.theme.pallette.primary}; */
  padding: 0 1rem;
  /* border-bottom: 1px solid ${(props) => props.theme.pallette.secondary}; */
`;

interface MenuProps {
  justify?: string;
}
const MenuList = styled.ul<MenuProps>`
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.justify
      ? props.justify === "end"
        ? "flex-end"
        : "flex-start"
      : "flex-start"};
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
  min-width: 170px;
  top: 55px;
  right: 40px;
  /* margin: 0rem 10rem; */
  box-shadow: 1px 1px 0 0 hsla(0, 0%, 100%, 0.5), 0 3px 8px 0 #555a64;

  transform: translate(-45%);
  background-color: ${(props) => props.theme.pallette.primary};
  /* border-bottom: 1px solid ${(props) => props.theme.pallette.secondary}; */
  border-radius: 8px;
  padding: 1rem;
  overflow: hidden;

  animation: growDown 300ms ease-in-out forwards;
  transform-origin: top;

  @keyframes growDown {
    0% {
      transform: scaleY(0);
    }

    100% {
      transform: scaleY(1);
    }
  }
`;

export const DropdownItem = styled.a`
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
  children?: JSX.Element | JSX.Element[];
  justify: string;
}

export const DropdownMenu = ({
  isLight,
  setIsLight,
  children,
  justify,
}: Props) => {
  const [open, setOpen] = useState(false);
  // DropdownMenu.handleClickOutside = () => {
  //   setOpen(!open);
  // };
  return (
    <MenuBody>
      <MenuList justify={justify}>
        <MenuItem>
          <MenuAnchor onClick={() => setOpen(!open)}>
            <BsCaretDownFill />
          </MenuAnchor>
          {open && (
            <Dropdown onClick={() => setOpen(!open)}>{children}</Dropdown>
          )}
        </MenuItem>
      </MenuList>
    </MenuBody>
  );
};
// const clickOutsideConfig = {
//   handleClickOutside: DropdownMenu.handleClickOutside,
// };
// export default onClickOutside(DropdownMenu, clickOutsideConfig);

{
  /* <Link href={"/about"}>
                <DropdownItem>Contact Us</DropdownItem>
              </Link>

              <DropdownItem onClick={() => setIsLight(!isLight)}>
                Theme
              </DropdownItem>

              <Link href={"/about"}>
                <DropdownItem>Admin/Login</DropdownItem>
              </Link> */
}
