import React from "react";
import { Card } from "./Card.js";
import { ScoreConsumer } from "../scoreContext";
import "./board.css";

// random int function
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// randomize array
const randomizeArray = (num) => {
  let results = [];
  let tempArray = [];
  // generate an array of number from 0 to num -1
  for (let i = 0; i < num; i++) {
    tempArray.push(i);
  }
  // need to use numbCards -1 and include 0 to create
  // a random array of numbers
  while (results.length < num) {
    results.push(tempArray.splice(getRandomInt(tempArray.length), 1)[0]);
  }

  return results;
};

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
