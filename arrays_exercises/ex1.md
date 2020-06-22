In the following code, what are the final length values for array1, array2, array3, array4, and array5?

let array1 = [1, 2, undefined, 4];

let array2 = [1];
array2.length = 5;

let array3 = [];
array3[-1] = [1];

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

let array5 = [];
array5[100] = 3;

---

array1.length = 4;

array2.length = 5; // [1, <4 empty items>];

array3.length = 0; // use Object.keys(array3).length to access length of object properties.

array4.length = 3; // [1,2,3] // truncates the rest of the array.

array5.length = 101; // [<100 empty items>, 3];
