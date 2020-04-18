import React from "react";
import "./card.css";

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

/*
  This will flip the card and check for matches
*/
const flipCard = (event) => {
  // flip the card
  const el = event.currentTarget;
  const cardId = el.getAttribute("data-id");
  const found = cardArray.find((element) => element.name === cardId);
  console.log(found.img);
  el.setAttribute("src", found.img);
  // timer to delay actions
  // push to chose card array
  // check for match
  // if march increase score and make images blank reset card chosen array
  //else flip cards back over
  //console.log(event.currentTarget.getAttribute("data-id"));
};

const Card = (props) => {
  const { index } = props;

  return (
    <img
      data-id={cardArray[index].name}
      src="https://wallpapertag.com/wallpaper/middle/5/8/b/836279-plain-blue-screen-wallpaper-1920x1080-1920x1080-full-hd.jpg"
      className="card-container"
      alt=""
      onClick={flipCard}
    />
  );
};

export default Card;
