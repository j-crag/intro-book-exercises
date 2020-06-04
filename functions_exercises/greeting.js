// greeting.js - global
let greetingMessage = 'Good Morning';

console.log(greetingMessage);

// greeting.js - local

// usees global variable to output message
function greetPeople() {
  console.log(greetingMessage);
}

// changes global variable from inside functions local scope
function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

changeGreetingMessage('Good Evening');
greetPeople();
console.log(greetingMessage);

// greeting with parameter defined
function greetPeople2(greetingMessage) {
  console.log(greetingMessage);
}

greetPeople2('hi');
