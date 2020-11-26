import React from "react";
import { Card } from "./Card.js";
import { ScoreConsumer } from "../scoreContext";

import randomizeArray from "../helperFunctions/randomizeArray";

import "./board.css";

// makes number of cards passed in. Returns <Card /> component
const makeCards = (num) => {
  let randomArray = randomizeArray(num);
  let results = [];

  for (let i = 0; i < randomArray.length; i++) {
    results.push(
      <Card key={randomArray[i].toString()} index={randomArray[i]} />
    );
  }

  console.log("making cards");

  return results;
};

let numCards = 12;
let cards = makeCards(numCards);
const Board = () => {
  return (
    <ScoreConsumer>
      {(value) => {
        return (
          <section id="board">
            {value.win ? (cards = makeCards(numCards)) : cards}
          </section>
        );
      }}
    </ScoreConsumer>
  );
};

export default Board;
