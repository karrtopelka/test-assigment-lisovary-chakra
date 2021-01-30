import React, { useState } from "react";
import HeadingText from "../../components/HeadingText";
import ContentText from "../../components/ContentText";
import { Flex, Heading, NumberInput, NumberInputField } from "@chakra-ui/react";
import task2 from "../../algorithms/task2";

const Task2 = () => {
  const [inputNumbers, setInputNumbers] = useState([0, 0, 0, 0]);

  const handleNumberChange = (val, i) => {
    setInputNumbers(
      Object.assign([], inputNumbers, {
        [i]: isNaN(parseInt(val, 10)) ? 0 : parseInt(val, 10),
      })
    );
  };

  return (
    <>
      <HeadingText title="GCD for 4 numbers (3 points)">
        Find NSD for 4 numbers. GCD - the greatest number for two or more
        numbers, into which these numbers are divisible without remainder. For
        example GCD for two numbers 15 and 10 =&gt; 5
      </HeadingText>
      <ContentText title="realisation" column gap={35}>
        <Flex align="center" justify="center" wrap="wrap" style={{ gap: 15 }}>
          {[...Array(4)].map((m, i) => (
            <NumberInput
              size="lg"
              allowMouseWheel
              value={inputNumbers[i]}
              onChange={(value) => handleNumberChange(value, i)}
              variant="filled"
            >
              <NumberInputField placeholder="Number eg: 4" />
            </NumberInput>
          ))}
        </Flex>
        <Flex
          direction="column"
          align="center"
          justify="center"
          wrap="wrap"
          style={{ gap: 20 }}
        >
          <Heading as="h3" size="md">
            GCD for {inputNumbers.join(", ")} is:
          </Heading>
          <Heading as="h5" size="xl" style={{ color: "#d53f8c" }}>
            {task2(
              task2(inputNumbers[0], inputNumbers[1]),
              task2(inputNumbers[2], inputNumbers[3])
            )}
          </Heading>
        </Flex>
      </ContentText>
    </>
  );
};

export default Task2;
