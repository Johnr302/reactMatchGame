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
  const [win, setWin] = useState(false);
  const [isGameInitialized, setIsGameInitialized] = useState(false);
  const [appKey, setAppKey] = useState(0);
  const [matchesArray, setMatchesArray] = useState([]);

  //New code
  const [shuffledCards, setShuffledCards] = useState();

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

  const [score, setScore] = useState(
    cards.filter((card) => card.status === CARD_STATE.MATCHED).length / 2
  );

  const checkMatch = (selectedCards) => {
    return selectedCards[0].name === selectedCards[1].name;
  };

  useEffect(() => {
    let selectedCards = cards.filter(
      (card) => card.status === CARD_STATE.FACEUP
    );

    if (selectedCards.length === 2) {
      console.log(selectedCards);
      if (checkMatch(selectedCards) === false) {
        flipCardDown();
        selectedCards = [];
      } else {
        matchCards();
        selectedCards = [];
      }
    }
  }, [cards, flipCardDown]);

  return (
    <div className="App" key={appKey}>
      <h1>Memory Game</h1>
      <ScoreProvider
        value={{
          score: score,
          updateScore: () => {
            let updatedScore = score + 1;
            setScore(updatedScore);
          },
          updateMatchesArray: (val) => {
            setMatchesArray((prevVal) => {
              return [...prevVal, val];
            });
          },
          win: win,
          resetGame: () => {
            setAppKey(appKey + 1);
            setWin(false);
            setScore(0);
            setMatchesArray([]);
          },
          matchesArray: matchesArray,
          isGameInitialized: isGameInitialized,
          setIsGameInitialized: setIsGameInitialized,
        }}
      >
        <Score score={score} />
        <Board cards={cards} flipCardClickHandler={flipCardClickHandler} />
      </ScoreProvider>
    </div>
  );
}
