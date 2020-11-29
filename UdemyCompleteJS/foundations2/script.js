//STRICT MODE

//strict mode helps you write more secure JS (avoid accidental errors). The strict code below needs to be the first line of code (comments don't count). Always do this. Strict mode forbids certain things, and makes other errors more visible, rather than JS failing silently. 
'use strict'

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;

// if(hasDriversLicense) console.log(`Yay! You have your license!`);

// if(passTest){
//     hasDriversLicense = true;
//     console.log(`Congrats! You have your license!`);
// } else{
//     console.log(`No license yet!`);
// }

//can't use interface or private bc they are reserved words. `use strict` gives us a specific error about that
// const interface =`Audio`;
// const private =3445;

//FUNCTIONS!

//functions are pieces of code that you can use over and over again. They are foundational. 

// //this function's name is logger. It has no parameters, and doesn't return anything. This isnt very common outside of just using a block of code over and over again.
// function logger() {
//     //this section is the function buddy. Everything inside it will run when function is called.
//     console.log(`My name is Fred`);
// }

// //This is calling the function (aka calling, running, or invoking):
// logger();
// logger();
// logger();

// //function can reuse code, AND return data to use in other code. 


// //can add parameters in the (). THe parameters (apples, oranges) will get declared when the function is called
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);//this logs the parameters
//     const juice = `Juice with ${apples} apples, and ${oranges} oranges!`;//this creates a variable named juice, and places the parameters in a template literal
//     return juice; //this returns the output of the function 
// }

// fruitProcessor(5,0);//this returns, 5, 0 which is shown in the console.log above.

// //where is the juice we produced and returned? It was returned from the variable, so, now it can be stored in a variable:

// const appleJuice = fruitProcessor(5,0);//we are storing what the function returned into the variable appleJuice

// console.log(appleJuice);//output is "Juice with 5 apples, and 0 oranges!"

// const appleOrangeJuice = fruitProcessor(7, 8);
// console.log(appleOrangeJuice);

// //Write DRY code: Don't Repeat Yourself

// //console.log(); is a function!
// //so is Number(`23`);

// const num = Number(`23`);
// console.log(num);

//FUNCTIONS DECLARATIONS vs EXPRESSIONS

//FUNCTION DECLARATIONS (like the functions above) use a keyword to declare the function. FUNCTION DECLARATION:
// function calcAge1(birthYear) {
//     // const age = 2037-birthYear; //don't need to create a variable. we can just return it
//     // return age;
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1979);//add the argument (actual value)
// console.log(age1);

// //FUNCTION EXPRESSION. Rather than declaring a function with a function name (like calcAge1 above) and then calling it later, you store the function directly in a variable (calcAge2):

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// const age2 = calcAge2(1979);

// console.log(age1, age2);

//these two approaches have the same output, but important to know you can do both wayss, as sometimes it is important to do it one way rather than the other. 
//functions are essentially expressions, which are values, so these can be

//you can call a function DECLARATION earlier in the code (before it is defined) because of something called hoisting (not necessarily a great idea). CAN'T do this with function expressions. 
//You can use either approach

//ARROW FUNCTIONS
//special form of function expression that is shorter and easier to write. 

// const calcAge3 = birthYear => 2037 - birthYear; //arrow function birthYear => 2037 - birthYear; this one is stored in a variable.

// const age3 = calcAge3(1979);
// console.log(age3);


// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// console.log(yearsUntilRetirement(1979));


//you can add multiple parameters and code lines in arrow function, BUT, you need to the return function when arrow functions have more than one line of code. Also, Arrow functions don't get a keyword. 
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years!`;
// }

// console.log(yearsUntilRetirement(1979, `Fred`));
// console.log(yearsUntilRetirement(1979, `Amy`));
// console.log(yearsUntilRetirement(2006, `George`));

//we can use arrow functions all the time, but they aren't universal. 

//CALLING a FUNCTION from WITHIN ANOTHER FUNCTION

//logically, this function represents a machine cuts the fruit before going into the fruitProcessor for juice (next function)

// //One function can call the other. Call cutFruitPieces inside of fruitProcessor
// const cutFruitPieces = function (fruit) {
//     return fruit * 4;
// }

// const fruitProcessor = function(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
        

//         const juice = `Juice with ${applePieces} peices of apple, and ${orangePieces} pieces of orange!`;
//         return juice; 
//     }

// console.log(fruitProcessor(2,3));


//REVIEWING FUNCTIONS: 

// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }


// const yearsUntilRetirement = function  (birthYear, firstName) {
//         const age = calcAge(birthYear);        
//         const retirement = 65 - age;

//         if(retirement > 0) {
//             console.log(`${firstName} retires in ${retirement} years!`);
//             return `${firstName} retires in ${retirement} years!`;
//         } else {
//             console.log(`${firstName} has already retired! 🎉\🎈`);
//             return -1;//typical to return -1
//         }
//     }

// console.log(yearsUntilRetirement(1979, `Fred`));
// console.log(yearsUntilRetirement(1970, `Mike`));

// //the return IMMEDIATELY exits the function, so nothing after the return will run.



//CODING CHALLENGE #1


// const avg = calcAverage => calcAverage / 3;//setting function in a variable
// const avgDolphins = avg(44 + 23 + 71);//calling the function and adding the return to a variable
// console.log(avgDolphins);//logging the output

// const avgKoalas = avg(65 + 54 + 49);//calling function with new arguments and new variable.
// console.log(avgKoalas);


//this answer mimics the juice function above.
// const calcAverage = function (scores) {
//     return scores/3;
// }

// const checkWinner = function(scoresDolphins, scoresKoalas) {
//     const avgDolphins = calcAverage(scoresDolphins);
//     const avgKoalas = calcAverage(scoresKoalas);

//     const winner = `test`;
    
//     if(avgDolphins > avgKoalas) {
//         console.log(`Dolphins win ${avgDolphins} to ${avgKoalas}!! 🎉`)
//         return winner;
//         } else if(avgKoalas > avgDolphins) {
//             console.log(`Koalas win ${avgKoalas} to ${avgDolphins}!! 🎉`)
//             return winner;
//         } else {
//             console.log(`This one is a draw!`);
//         }
// }


// //needs to be an arrow function
// const calcAverage = scores => scores/3;


// //need to have double the average, or no one wins
// const checkWinner = function(scoresDolphins, scoresKoalas) {
//     const avgDolphins = calcAverage(scoresDolphins);
//     const avgKoalas = calcAverage(scoresKoalas);
   
//     if(avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win ${avgDolphins} to ${avgKoalas}!! 🎉`)
//         return `Dolphins win ${avgDolphins} to ${avgKoalas}!! 🎉`;
//         } else if(avgKoalas >= 2 * avgDolphins) {
//             console.log(`Koalas win ${avgKoalas} to ${avgDolphins}!! 🎉`)
//             return `Koalas win ${avgKoalas} to ${avgDolphins}!! 🎉`;
//         } else {
//             console.log(`No one wins this one. 😢`);
//         }
// }

// checkWinner((44 + 23 + 71),(65 + 54 + 49));
// checkWinner((85 + 54 + 41),(23 + 34 + 27));
// checkWinner((23 + 34 + 27),(23 + 34 + 27));



//This also works with declaring a variable and returning that:
// const checkWinner = function(scoresDolphins, scoresKoalas) {
//     const avgDolphins = calcAverage(scoresDolphins);
//     const avgKoalas = calcAverage(scoresKoalas);

//     const winner = `test`;
    
//     if(avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win ${avgDolphins} to ${avgKoalas}!! 🎉`)
//         return winner;
//         } else if(avgKoalas >= 2 * avgDolphins) {
//             console.log(`Koalas win ${avgKoalas} to ${avgDolphins}!! 🎉`)
//             return winner;
//         } else {
//             console.log(`No one wins this one. 😢`);
//         }
// }


//JONAS' SOLUTION:

const calcAverage = (a, b, c) => (a + b + c)/3;
console.log(calcAverage(3, 4, 5));

//test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins>=2*avgKoalas){
        console.log(`Dolphins win! 🏆 ${avgDolphins} vs. ${avgKoalas}`);
    } else if (avgKoalas >= 2*avgDolphins) {
        console.log(`Koalas win! 🏆 ${avgKoalas} vs. ${avgDolphins}`)
    } else {
       console.log(`No team wins...`) 
    }
}

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(511, 111);//any averages will work here.


//test data 2, you can reassign the score values from above
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);//log in console

checkWinner(scoreDolphins, scoreKoalas);//call the function again