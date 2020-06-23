/* using map: If the element is an even value,
 ** then the corresponding element in the new array
 ** should contain the string 'even'; otherwise,
 ** the element in the new array should contain 'odd'.
 */

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

// map version

let evenOrOdd = myArray.map(function (num) {
  if (num % 2 === 0) {
    return 'even';
  }
  return 'odd';
});

console.log(evenOrOdd);

// for loop version

let answerLog = [];
for (let i = 0; i < myArray.length; i += 1) {
  let num = myArray[i];
  if (num % 2 === 0) {
    answerLog.push('even');
  } else {
    answerLog.push('odd');
  }
}

console.log(answerLog);
