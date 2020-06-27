//What does the following function do?

function doSomething(string) {
  return string
    .split(' ')
    .reverse()
    .map((value) => value.length);
}

// the function uses method chaining to split a string input at its
// spaces, reverse the return value of the split then iterates over the
// string storing the length of each value in an array.

// ex:
let words = doSomething('hello there');
console.log(words); // >> [5, 5]
