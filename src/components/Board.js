import React from "react";
import { Card } from "./Card.js";
import { ScoreConsumer } from "../scoreContext";

import "./board.css";

const Board = (props) => {
  const { cards, flipCardClickHandler } = props;

  return (
    <ScoreConsumer>
      {(value) => {
        return (
          <section id="board">
            {/* {value.win
              ? (cards.current = makeCards(data, flipCardClickHandler))
              : cards.current} */}
            {cards.map((card, index) => {
              return (
                <Card
                  key={index.toString()}
                  id={card.id}
                  imgSrc={card.showingImg}
                  flipCardClickHandler={flipCardClickHandler}
                  status={card.status}
                />
              );
            })}
          </section>
        );
      }}
    </ScoreConsumer>
  );
};

export { Board };
