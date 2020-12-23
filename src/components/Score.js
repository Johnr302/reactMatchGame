import React from "react";
import { ScoreConsumer } from "../scoreContext";

const Score = (props) => {
  const { score } = props;
  return <h2>Matches: {score}</h2>;
};

export default Score;
