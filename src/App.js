import React, { useState } from "react";
// import React, { Component } from "react";
import Score from "./components/Score";
import Board from "./components/Board";
import "./styles.css";
// import score
import { ScoreProvider } from "./scoreContext";
let numCards = 8;
export default function App() {
  const [score, setScore] = useState(0);
  const [win, setWin] = useState(false);
  const [appKey, setAppKey] = useState(0);

  return (
    <div className="App" key={appKey}>
      <h1>React - Memory Game</h1>
      <ScoreProvider
        value={{
          score: score,
          updateScore: () => {
            let updatedScore = score + 1;
            setScore(updatedScore);

            if (updatedScore === numCards / 2) {
              setWin(true);
            }
          },
          numCards: numCards,
          win: win,
          resetGame: () => {
            setAppKey(appKey + 1);
            setWin(false);
            setScore(0);
          },
          matchesArray: [],
        }}
      >
        <Score />
        <Board numCards={numCards} />
      </ScoreProvider>
    </div>
  );
}
