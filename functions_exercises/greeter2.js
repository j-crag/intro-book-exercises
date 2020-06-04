// greeter2.js

/*
original solution, mis read and wrote 2 seperate functions
with variables declared globally. 

let rlSync = require('readline-sync');
let first;
let last;

let firstName = function () {
  first = rlSync.question("What's your first name?\n");
};

let lastName = function () {
  last = rlSync.question("What's your last name?\n");
};

firstName();
lastName();
console.log(`Hello ${first} ${last}.`);
*/

// refactored with only 1 function, and most varibles
// declared locally.

function getName(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name;
}

let firstName = getName("What's your first name?\n");
let lastName = getName("What's your last name?\n");
console.log(`Hello, ${firstName} ${lastName}`);
