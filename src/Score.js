import React from "react";
import { ScoreConsumer } from "./scoreContext";

const Score = (props) => {
  const { score } = props;

  return (
    <ScoreConsumer>
      {(value) => {
        return <h2>Score: {value.score}</h2>;
      }}
    </ScoreConsumer>
  );
};

export default Score;
