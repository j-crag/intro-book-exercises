6. What does this code output to the console?

function isArrayEmpty(arr) {
if (arr) {
console.log('Not Empty');
} else {
console.log('Empty');
}
}

isArrayEmpty([]); // [] is an empty Array

---

'not empty'

the [] is a truthy value, which triggers the 'if' block of code.
