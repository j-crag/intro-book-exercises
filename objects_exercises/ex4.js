/*
Create an array from the keys of the object obj below,
with all values converted to uppercase.
Your implementation must not mutate obj.
*/

let obj = {
  b: 2,
  a: 1,
  c: 3,
};

// using Object.keys and map

let objKeys = Object.keys(obj).map((keys) => keys.toUpperCase());

//console.log(objKeys);

// using forEach

let newKeys = [];
Object.keys(obj).forEach((key) => newKeys.push(key.toUpperCase()));

console.log(newKeys);
