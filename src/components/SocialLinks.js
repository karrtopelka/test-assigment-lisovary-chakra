import { HStack } from "@chakra-ui/react";
import React from "react";
import { FaInstagram, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import SocialLinkIcon from "./SocialLinkIcon";

const SocialLinks = () => {
  return (
    <HStack>
      <SocialLinkIcon
        link="https://instagram.com/karrtopelka"
        label="Instagram"
        icon={<FaInstagram />}
      />
      <SocialLinkIcon
        link="https://t.me/karrtopelka"
        label="Telegram"
        icon={<FaTelegramPlane />}
      />
      <SocialLinkIcon
        link="https://www.linkedin.com/in/karrtopelka/"
        label="LinkedIn"
        icon={<FaLinkedin />}
      />
    </HStack>
  );
};

export default SocialLinks;
