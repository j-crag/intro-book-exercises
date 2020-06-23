//Write a function similar to the oddLengths function from Exercise 6,
//but don't use map or filter. Instead, try to use the reduce method.

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  return arr.reduce(function (acc, val) {
    if (val.length % 2 !== 0) {
      acc.push(val.length);
    }
    return acc;
  }, []);
}
console.log(oddLengths(arr)); // => [1, 5, 3]
