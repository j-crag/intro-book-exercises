What does the following program log to the console? Why?

let foo = {
a: 'hello',
b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
argument1.a = 'hi';
argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

---

> > 'hi'
> > 'hello'

function 'bar' takes the object literal 'foo' as its first argumnet and upon invocation reassigns argument.a to 'hi'. The reason this works is because objects are mutable. the argument2 reassignment does not work because strings are immutable. If you wanted a 'qux' variable to log 'hi' as well, you would need to create and log the variable to the console from within the functions scope.
