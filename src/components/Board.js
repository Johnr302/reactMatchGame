import React from "react";
import { Card } from "./Card.js";
import "./board.css";

const Board = (props) => {
  const { cards, flipCardClickHandler, disableFlip } = props;

  return (
    <section id="board">
      {cards.map((card, index) => {
        return (
          <Card
            key={index.toString()}
            id={card.id}
            imgSrc={card.showingImg}
            flipCardClickHandler={flipCardClickHandler}
            status={card.status}
            disableFlip={disableFlip}
          />
        );
      })}
    </section>
  );
};

export { Board };
