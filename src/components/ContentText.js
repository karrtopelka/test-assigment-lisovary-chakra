import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const ContentText = ({ title, children, column, gap }) => {
  return (
    <Flex direction="column" style={{ gap: 15 }}>
      <Box p="2">
        <Heading as="h3" size="md" align="center" color="#d53f8c">
          {title}
        </Heading>
      </Box>
      <Flex
        align="center"
        p="2"
        justify="space-evenly"
        mr="auto"
        ml="auto"
        wrap="wrap"
        style={{ gap: gap ? gap : 15 }}
        direction={column ? "column" : "row"}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default ContentText;
