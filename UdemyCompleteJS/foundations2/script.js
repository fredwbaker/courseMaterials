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

//this function's name is logger. It has no parameters, and doesn't return anything. This isnt very common outside of just using a block of code over and over again.
function logger() {
    //this section is the function buddy. Everything inside it will run when function is called.
    console.log(`My name is Fred`);
}

//This is calling the function (aka calling, running, or invoking):
logger();
logger();
logger();

//function can reuse code, AND return data to use in other code. 


//can add parameters in the (). THe parameters (apples, oranges) will get declared when the function is called
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);//this logs the parameters
    const juice = `Juice with ${apples} apples, and ${oranges} oranges!`;//this creates a variable named juice, and places the parameters in a template literal
    return juice; //this returns the output of the function 
}

fruitProcessor(5,0);//this returns, 5, 0 which is shown in the console.log above.

//where is the juice we produced and returned? It was returned from the variable, so, now it can be stored in a variable:

const appleJuice = fruitProcessor(5,0);//we are storing what the function returned into the variable appleJuice

console.log(appleJuice);//output is "Juice with 5 apples, and 0 oranges!"

const appleOrangeJuice = fruitProcessor(7, 8);
console.log(appleOrangeJuice);

//Write DRY code: Don't Repeat Yourself

//console.log(); is a function!
//so is Number(`23`);

const num = Number(`23`);
console.log(num);