5. Take a look at this code snippet:

let foo = 'bar';
{
let foo = 'qux';
}

console.log(foo);

What does this program log to the console? Why?

---

'bar' will be logged to the console.

the 'let' keyword declares 'foo' and initializes it with 'bar' in global score. Inside the block, another new variable 'foo' is also declared and initialized. The variables were declared using let in 2 different scopes, thus allowing them to exist without affecting eachother.

If the code didn't incldue the 'let' declaration inside the block, the 'foo' variable would've searched outside its current scope and changed the value to 'qux'.

ex:

let foo = 'bar';

{
foo = 'qux';
}

console.log(foo); >> 'qux'
