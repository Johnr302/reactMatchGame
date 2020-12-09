import React, { useEffect, useState } from "react";
import { Card } from "./Card.js";
import { ScoreConsumer } from "../scoreContext";
import randomizeArray from "../helpers/randomizeArray";
import { CARDSTATE, CARD_DATA } from "../CARD_DATA.js";

import "./board.css";

// makes number of cards passed in. Returns <Card /> component
const makeCards = (num, cardState, flipCardClickHandler) => {
  let randomArray = randomizeArray(num);
  console.log("random", randomArray);
  let results = [];

  for (let i = 0; i < randomArray.length; i++) {
    results.push(
      <Card
        key={randomArray[i].toString()}
        index={randomArray[i]}
        cardState={cardState}
        flipCardClickHandler={flipCardClickHandler}
      />
    );
  }

  return results;
};

let numCards = 12;
// let cards = makeCards(numCards);

const Board = (props) => {
  const { data } = props;
  console.log(data);
  let cards = makeCards(numCards);

  const [cardState, setCardState] = useState(CARDSTATE.FACEDOWN);
  const [image, setImage] = useState(CARD_DATA.back);

  const flipCardClickHandler = (event, index) => {
    const flippedImageUrl = CARD_DATA[index].img;

    setCardState(CARD_DATA.FACEUP);
    setImage(flippedImageUrl);
  };

  return (
    <ScoreConsumer>
      {(value) => {
        return (
          <section id="board">
            {value.win
              ? (cards.current = makeCards(
                  numCards,
                  cardState,
                  flipCardClickHandler
                ))
              : cards.current}
            {/* {cards} */}
          </section>
        );
      }}
    </ScoreConsumer>
  );
};

export { Board, makeCards };
