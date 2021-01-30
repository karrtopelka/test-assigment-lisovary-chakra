import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import ContentText from "../../components/ContentText";
import HeadingText from "../../components/HeadingText";

const Home = () => {
  return (
    <>
      <HeadingText title={true}>
        Test assigment for the position of Junior Software Developer (Intern) in
        the company
        <span style={{ color: "#d53f8c" }}> Lisovary</span>
      </HeadingText>
      <ContentText title="Choose task">
        {[...Array.from({ length: 5 }, (_, i) => i + 1)].map((m) => (
          <Link to={`task${m}`} key={m} className="menu">
            <Button size="lg">{`Task ${m}`}</Button>
          </Link>
        ))}
      </ContentText>
    </>
  );
};

export default Home;
