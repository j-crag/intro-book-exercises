What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

---

array2 >> [1,4,3]

array and object values are stored in the memory heap. the variable names 'array1' and 'array2' reference or point to the location of the value in the heap. mutating either of the references will alter the value stored in the heap. Both variable names are referencing the same value in the heap.
