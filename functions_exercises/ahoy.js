// ahoy.js

// function declaration - can be invoked before it appears
greetPeople();

function greetPeople() {
  console.log("top of the mornin' to ya");
}

// function expression - cannot be invoked before it appears
let greetPeople1 = function () {
  console.log('red sky at night...');
};

greetPeople1();

// arrow function
let greetPeople2 = () => console.log("sailor's delight");
greetPeople2();
