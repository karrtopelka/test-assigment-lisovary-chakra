import {
  Box,
  Button,
  Flex,
  Heading,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import React, { useState } from "react";
import task5 from "../../algorithms/task5";
import ContentText from "../../components/ContentText";
import HeadingText from "../../components/HeadingText";

const Task5 = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleXChange = (value) => {
    setX(value);
  };
  const handleYChange = (value) => {
    setY(value);
  };

  return (
    <>
      <HeadingText title="Parse mathematical expression (6 or 10 points)">
        You need to calculate the expression in which there are parentheses
        (round) and signs of addition and subtraction. To get 6 points -
        parentheses can not be nested. To get 10 points - can.
      </HeadingText>
      <ContentText title="realisation" column gap={35}>
        <Flex align="center" justify="center" wrap="wrap" style={{ gap: 15 }}>
          <NumberInput
            size="lg"
            allowMouseWheel
            value={x}
            onChange={handleXChange}
            variant="filled"
          >
            <NumberInputField placeholder="Enter X eg: 4" />
          </NumberInput>
          <NumberInput
            size="lg"
            allowMouseWheel
            value={y}
            onChange={handleYChange}
            variant="filled"
          >
            <NumberInputField placeholder="Enter Y eg: 4" />
          </NumberInput>
        </Flex>
        <Button
          disabled={isNaN(parseInt(x)) || isNaN(parseInt(y))}
          onClick={() =>
            task5(x, y).then((r) => {
              setX(r.a);
              setY(r.b);
            })
          }
          className="menu"
        >
          Swap numbers
        </Button>
        <Box align="center">
          {task5(x, y) && (
            <>
              <Heading as="h3" size="md" p="2">
                Result is:
              </Heading>
              <Flex
                align="center"
                justify="center"
                wrap="wrap"
                style={{ gap: 15 }}
              >
                <Heading as="h3" size="md" p="2">
                  X: <span style={{ color: "#d53f8c" }}>{x}</span>
                </Heading>
                <Heading as="h3" size="md" p="2">
                  Y: <span style={{ color: "#d53f8c" }}>{y}</span>
                </Heading>
              </Flex>
            </>
          )}
        </Box>
      </ContentText>
    </>
  );
};

export default Task5;
