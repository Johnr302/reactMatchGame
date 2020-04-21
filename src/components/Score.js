import React, { useContext } from "react";
import ScoreContext from "../scoreContext";

const Score = () => {
  const state = useContext(ScoreContext)
  return <h2>Score: {state.score}</h2>;
};

export default Score;
