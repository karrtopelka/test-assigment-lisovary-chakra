import { Box, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import ContentText from "../../components/ContentText";
import HeadingText from "../../components/HeadingText";
import DatePicker from "react-date-picker";
import task3 from "../../algorithms/task3";

const Task3 = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (e) => {
    setSelectedDate(e);
  };

  return (
    <>
      <HeadingText title="Day of the week (3 points)">
        Write a program that will calculate the day of the week on the specified
        date.
      </HeadingText>
      <ContentText title="realisation" column gap={35}>
        <DatePicker
          onChange={handleDateChange}
          value={selectedDate}
          format="dd.MM.y"
          className="date-picker"
        />
        <Box align="center">
          {task3(selectedDate) ? (
            <>
              <Heading as="h3" size="md" p="2">
                Name of the day of the selected date is:
              </Heading>
              <Heading as="h5" size="xl" style={{ color: "#d53f8c" }}>
                {task3(selectedDate)}
              </Heading>
            </>
          ) : (
            <Heading as="h3" size="md" p="2">
              Date is not selected
            </Heading>
          )}
        </Box>
      </ContentText>
    </>
  );
};

export default Task3;
