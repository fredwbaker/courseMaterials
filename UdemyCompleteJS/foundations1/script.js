

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


//test commit for new repo

// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// let markBMI = (massMark / (heightMark **2));

// let johnBMI = (massJohn / (heightJohn **2));


// console.log(markBMI, johnBMI);



// let markHigherBMI = (markBMI>johnBMI);

// console.log(markHigherBMI);


// massMark = 95;
// heightMark = 1.88;
// massJohn = 85;
// heightJohn = 1.76;

// markBMI = massMark / heightMark **2;

// johnBMI = massJohn / heightJohn **2;

// johnBMI = massJohn / (heightJohn * heightJohn);



// console.log(markBMI, johnBMI);


// markHigherBMI = (markBMI>johnBMI);

// console.log(markHigherBMI);

// //can also do it this way:

// johnBMI = massJohn / (heightJohn * heightJohn);

// markBMI = massMark / (heightMark * heightMark);

// console.log(markHigherBMI);

// const firstName = 'Fred';
// const job = 'Instructional Designer & Front End Web Developer';
// const birthYear = 1979;
// const year = 2020;

// //this leaves odd spaces, so we need template literals (yay!)
// const fred = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";

// console.log(fred);

// //using the ` (backtick) you can put everything in a sentence, with ${} to enclose the variables- Template Literals!
// const frednew = `I'm ${firstName}, a ${year-birthYear}  year old ${job}!`;
// console.log(frednew);

// //can just use ` instead of quotes in all places
// console.log(`This is a regular string with backticks`);

// //can also use it to write new lines: old way

// console.log('string with a \n\
// multiple \n\
// line sentence');

// console.log(`string with a
// multiple
// line sentence
// using backticks`);





//make decisions with code using if/else statements
//how long before able to drive?

// const age = 14;


//if condition in if() is true, it executes the code, else() it executes this code. Common to place the actual element in the if statement, rather than making a variable for it. It needs to be true/false boolean

// if(age >= 16) {
//     console.log(`Sarah can get her driver's license! 🚗 YAY!`);
// } else {
//     const yearsLeft = 16 - age;
//     console.log(`Sarah only has ${yearsLeft} years left to get her license!! 🚕`);
// }

//if, else structures are called control structures


//if you declare a variable INSIDE a block, such as an if,else statement, it WON'T be accessible outside of the block!

// const birthYear = 1979;

// if(birthYear <= 2000) {
//     let century = 20;
// } else {
//     let century = 21;
// }

//this won't log: 
// console.log(century);

//You can declare century as an empty variable outside of the block, so it lives outside of the block, and will be declared from within the block (this is cool!)

// const birthYear = 1979;

// //declare century as an empty variable
// let century;

// if(birthYear <= 2000) {
//     century = 20;
//     console.log(`This birthdate is in the ${century}th century!`);
// } else {
//     century = 21;
//     console.log(`This birthdate is in the ${century}st century!`);
// }

// //this WILL log: 
// console.log(century);


// //SECOND CODING CHALLENGE!!


// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// let markBMI = (massMark / (heightMark **2));

// let johnBMI = (massJohn / (heightJohn **2));

// if(markBMI > johnBMI) {
//     console.log(`Mark's BMI is ${markBMI}, which is higher than John's BMI of ${johnBMI}!`);
// } else if (markBMI === johnBMI) {
//     console.log(`Mark's BMI is ${markBMI}, which is equal to John's BMI of ${johnBMI}!`); 
// } else {
//     console.log(`John's BMI is ${johnBMI}, which is higher than Mark's BMI of ${markBMI}!`);
// }


// // console.log(markBMI, johnBMI);

// // let markHigherBMI = (markBMI>johnBMI);

// // console.log(markHigherBMI);

// type conversion (manually change between types- strings and numbers)
//type coercion (js automatically changes between types behind the scenes)

// //TYPE CONVERSION:
// const inputYear = '1979';
// console.log(inputYear);//string
// //this won't log as a number because it is a string
// console.log(inputYear + 18);//string + number
// //can convert a string to a number using the number function:
// console.log(Number(inputYear));//number, this DOESN'T CHANGE the original string
// console.log(inputYear + 18);//this is still a string plus number
// console.log(Number(inputYear) + 18);//this is a number plus a number

// //what if we try to convert something that can't be a number?
// console.log(Number('fred'));//produces NaN Not a Number
// console.log(typeof NaN);// Not a Number IS a type of number, but undefinable

// console.log(String(23)); //The String function converts numbers to strings


// //JS automatically does Type Coercion on its own as well
// //TYPE COERCION:
// console.log('I am' + 23 + 'years old');//this automatically creates coercion that converts the number to a string
// console.log('I am' + '23' + 'years old');//this is equivalent to the one above
// //this also happens with template literals: numbers are automatically converted to strings

// console.log('23' - '10' - 3); //in this case, the minus sign automatically converts these to numbers
// console.log('23' + '10' + 3); //the + preserves the string and concatenates these values: 23103
// console.log('23' * '2'); //converted to numbers
// console.log('23'/'2'); //also converted to numbers
// console.log('23'>'2'); //also converted to numbers

// let n = '1' + 1; //this will be a string: 11
// n = n - 1; //this converts the string 11 to a number 11 and subtracts 1
// console.log(n); //this outputs 10

// //type coercion is good IF you understand it, but can mess things up if you don't know how it works.
// //2+3+4+'5' produces a string value: output 95 (string)
// // '10' - '4' - '3' - 2 + '5' produces a number all the way until the plus sign, THEN makes a string: output 15 (string)

//TRUTHY and FALSY Values (for booleans)

//falsy values are not actually false, but WILL become false when you try to convert them to a boolean
//There a FIVE (5) falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));

//truthy values aren't actually true, but will convert to true when we convert them to boolean
console.log(Boolean('Fred'));
console.log(Boolean({}));

//In practice, the conversion of type to booleans is automatic. Jonas has never done this in practice!

const money =0;//change this to any other number and you get the if statement

if(money){//money is a number, BUT js tries to convert it to a boolean (true/false) using the Coercion rules. Shows the else. 
    console.log("Don't spend it all");
}else {
    console.log("You should get a job");
}

let height;//height is undefined
if(height){//undefined is a falsy value, so when variable is not defined, then it triggers false
    console.log(`Yay! Height is defined!`);  
}else {
    console.log(`height is UNDEFINED!`);
}

let height = 0;//height is 0
if(height){//0 is a falsy value, so when variable is not defined, then it triggers false
    console.log(`Yay! Height is defined!`);  
}else {
    console.log(`height is UNDEFINED!`);
}

//we can fix this issue using logical operators, discussed later


