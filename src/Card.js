import React from "react";
import "./card.css";

const cardArray = [
  {
    name: "suzuki",
    img: "https://lh3.googleusercontent.com/proxy/HkcybRVgKTQqrkdfnEuPTjfxOM-DH-_Wl6rb6_7Or1TEQHJvlOeGk6OEWrEeW2QH1JHiduAojRsNisYBNlxmeK3a_iXcgXiyVaBiaB8SpTr02w3euGOb7HAwkXXWe7jBv-eTvMPwgUQguqZMn05BaX_j4U61pzTQHGe70wmJzdH0RVDynGKvUHDjwk76UWcFKiKbliQGVpu9ZZnSxjRAAdHWI6Xbwa4ce0m3PA"
  },
  {
    name: "yamaha",
    img: "https://yamaha.scdn5.secure.raxcdn.com/library/img.jpg?id=5d1fbf682a0ab7466074b562&w=400"
  },
  {
    name: "akira",
    img: "https://3.bp.blogspot.com/-whgpj2_RpXE/XMlg16UnC3I/AAAAAAAAaok/6NGeYH2TfkQSJWfQ6VKqydywBe18Y4CigCLcBGAs/s1600/Mercenary%2BGarage%2BCustom%2BMotorcycle%2BWorkshop%2B%2BAkira%2BKaneda%2BBike%2BKitbash%2Bby%2BJames%2BQiu%2Bon%2BBehance%2B01.jpg"
  },
  {
    name: "bmw",
    img: "https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/Models/2020/f0926b63-edba-41cf-9a31-70d23677dcbf.png"
  }
];

const flipCard = (event) => {
  // flip the card
  // timer to delay actions
  // push to chose card array
  // check for match
  // if march increase score and make images blank reset card chosen array
  //else flip cards back over 
  alert('clicked', event.target)
};

const Card = () => {
  return (
    <img 
      data-id={cardArray[0].name} 
      src={cardArray[0].img} 
      class="card-container" 
      alt="" 
      onClick={flipCard}
    />
  );
};

export default Card;
