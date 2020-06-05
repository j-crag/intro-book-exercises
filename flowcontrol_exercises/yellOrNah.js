/*
Write a function that takes a string as an argument 
and returns an all-caps version of the string when the 
string is longer than 10 characters. Otherwise,
it should return the original string.
Example: change 'hello world' to 'HELLO WORLD',
but don't change 'goodbye'.
*/

// statment
function yellOrNah(str) {
  if (str !== '') {
    if (str.length > 10) {
      return console.log(str.toUpperCase());
    } else {
      return console.log(str);
    }
  } else {
    return console.log('type something and try again, m8.');
  }
}

yellOrNah('hello world!');
yellOrNah('goodbye');
yellOrNah('');

// ternary
function yellOrNah2(str) {
  if (str !== '') {
    return str.length > 10 ? console.log(str.toUpperCase()) : console.log(str);
  } else {
    return console.log('please type something and try agian, m8.');
  }
}

yellOrNah2('');
yellOrNah2('liftoffffff');
yellOrNah2('abort');
