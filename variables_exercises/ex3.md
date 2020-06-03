3. What happens when you run the following program? Why do we get that result?

{
let foo = 'bar';
}

console.log(foo);

This will result in a reference error. In this example, the variable 'foo' was declared with 'let' and has block scop. Therefore, it's not accessible outside of the block it was declared.
