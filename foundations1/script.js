

// comments are double slash

/* multiline comments use */

/*
let js = 'amazing';

console.log(40+8+23-10);

console.log('Fred');
console.log(23);

let firstName = "Fred";

console.log(js);
console.log(firstName);
console.log(firstName);

let country = "USA";
let continent = "North America";
let population = "330 Million";

console.log (country, continent, population);
*/

/*
true;
console.log(true);
let javascriptIsFun = true;
console.log (javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'string');

//reassigned the javascripIsFun variable to be a string

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

//undefined variables are the value and the type of variable
let year;
console.log(typeof year);

//define the undefined variable to 1991
year = 1991;
console.log(typeof year);


//null data types come back as objects, rather than null, but this is a bug that is retained for legacy reasons
console.log(typeof null);
*/


/*
//let allows you to reassign the variable
let age = 30;
age = 31;

//use const to keep the variable the same, can't be reassigned

const birthYear = 1979;
//birthYear = 1989; throws an error

// Also cannot declare an empty variable, always use const by default, and only use let when you KNOW it will change, bc changing variables can create problems.

// using var to set variables is legacy, and should be avoided.

// you don't technically HAVE to create variables, however, not declaring a variable will create problems due to scope
// nonDeclaredVariable = don't;
*/

/*

// math operators, subtracts age
const now = 2040;
const ageFred = now - 1979;
const ageAmy = now - 1979;
const ageGeorge = now - 2006;
console.log(ageFred, ageAmy, ageGeorge);

console.log(ageFred * 2, ageAmy / 5, 2 **3);
// 2**3 means 2 to the power of 3, so 2 * 2 * 2


const firstName = 'Fred';
const lastName = 'Baker';

console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5;
//x equals 10 +5 = 15

x+=10
//this adds 10 to x, sp x+10=25
x += 4;// x = x*4 =1--
x++; //adds one
x--; //subtracts one

console.log (x);

//comparison operators
//allows you to compare variables
console.log(ageFred>ageGeorge); // >,<, >=, <=
console.log(ageFred>=ageAmy);
console.log(ageFred>=41);

//also store these in variables

const isFullAge = ageFred >= 41; //the variable isFullAge now stores the result of the equation

console.log(isFullAge);

//a shorter way is:

console.log(now - 1979 > now - 2006);

*/

/*
//part 1 video 15

const now = 2037;
const ageFred = now - 1979;
const ageGeorge = now - 2006;

console.log(now - 1979 > now - 2006);


let x, y; //can declare 2 variables at once. 

x =y=25-10-5; // Assignment also occurs right to left, so JS does the subtraction first, THEN does the right hand = sign, and THEN the left hand = 

console.log(x , y);

const averageAge = (ageFred + ageGeorge) /2;
console.log(ageFred, ageGeorge, averageAge);

//worked on starter foundations 1 module up to number 15: order precedence. 

//working with git to learn how commits work and correct bugs. Adding to this note to make another commit for testing purposes.

//JSfhjsndfjksndfn
*/
