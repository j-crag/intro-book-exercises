/* Use the filter method to implement a function that returns
 ** a new array with all of the integers from the input array.
 ** It should ignore all non-integer values from the input.
 */

let arr1 = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function removeNonInteger(arr) {
  return arr.filter(function (num) {
    return Number.isInteger(num);
  });
}

let newArray = removeNonInteger(arr1);
console.log(newArray);

// very short very sweet version

function removeNonInteger2(arr) {
  return arr.filter(Number.isInteger);
}

let newArray2 = removeNonInteger2(arr1);
console.log(newArray2);
