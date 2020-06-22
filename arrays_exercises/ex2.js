// log all even values to console

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

// for each version

myArray.forEach(function (num) {
  if (num % 2 === 0) {
    console.log(num);
  }
});

// filter version

let evens = myArray.filter((num) => num % 2 === 0);
console.log(evens);

// for loop

for (let i = 0; i < myArray.length; i += 1) {
  if (myArray[i] % 2 === 0) {
    console.log(myArray[i]);
  }
}
