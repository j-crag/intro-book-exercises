4. What does the following code log to the console, and why?

function barCodeScanner(serial) {
switch (serial) {
case '123':
console.log('Product1');
case '113':
console.log('Product2');
case '142':
console.log('Product3');
default:
console.log('Product not found!');
}
}

barCodeScanner('113');

---

this will log 'product2, product3, product not found!' to the console. This swtich statement 'falls through' because there are no break statements to terminate it.
