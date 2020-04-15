import React from "react";
import Score from "./Score";
import Board from "./Board";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React - Memory Game</h1>
      <Score score="3" />
      <Board numCards="4" />
    </div>
  );
}
