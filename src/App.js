import React, { useState, useEffect } from "react";
import Score from "./components/Score";
import { Board } from "./components/Board";
import "./styles.css";
import { ScoreProvider } from "./scoreContext";
import { CARD_STATE, CARD_DATA, CARD_IMG } from "./card-constants";
import { nanoid } from "nanoid";
import randomizeArray from "./helpers/randomizeArray";

// makes number of cards passed in. Returns <Card /> component
const makeCards = (data) => {
  let randomArray = randomizeArray(data.length);

  let results = randomArray.map((index) => {
    return {
      id: `card-${nanoid()}`,
      name: data[index].name,
      frontImg: data[index].front,
      backImg: CARD_IMG.BACK,
      blankImg: CARD_IMG.BLANK,
      showingImg: CARD_IMG.BACK,
      status: CARD_STATE.FACEDOWN,
    };
  });

  return results;
};

export default function App() {
  const [appKey, setAppKey] = useState(0);
  const [disableFlip, setDisableFlip] = useState(false);

  // New code
  const flipCardClickHandler = (event, id) => {
    let updatedCards = cards.map((card) => {
      if (card.id === id) {
        card.status = CARD_STATE.FACEUP;
        card.showingImg = card.frontImg;
        return card;
      }
      return card;
    });

    setCards(updatedCards);
  };

  const flipCardDown = () => {
    let updatedCards = cards.map((card) => {
      if (card.status === CARD_STATE.FACEUP) {
        card.status = CARD_STATE.FACEDOWN;
        card.showingImg = CARD_IMG.BACK;
        return card;
      }
      return card;
    });
    setCards(updatedCards);
  };

  const matchCards = () => {
    let updatedCards = cards.map((card) => {
      if (card.status === CARD_STATE.FACEUP) {
        card.status = CARD_STATE.MATCHED;
        card.showingImg = CARD_IMG.BLANK;
        return card;
      }
      return card;
    });

    setCards(updatedCards);
  };

  const [cards, setCards] = useState(makeCards(CARD_DATA));

  console.log("cards", cards);

  const [score, setScore] = useState(0);

  const checkMatch = (selectedCards) => {
    return selectedCards[0].name === selectedCards[1].name;
  };

  useEffect(() => {
    let selectedCards = cards.filter(
      (card) => card.status === CARD_STATE.FACEUP
    );

    if (selectedCards.length === 2) {
      setDisableFlip(true);
      console.log(selectedCards);
      setTimeout(() => {
        if (checkMatch(selectedCards) === false) {
          flipCardDown();
        } else {
          matchCards();
        }
        selectedCards = [];
        setDisableFlip(false);
      }, 1000);
    }
  }, [cards, flipCardDown]);

  useEffect(() => {
    setScore(
      cards.filter((card) => card.status === CARD_STATE.MATCHED).length / 2
    );
  }, [cards]);

  return (
    <div className="App" key={appKey}>
      <h1>Memory Game</h1>

      <Score score={score} />
      <Board
        cards={cards}
        flipCardClickHandler={flipCardClickHandler}
        disableFlip={disableFlip}
      />
    </div>
  );
}
