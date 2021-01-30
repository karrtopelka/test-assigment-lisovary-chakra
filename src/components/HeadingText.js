import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import React from "react";

const HeadingText = ({ children, title }) => {
  return (
    <>
      <Box p="2">
        <Heading as="h1" size="lg" align="center" ml="auto" mr="auto" w="75%">
          {title === true ? children : title}
        </Heading>
        {children && title !== true && (
          <Text as="p" size="md" pt="2" ml="auto" mr="auto" w="75%">
            Description: <p>{children}</p>
          </Text>
        )}
      </Box>
      <Divider />
    </>
  );
};

export default HeadingText;
