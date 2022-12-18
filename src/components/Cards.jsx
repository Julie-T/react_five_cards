import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const Cards = () => {
  const props = {
    image: "...",
    title: "Card title",
    text: `Some quick example
     text to build on the card title
     and make up the bulk of the card's content.`,
    btn: "Go somewhere",
  };

  return (
    <>
      <Card {...props}/>
      <Card
        {...props}
        title="Special title treatment"
        text="With supporting text below
         as a natural lead-in to additional
         content."
      />
    </>
  );
};

Cards.propTypes = {};

export default Cards;
