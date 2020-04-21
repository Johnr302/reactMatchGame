import React, { useState } from "react";
import Score from "./components/Score";
import Board from "./components/Board";
import { ScoreProvider } from "./scoreContext";
import "./styles.css";

export default function App() {
  const [score, setScore] = useState(0);

  const values = {
    score: score,
    setScore: setScore
  };

  return (
    <div className="App">
      <h1>React - Memory Game</h1>
      <ScoreProvider value={values}>
        <Score />
        <Board numCards="8" />
      </ScoreProvider>
    </div>
  );
}
