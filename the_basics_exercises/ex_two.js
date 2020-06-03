/*
 ** Use the arithmetic operators to determine the individual digits
 ** of a 4-digit numberlike 4936:
 **
 ** example output:
 **    thousands place is 4
 **    hundreds place is 9
 **    tens place is 3
 **    ones place is 6
 **
 */

// define number and derive ones place digit
let num = 4936;
let ones = 4936 % 10;

// update number and derive tens place digit
num = (num - ones) / 10;
let tens = num % 10;

// update number and derive hundreds place digit
num = (num - tens) / 10;
let hunds = num % 10;

// update number and derive thousands palce digit
num = (num - hunds) / 10;
let thousands = num;

//string interpolation used to print results to console.
console.log(`the thousands place is ${thousands}, the hundreds place is ${hunds},
the tens palce is ${tens}, the ones place is ${ones}.`);
