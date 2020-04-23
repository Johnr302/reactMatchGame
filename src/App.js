import React, { useState } from "react";
// import React, { Component } from "react";
import Score from "./Score";
import Board from "./Board";
import "./styles.css";
// import score
import { ScoreProvider } from "./scoreContext";

export default function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <h1>React - Memory Game</h1>
      <ScoreProvider
        value={{
          score: score,
          updateScore: () => {
            setScore(score + 1);
          },
        }}
      >
        <Score />
        <Board numCards="8" />
      </ScoreProvider>
    </div>
  );
}
