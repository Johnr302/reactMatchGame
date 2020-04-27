import React, { useState } from "react";
// import React, { Component } from "react";
import Score from "./Score";
import Board from "./Board";
import "./styles.css";
// import score
import { ScoreProvider } from "./scoreContext";
const numCards = 8;
export default function App() {
  const [score, setScore] = useState(0);
  const [win, setWin] = useState(false);
  return (
    <div className="App">
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
        }}
      >
        <Score />
        <Board numCards={numCards} />
      </ScoreProvider>
    </div>
  );
}
