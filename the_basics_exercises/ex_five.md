5. Explain why this code logs '510' instead of 15.

console.log('5' + 10);

Because the '+' operator is used for both math addition and string concatenation, the node engine avoids type confusion by implicitly coercing a number to a string when a number and string share the '+' operator in an expression.
