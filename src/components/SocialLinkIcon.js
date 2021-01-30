import { IconButton } from "@chakra-ui/react";
import React from "react";

const SocialLinkIcon = ({ link, label, icon }) => {
  return (
    <a rel="noreferrer" target="_blank" href={link} aria-label={label}>
      <IconButton className="social" aria-label={label} icon={icon} />
    </a>
  );
};

export default SocialLinkIcon;
