import getRandomInt from "../helpers/getRandomInt";

test("generates a random number between 0 and less than the number passed in", () => {
  let result = getRandomInt(5);
  expect(result).toBeLessThan(5);
  expect(result).toBeGreaterThan(-1);
});
