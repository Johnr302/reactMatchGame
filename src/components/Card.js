import React from "react";
import "./card.css";
import { ScoreConsumer } from "../scoreContext";
import constants from "./constants.js";

let isMatch = [];

// This function takes an array two html elements
// Returns: boolean - true if match found, false otherwise
const isMatchFound = (arrayEl) => {
  // compares 2 sequential elements to see if the name matches and return boolean
  return (
    arrayEl[0].getAttribute("data-id") === arrayEl[1].getAttribute("data-id")
  );
};

/*z
    This will flip the card and check for matches
  */
const flipCard = (event, value) => {
  const el = event.currentTarget;
  // disable click on matched cards
  if (value.matchesArray.indexOf(el.getAttribute("data-index")) !== -1) {
    return;
  }
  // disabling triple clicks
  if (isMatch.length === 2) {
    return;
  }
  const cardId = el.getAttribute("data-id");
  const display = constants.cardArray.find(
    (element) => element.name === cardId
  );
  el.setAttribute("src", display.img);
  if (!isMatch.find((element) => element === el)) {
    // push to chose card array

    isMatch.push(el);
  }
  // check for match
  if (isMatch.length === 2) {
    window.setTimeout(() => {
      if (isMatchFound(isMatch)) {
        isMatch.forEach((element) => {
          element.setAttribute(
            "src",
            "https://stayfurnished.com/skin/frontend/default/stylish/images/bg.png"
          );
          value.updateMatchesArray(element.getAttribute("data-index"));
        });
        // if match increase score and make images white
        value.updateScore();
      } else {
        // else flip cards back over reset to blue
        isMatch.forEach((element) =>
          element.setAttribute("src", constants.blueBGurl)
        );
      }
      // reset array to check for matches
      isMatch = [];
      // timer to delay actions
    }, 1000);
  }
};

const Card = (props) => {
  const { index } = props;

  return (
    <ScoreConsumer>
      {(value) => {
        return (
          <img
            data-id={constants.cardArray[index].name}
            src={constants.blueBGurl}
            className="card-container"
            alt=""
            data-index={index}
            onClick={(event) => flipCard(event, value)}
          />
        );
      }}
    </ScoreConsumer>
  );
};

export { isMatchFound, Card };
