// multiply.js

function multiply(num1, num2) {
  return num1 * num2;
}

function getNum(prompt) {
  let rlSync = require('readline-sync');
  return Number(rlSync.question(prompt));
}

let num1 = Number(getNum('Enter a number: '));
let num2 = Number(getNum('Please enter one more number: '));

console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
