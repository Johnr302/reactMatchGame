import randomizeArray from "../helperFunctions/randomizeArray";

test("randomizeArray creates an array of random numbers", () => {
  let result = randomizeArray(3);
  expect(result.length).toBe(3);
  expect(result).toContain(2, 0, 1);
});
