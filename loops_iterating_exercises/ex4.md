Does the following code produce an error? Why or why not? What output does this code send to the console?

for (let i = 0; i < 5;) {
console.log(i += 1);
}

---

There aren't any errors. All params of the for loop are optional. the initializer is incremented on line 2 before anything is logged to the console.
