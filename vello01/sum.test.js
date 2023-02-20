const sum = require("./sum");

test("1 + 2 = 3", () => {
  expect(sum(1, 2)).toBe(3);
});

it("1 더하기 2는 3", () => {
  expect(sum(1, 2)).toEqual(3);
});
