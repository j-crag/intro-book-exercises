// print evens

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

// // for loop version

for (let i = 0; i < myArray.length; i += 1) {
  for (let j = 0; j < myArray[i].length; j += 1) {
    let value = myArray[i][j];
    if (value % 2 === 0) {
      console.log(value);
    }
  }
}

// // for loop with inner forEach

for (let i = 0; i < myArray.length; i += 1) {
  let step = myArray[i];
  step.forEach(function (num) {
    if (num % 2 === 0) {
      console.log(num);
    }
  });
}

// double for each

myArray.forEach(function (nestedArray) {
  nestedArray.forEach(function (num) {
    if (num % 2 === 0) {
      console.log(num);
    }
  });
});

// for each + filter

myArray.forEach(function (nestedArray) {
  let evens = nestedArray.filter((num) => num % 2 === 0);
  console.log(evens);
});
