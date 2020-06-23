// Without using a for, while, or do/while loop, write some code
// that checks whether the number 3 appears inside these arrays:

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkForThree(arr1, arr2, arr3) {
  return [arr1, arr2, arr3].map(function (el) {
    return el.includes(3);
  });
}

console.log(checkForThree(numbers1, numbers2, numbers3));
