import randomizeArray from "../helperFunctions/randomizeArray";

test("creates an array of random numbers from 0 to one less than the number passed in", () => {
  let result = randomizeArray(3);
  expect(result.length).toBe(3);
  expect(result).toContain(2, 0, 1);
});
