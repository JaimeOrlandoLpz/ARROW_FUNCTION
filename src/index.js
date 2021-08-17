import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

let numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.

const squared = numbers.map((number) => {
  return number * number;
});

console.log(squared);

//////Filter - Create a new array by keeping the items that return true.

const newNumbers = numbers.filter((number) => {
  return number < 10;
});
console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

let reduced = numbers.reduce((accum, number) => {
  return accum + number;
});

console.log(reduced);

////Find - find the first item that matches from an array.
const firsLowerThan10 = numbers.find((number) => {
  return number < 10;
});
console.log(firsLowerThan10);

////FindIndex - find the index of the first item that matches.
const firstIndexOFLowerThan10 = numbers.findIndex((number) => {
  return number < 10;
});
console.log(firstIndexOFLowerThan10);
