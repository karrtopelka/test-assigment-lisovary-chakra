import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaLinkedin,
  FaArrowDown,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
    <div>
      <Flex
        align="center"
        justify="space-between"
        p="4"
        width="100vw"
        wrap="wrap"
        style={{ gap: 10 }}
      >
        <Logo />
        <HeaderMenu />
        <SocialLinks />
      </Flex>
      <Divider />
    </div>
  );
};

export default Header;
