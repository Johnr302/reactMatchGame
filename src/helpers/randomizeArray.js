import getRandomInt from "./getRandomInt";

// randomize array
const randomizeArray = (num) => {
  let results = [];
  let tempArray = [];
  // generate an array of number from 0 to num -1
  for (let i = 0; i < num; i++) {
    tempArray.push(i);
  }
  // need to use numbCards -1 and include 0 to create
  // a random array of numbers
  while (results.length < num) {
    results.push(tempArray.splice(getRandomInt(tempArray.length), 1)[0]);
  }

  return results;
};

export default randomizeArray;
