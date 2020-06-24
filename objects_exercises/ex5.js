// Create a new object named myObj that uses myProtoObj
// as its prototype.

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

// Add a qux property with value 3 to the myObj object we
// created in the previous exercise. Now, examine the following
// code snippets:

myObj['qux'] = 3;

// forEach only logs explicitly assigned keys to objects created
// using Object.create()

Object.keys(myObj).forEach(function (key) {
  console.log(key);
});

// 'for in' loop iterates over and logs ALL keys, including those inherited
for (let key in myObj) {
  console.log(key);
}

// access only 'own' keys, not those inherited

for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(key);
  }
}
