import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Box mr="4">
      <Link to="/" className="logo">
        <Heading size="md">KARRTOPELKA</Heading>
      </Link>
    </Box>
  );
};

export default Logo;
