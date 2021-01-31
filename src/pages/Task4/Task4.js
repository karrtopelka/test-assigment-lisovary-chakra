import { Box, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import task4 from "../../algorithms/task4";
import ContentText from "../../components/ContentText";
import HeadingText from "../../components/HeadingText";

const Task4 = () => {
  const [value, setValue] = useState("1+(2-(6+4))");
  const handleChange = (event) => setValue(event.target.value);

  return (
    <>
      <HeadingText title="Parse mathematical expression (6 or 10 points)">
        You need to calculate the expression in which there are parentheses
        (round) and signs of addition and subtraction. To get 6 points -
        parentheses can not be nested. To get 10 points - can.
      </HeadingText>
      <ContentText title="realisation" column gap={35}>
        <Input
          variant="filled"
          placeholder="Ex: 1+(2-(6+4))"
          value={value}
          onChange={handleChange}
          isInvalid={value.length === 0}
        />
        <Box align="center">
          {task4(value) ? (
            <>
              <Heading as="h3" size="md" p="2">
                Result for {value} is:
              </Heading>
              <Heading as="h5" size="xl" pt="2" style={{ color: "#d53f8c" }}>
                {task4(value)}
              </Heading>
            </>
          ) : (
            <Heading as="h3" size="xl" p="2">
              Can't calculate
            </Heading>
          )}
        </Box>
      </ContentText>
    </>
  );
};

export default Task4;
