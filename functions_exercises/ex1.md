1. What does this code log to the console? Does executing the foo function affect the output? Why or why not?

let bar = 1;
function foo() {
let bar = 2;
}

foo();
console.log(bar);

---

foo(); ---> undefined
the function declares and initializes the variable bar in its inner/local scope. It doesn't affect anything outside its scope or return a value.

console.log(bar); ---> 1
'let bar = 1;' creates a global varialbe with the value 1. this logs to the console.
