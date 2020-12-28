import React from "react";
import "./card.css";
import { CARD_STATE } from "../card-constants.js";

const Card = (props) => {
  const { id, flipCardClickHandler, imgSrc, status, disableFlip } = props;
  const shouldFlip = status === CARD_STATE.FACEDOWN && disableFlip === false;

  return (
    <img
      src={imgSrc}
      className="card-container"
      alt=""
      onClick={
        shouldFlip ? (event) => flipCardClickHandler(event, id) : undefined
      }
    />
  );
};

export { Card };
