import React, { useState, useEffect } from "react";
import Score from "./components/Score";
import { Board } from "./components/Board";
import "./styles.css";
import { CARD_STATE, CARD_DATA, CARD_IMG } from "./card-constants";
import { nanoid } from "nanoid";
import randomizeArray from "./helpers/randomizeArray";
import GameOver from "./components/GameOver";
import NewGame from "./components/NewGame";
import "bootstrap/dist/css/bootstrap.min.css";

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
  const [gameOver, setGameOver] = useState(false);

  // New code
  const newGameClickHandler = () => {
    setCards(makeCards(CARD_DATA));
    setGameOver(false);
  };

  const flipCardClickHandler = (event, id) => {
    let updatedCards = cards.map((card) => {
      if (card.id === id) {
        return {
          ...card,
          status: CARD_STATE.FACEUP,
          showingImg: card.frontImg,
        };
      }
      return card;
    });

    setCards(updatedCards);
  };

  const flipCardDown = () => {
    let updatedCards = cards.map((card) => {
      if (card.status === CARD_STATE.FACEUP) {
        return {
          ...card,
          status: CARD_STATE.FACEDOWN,
          showingImg: CARD_IMG.BACK,
        };
      }
      return card;
    });
    setCards(updatedCards);
  };

  const matchCards = () => {
    let updatedCards = cards.map((card) => {
      if (card.status === CARD_STATE.FACEUP) {
        return {
          ...card,
          status: CARD_STATE.MATCHED,
          showingImg: CARD_IMG.BLANK,
        };
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
      }, 500);
    }
  }, [cards, flipCardDown]);

  useEffect(() => {
    setScore(
      cards.filter((card) => card.status === CARD_STATE.MATCHED).length / 2
    );
  }, [cards]);

  useEffect(() => {
    const matches = (currentValue) =>
      currentValue.status === CARD_STATE.MATCHED;
    if (cards.every(matches)) {
      setGameOver(true);
    }
  }, [cards]);

  return (
    <div className="App" key={appKey}>
      <h1>Memory Game</h1>

      <Score score={score} />
      {gameOver ? <GameOver /> : ""}
      {gameOver ? <NewGame newGameClickHandler={newGameClickHandler} /> : ""}
      <Board
        cards={cards}
        flipCardClickHandler={flipCardClickHandler}
        disableFlip={disableFlip}
      />
    </div>
  );
}
