// greeter.js

// exercise 1
let rlSync = require('readline-sync');
let name = rlSync.question("What's your name?\n");
console.log(`Hello, ${name}!`);

// exercise 2
let firstName = rlSync.question('Hello. What is your first name?\n');
let lastName = rlSync.question(
  "Oh my, sorry to bother, but what's your last name?\n"
);
console.log(
  `Follow my voice as I show you around the station, ${
    firstName + ' ' + lastName
  }. I truly hope you enjoy your stay...`
);
