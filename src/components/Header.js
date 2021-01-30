import { Divider, Flex } from "@chakra-ui/react";
import React from "react";
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
