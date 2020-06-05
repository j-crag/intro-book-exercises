// evenOrOdd.js

// if, else statement
function evenOrOdd(num) {
  if (Number.isInteger(num)) {
    if (num % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not an integer. please enter an integer, m8.');
    return;
  }
}

evenOrOdd('a');
evenOrOdd(2);
evenOrOdd(3);

// ternary
function evenOrOdd2(num) {
  num % 2 === 0 ? console.log('even') : console.log('odd');
}

evenOrOdd2(2);
evenOrOdd2(3);
