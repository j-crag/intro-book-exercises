What does the following code log to the console?

function scream(words) {
words = words + '!!!!';
return;
console.log(words);
}

scream('Yipeee');

---

scream('Yipeee') >> undefined.

the function returns before logging anything to the console. Nothing will be logged.
