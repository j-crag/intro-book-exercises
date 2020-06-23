/* Use map and filter to first determine the lengths of all
 ** the elements in an array of string values, then discard
 ** the even values (keep the odd values).
 */

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// my first verson

function oddLengths(arr) {
  let lengths = arr.map(function (element) {
    return element.length;
  });
  let odds = lengths.filter(function (element) {
    return element % 2 !== 0;
  });
  return odds;
}

console.log(oddLengths(arr));

// chained second version

function oddLengths2(arr) {
  let lengths = arr
    .map(function (letters) {
      return letters.length;
    })
    .filter((number) => {
      return number % 2 !== 0;
    });
  return lengths;
}

console.log(oddLengths2(arr));
