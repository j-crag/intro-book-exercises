3. The following code causes an infinite loop (a loop that never stops iterating). Why?

let counter = 0;

while (counter = 1) {
console.log(counter);
counter += 1;

if (counter > 2) {
break;
}
}

---

The initializer 'counter = 1' always evaluates to a "truthy" value. The the initializer should be corrected to 'counter === 1'.
