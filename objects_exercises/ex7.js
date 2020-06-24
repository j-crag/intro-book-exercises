// Create a function that creates and returns a copy of an object.
// The function takes two arguments: the object to copy and an array
// of the keys that you want to copy. You can omit the array of keys,
// in which case you should copy all the keys of the object.

let objToCopy = {
  foo: 1,
  bar: 2,
};

function copyObj(sourceObject, keys) {
  let destinationObject = {};
  if (keys) {
    keys.forEach(function (key) {
      destinationObject[key] = sourceObject[key];
    });

    return destinationObject;
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
}

console.log(copyObj(objToCopy, ['foo']));
console.log(copyObj(objToCopy, ['bar']));
console.log(copyObj(objToCopy));

// ouch this was hard, come back and review
