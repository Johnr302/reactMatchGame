import React from "react";
import "./card.css";
import { ScoreConsumer } from "./scoreContext";

const blueBGurl =
  "https://wallpapertag.com/wallpaper/middle/5/8/b/836279-plain-blue-screen-wallpaper-1920x1080-1920x1080-full-hd.jpg";

const cardArray = [
  {
    name: "suzuki",
    img:
      "https://i0.wp.com/www.asphaltandrubber.com/wp-content/uploads/2020/02/2020-Suzuki-GSX-RR-MotoGP-scaled.jpg?fit=2560%2C1707&ssl=",
  },
  {
    name: "yamaha",
    img:
      "https://yamaha.scdn5.secure.raxcdn.com/library/img.jpg?id=5d1fbf682a0ab7466074b562&w=400",
  },
  {
    name: "akira",
    img:
      "https://3.bp.blogspot.com/-whgpj2_RpXE/XMlg16UnC3I/AAAAAAAAaok/6NGeYH2TfkQSJWfQ6VKqydywBe18Y4CigCLcBGAs/s1600/Mercenary%2BGarage%2BCustom%2BMotorcycle%2BWorkshop%2B%2BAkira%2BKaneda%2BBike%2BKitbash%2Bby%2BJames%2BQiu%2Bon%2BBehance%2B01.jpg",
  },
  {
    name: "mt10",
    img:
      "https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/Models/2020/f0926b63-edba-41cf-9a31-70d23677dcbf.png",
  },
  {
    name: "suzuki",
    img:
      "https://i0.wp.com/www.asphaltandrubber.com/wp-content/uploads/2020/02/2020-Suzuki-GSX-RR-MotoGP-scaled.jpg?fit=2560%2C1707&ssl=",
  },
  {
    name: "yamaha",
    img:
      "https://yamaha.scdn5.secure.raxcdn.com/library/img.jpg?id=5d1fbf682a0ab7466074b562&w=400",
  },
  {
    name: "akira",
    img:
      "https://3.bp.blogspot.com/-whgpj2_RpXE/XMlg16UnC3I/AAAAAAAAaok/6NGeYH2TfkQSJWfQ6VKqydywBe18Y4CigCLcBGAs/s1600/Mercenary%2BGarage%2BCustom%2BMotorcycle%2BWorkshop%2B%2BAkira%2BKaneda%2BBike%2BKitbash%2Bby%2BJames%2BQiu%2Bon%2BBehance%2B01.jpg",
  },
  {
    name: "mt10",
    img:
      "https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/Models/2020/f0926b63-edba-41cf-9a31-70d23677dcbf.png",
  },
];

let isMatch = [];

//this function takes an array two html elements
const isMatchFound = (arrayEl) => {
  // compares 2 sequential elements to see if the name matches and return boolean
  return (
    arrayEl[0].getAttribute("data-id") === arrayEl[1].getAttribute("data-id")
  );
};

/*
  This will flip the card and check for matches
*/
const flipCard = (event, updateScore) => {
  // flip the card
  const el = event.currentTarget;
  console.log(el);
  const cardId = el.getAttribute("data-id");
  const display = cardArray.find((element) => element.name === cardId);
  el.setAttribute("src", display.img);
  // push to chose card array
  isMatch.push(el);
  console.log(isMatch);

  // check for match
  if (isMatch.length === 2) {
    window.setTimeout(() => {
      if (isMatchFound(isMatch)) {
        isMatch.forEach((element) =>
          element.setAttribute(
            "src",
            "https://stayfurnished.com/skin/frontend/default/stylish/images/bg.png"
          )
        );
        // if match increase score and make images white
        updateScore();
      } else {
        isMatch.forEach((element) => element.setAttribute("src", blueBGurl));
        ///else flip cards back over reset to blue
      }
      isMatch = [];
    }, 1000);
  }
  // timer to delay actions
  //console.log(event.currentTarget.getAttribute("data-id"));
};

const Card = (props) => {
  const { index } = props;

  return (
    <ScoreConsumer>
      {(value) => {
        return (
          <img
            data-id={cardArray[index].name}
            src={blueBGurl}
            className="card-container"
            alt=""
            onClick={(event) => flipCard(event, value.updateScore)}
          />
        );
      }}
    </ScoreConsumer>
  );
};

export default Card;
