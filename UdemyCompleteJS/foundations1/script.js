

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

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(''));

// //truthy values aren't actually true, but will convert to true when we convert them to boolean
// console.log(Boolean('Fred'));
// console.log(Boolean({}));

// //In practice, the conversion of type to booleans is automatic. Jonas has never done this in practice!

// const money =0;//change this to any other number and you get the if statement

// if(money){//money is a number, BUT js tries to convert it to a boolean (true/false) using the Coercion rules. Shows the else. 
//     console.log("Don't spend it all");
// }else {
//     console.log("You should get a job");
// }

// let height;//height is undefined
// if(height){//undefined is a falsy value, so when variable is not defined, then it triggers false
//     console.log(`Yay! Height is defined!`);  
// }else {
//     console.log(`height is UNDEFINED!`);
// }

// let height = 0;//height is 0
// if(height){//0 is a falsy value, so when variable is not defined, then it triggers false
//     console.log(`Yay! Height is defined!`);  
// }else {
//     console.log(`height is UNDEFINED!`);
// }

// //we can fix this issue using logical operators, discussed later


// const coronaVirus;

// if(coronaVirus){
//     console.log(`Stay home and get better!`);
// } else {
//     console.log(`wear your mask, wash your hands, distance yourself, and stay safe!`)
// // }

// const age = 18;
// // === means both sides have to be strictly equal
// if(age === 18) console.log(`You just became an adult!`);
//loose equality operator ==  this is generally avoided in favor of the strict equality operator ===
//'18' == 18 will be true, where '18' === 18 is false


//we can store data from a prompt (user entered) into a variable (favorite, here)

// const favorite = prompt(`What's your favorite number?`);

// console.log(favorite);
// console.log(typeof favorite);

// //the output here is a string, but it works because of the loose equality operator
// if(favorite ==23){
//   console.log(`Cool! 23 is an amazing number!`);
// }

// //This won't work because the string is not STRICTLY equal to the number
// if(favorite ===23){
//   console.log(`Cool! 23 is an amazing number!`);
// }

//If we convert the string to a number, then the strict equality operator will work

// const favorite = Number (prompt(`What's your favorite number?`));

// if(favorite ===23){
//   console.log(`Cool! 23 is an amazing number!`);
// }

// //else if
// const favorite = Number (prompt(`What's your favorite number?`));

// if(favorite ===23){
//   console.log(`Cool! 23 is an amazing number!`);
// } else if(favorite === 7) {
//   console.log(`7 is also a cool number!`);
// } else if(favorite === 8) {
//   console.log(`8 is also a cool number!`);
// } else {
//   console.log(`Number is not 23, 7, or 8!`);
// }

// //can check if the number is NOT === to something using the different operator !==. The !== is the strict version, where the != is the loose version. 
// if(favorite !== 23) console.log(`why not 23?`);


//BOOLEAN Logic. This is the same for all coding languages

//Boolean values can be true or false. 

//AND operator (&&) nly returns if both A AND B are true. This can be used with more than one value. These are true when ALL conditions are true. 

//OR operator (||) is true if A OR B are true

//There is also the NOT operator (!A). This inverts the result. If A is true, it becomes NOT true

// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense && hasGoodVision);// this is AND
// console.log(hasDriversLicense || hasGoodVision); //this is OR
// console.log(!hasDriversLicense); //makes true variable false

// const shouldDrive = hasDriversLicense && hasGoodVision;

// // if(hasDriversLicense && hasGoodVision) {
// //   console.log(`Sarah is able to drive!`);
// // } else {
// //   console.log(`Someone else should drive!`); 
// // }

// const isTired = false;
// console.log(hasDriversLicense && hasGoodVision && isTired)

// if(hasDriversLicense && hasGoodVision && !isTired) {//!isTired means that Sarah has to be NOT is tired (so she isn't tired)
//   console.log(`Sarah is able to drive!`);
// } else {
//   console.log(`Someone else should drive!`); 
// }

//CODING CHALLENGE #3!

//my solution was functional, but could be slimmed down a little
// const score1Dolphins = 90;
// const score2Dolphins = 90;
// const score3Dolphins = 90;

// const score1Koalas = 90;
// const score2Koalas = 90;
// const score3Koalas = 90;

// const avgScoreDolphins = ((score1Dolphins + score2Dolphins + score3Dolphins)/3);
// console.log (avgScoreDolphins);

// const avgScoreKoalas = ((score1Koalas + score2Koalas + score3Koalas)/3);
// console.log(avgScoreKoalas);

// if(((avgScoreDolphins > avgScoreKoalas) && ((avgScoreDolphins || avgScoreKoalas) > 100))) {
//   console.log(`Dolphins win!`);
// } else if ((avgScoreDolphins === avgScoreKoalas)&& ((avgScoreDolphins || avgScoreKoalas) > 100)){
//   console.log(`It's a tie!`);
// } else if ((avgScoreDolphins < avgScoreKoalas)&& ((avgScoreDolphins || avgScoreKoalas) > 100)){
//   console.log(`Koalas win!`);
// } else {
//   console.log(`No one wins the trophy! :(`);
// }

//Jonas' solution:
// const scoreDolphins = (97 + 112 + 89)/3;
// const scoreKoalas = (109 + 95 + 86)/3;
// console.log(scoreDolphins, scoreKoalas);

// if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log(`Dolphins win the trophy! 🏆`);
// } else if(scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
//   console.log(`Koalas win the trophy! 🏆`);
// } else if(scoreDolphins === scoreKoalas && scoreKoalas >= 100 && scoreDolphins >= 100) {
//   console.log(`Both teams win the trophy! 🏆`);
// } else {
//   console.log(`No one wins the trophy! 😢`);
// }


//switch statements replace if else statements when trying to compare many things. 

//We are hardcoding variables (age, score, etc) but in real world application these are provided from elsewhere


//syntax for switch statements is unlike anything else in JS. 
//This replaces multiple else if statements
// const day = `saturday`;

// switch(day){
//   case `monday`://this is like writing day === monday. If true, executes code below:
//     console.log(`Plan course structure.`);//can execute multiple lines/elements of code per case
//     console.log(`Go to coding meetup.`);
//       break;//MUST have the break statement between where separate code elements occur
//     case `tuesday`:
//       console.log(`Prepare theory videos`);
//       break;
//     case `wednesday`://can have the same code for multiple cases
//     case `thursday`:
//         console.log(`Write code examples`);
//       break;
//     case `friday`:
//       console.log(`Record videos`);
//       break;
//     case `saturday`:
//     case `sunday`:
//       console.log(`Enjoy the weekend! :D`);
//     default:
//       console.log(`Not a valid day!`);//this is like the ending else statement if everything fails
// }


//switch statements are being used less and less

//write this as if else statements (need logical operators):
// const day = `december`;


// if(day === `monday`){
//   console.log(`Plan course structure.`);
//   console.log(`Go to coding meetup.`);
// } else if(day === `monday`){
//   console.log(`Prepare theory videos`);
// } else if(day === (`wednesday` || `thursday`)){
//   console.log(`Write code examples`);
// } else if(day === `friday`){
//   console.log(`Record videos`);
// } else if(day === (`saturday` || `sunday`)){
//   console.log(`Enjoy the weekend! :D`);
// } else {
//   console.log(`Not a valid day!`);
// }


//STATEMENTS VS EXPRESSIONS
//expression is a piece of code that produces a value e.g., 3 + 4, 1991, true && false && !false

//if else is a statement. Statments end with ;
//can declare variables
//strings are expressions

//BOTTOM LINE: Expressions produce values, and statements are like full sentences

//CONDITIONAL (ternary) operator
//if else and switch statements are operators. 
//This is the conditional operator

// const age = 23; //> is the if statment, : is the else block
// age >= 18 ? console.log(`I like to drink wine. 🍷`) : console.log(`I like to drink water. 💦`);

//also called the ternary operator (3 parts: condition, if and else parts)
//this is an expression (it produces an output)

//can use this to declare variables


// //the ternary operator replaces the if else statement below this block
// age = 23;
// // const drink = age >= 18 ?  `wine 🍷` : `water 💦`;
// // console.log(drink);

// // //to do this in if else:

// // let drink2; //have to declare variable outside

// // if(age >= 18){
// //   drink2 = `wine 🍷`;
// // } else {
// //   drink2 = `water 💦`;
// // }

// //using the ternary operator, we can add conditional statements inside of a template literal

// console.log(`I like to drink ${age >= 18 ?  `wine 🍷` : `water 💦`}`);//this is cool

//ternary operator is NOT a replacement for if else statements, but can be great for smaller applications

//CODING CHALLENGE #4!

//tip calculator, if bill is between 50 and 300, tip is 15%, otherwise it is 20%

const bill = 40;//bill amounts 275, 40, 430

const tip = bill >= 50 && bill <= 300 ? bill *.15 : bill *.20;
console.log(`The bill is ${bill}, and the tip should be ${tip}. The total amount owed is ${bill + tip}!💰`);
