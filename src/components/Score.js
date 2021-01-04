import React from "react";

const Score = (props) => {
  const { score } = props;
  return <h2>Matches: {score}</h2>;
};

export default Score;
