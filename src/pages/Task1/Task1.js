import {
  Flex,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import task1 from "../../algorithms/task1";
import ContentText from "../../components/ContentText";
import HeadingText from "../../components/HeadingText";
import "../Pages.css";

const Task1 = () => {
  const [rows, setRows] = useState(3);
  const [icon, setIcon] = useState("*");

  const handleRowCountChange = (value) => setRows(value);
  const handleIconChange = (value) => setIcon(value);

  return (
    <>
      <HeadingText title="Triangles (4 points)">
        You need to display in the console from 1 to 6 isosceles triangles,
        depending on what number the user enters. For example, if the number 3
        is sent to enter the program, it is necessary to print 3 triangles, if
        the user enters 6, then print 6 triangles. Triangles should be displayed
        not in a column, but in a row. The size of the triangles is also formed
        by the user-entered number. As I said, if the user enters the number 3,
        it should print three isosceles triangles, the height of which is equal
        to - the 3rd. You can select any symbol to print triangles as you see
        fit, using an asterisk in the existing solution.
      </HeadingText>
      <ContentText title="realisation" column gap={35}>
        <Flex align="center" justify="center" wrap="wrap" style={{ gap: 20 }}>
          <NumberInput
            defaultValue={3}
            min={1}
            max={6}
            size="lg"
            allowMouseWheel
            value={rows}
            onChange={handleRowCountChange}
            variant="filled"
          >
            <NumberInputField placeholder="Number of rows eg: 4" />
          </NumberInput>
          <FormControl as="fieldset" w="auto">
            <FormLabel as="legend">
              Icon from which the tree will be built
            </FormLabel>
            <RadioGroup value={icon} onChange={handleIconChange}>
              <Stack spacing={4} direction="row" justify="center">
                <Radio value="*">*</Radio>
                <Radio value="-">-</Radio>
                <Radio value="+">+</Radio>
                <Radio value=".">.</Radio>
                <Radio value="%">%</Radio>
                <Radio value="$">$</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>
        </Flex>
        <Flex align="center" justify="center" wrap="wrap" style={{ gap: 20 }}>
          {rows <= 6 &&
            [...Array.from({ length: rows }, (_, i) => i + 1)].map((m) => (
              <pre className={"preText"} key={m}>
                {task1(parseInt(rows), icon)}
              </pre>
            ))}
        </Flex>
      </ContentText>
    </>
  );
};

export default Task1;
