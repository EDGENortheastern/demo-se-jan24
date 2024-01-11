// Imports function numToRoman from index.js 👇
const { squareNumber } = require('./logic');

it("tests that jest is working", () => {
    expect(2+2).toBe(4);
});

it("tests squareNumber of 2 is 4", () => {
    expect(squareNumber(2)).toBe(4);
    expect(squareNumber(2)).not.toBe(5);
});

it("tests squareNumber of 6 is 36", () => {
    expect(squareNumber(6)).toBe(36);
    expect(squareNumber(6)).not.toBe(25);
});