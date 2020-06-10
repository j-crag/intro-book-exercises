// Modify the age.js program you wrote in the exercises for the
// Input/Output chapter. The updated code should use a for loop to
// display the future ages.

let rlSync = require('readline-sync');
let age = rlSync.question('Sorry to be rude, but how old are you really?\n');
age = parseInt(age);

console.log(`Oh wow you're only ${age} years old!??`);

for (let future = 10; future < 40; future += 10) {
  console.log(`in ${future} years, you'll only be ${age + future} years old.`);
}
