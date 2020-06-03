4. const NAME = 'Victor';
   console.log('Good Morning, ' + NAME);
   console.log('Good Afternoon, ' + NAME);
   console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

---

The code will output the first 3 lines with 'Victor' as NAME. Then, when the attempt to re-initialize the variable 'NAME' occurs, it will encounter an error. After that, it'll output the last 3 lines, also with 'Victor' as 'NAME'.

The variable 'NAME' was declared and initialized as a constant, so it can't be re-initialized within the scope where it was first declared.
