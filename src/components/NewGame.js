import React from "react";
import Button from "react-bootstrap/Button";

export default (props) => {
  const { newGameClickHandler } = props;
  return (
    <Button variant="outline-success" onClick={newGameClickHandler}>
      New Game
    </Button>
  );
};
