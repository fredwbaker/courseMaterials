// Remember, we're gonna use strict mode in all scripts now!
'use strict'; //prettier default puts double quotes, but we created a .prettierrc file to make it singles

const x = 23;

// if (x === 23) console.log(); //prettier automatically adds space between the if(

//also changes arrow functions to add () around the variables. Will not change this, but Jonas did.

const calcAge = (birthYear) => 2020 - birthYear;
console.log(calcAge(1979));
