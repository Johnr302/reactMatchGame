const flipCard2 = (event, value) => {
  const el = event.currentTarget;
  // disable click on matched cards
  if (value.matchesArray.indexOf(el.getAttribute("data-index")) !== -1) {
    return;
  }
};

export default flipCard2;
