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
// //         } else {
// //             console.log(`No one wins this one. 😢`);
// //         }
// // }

// // checkWinner((44 + 23 + 71),(65 + 54 + 49));
// // checkWinner((85 + 54 + 41),(23 + 34 + 27));
// // checkWinner((23 + 34 + 27),(23 + 34 + 27));



// //This also works with declaring a variable and returning that:
// // const checkWinner = function(scoresDolphins, scoresKoalas) {
// //     const avgDolphins = calcAverage(scoresDolphins);
// //     const avgKoalas = calcAverage(scoresKoalas);

// //     const winner = `test`;
    
// //     if(avgDolphins >= 2 * avgKoalas) {
// //         console.log(`Dolphins win ${avgDolphins} to ${avgKoalas}!! 🎉`)
// //         return winner;
// //         } else if(avgKoalas >= 2 * avgDolphins) {
// //             console.log(`Koalas win ${avgKoalas} to ${avgDolphins}!! 🎉`)
// //             return winner;
// //         } else {
// //             console.log(`No one wins this one. 😢`);
// //         }
// // }


// //JONAS' SOLUTION:

// const calcAverage = (a, b, c) => (a + b + c)/3;
// console.log(calcAverage(3, 4, 5));

// //test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if (avgDolphins>=2*avgKoalas){
//         console.log(`Dolphins win! 🏆 ${avgDolphins} vs. ${avgKoalas}`);
//     } else if (avgKoalas >= 2*avgDolphins) {
//         console.log(`Koalas win! 🏆 ${avgKoalas} vs. ${avgDolphins}`)
//     } else {
//        console.log(`No team wins...`) 
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(511, 111);//any averages will work here.


// //test data 2, you can reassign the score values from above
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);//log in console

// checkWinner(scoreDolphins, scoreKoalas);//call the function again


//NET NINJA TUTORIAL ON FUNCTIONS
// //TheNetNinja function explanation(https://www.youtube.com/watch?v=xUI5Tsl2JpY):


// //function declaration (don't store a variable in the function)
// function greet() {
//     console.log(`Hello there!`);
// }

// greet();

// //function expressions (can store function in a variable)

// const speak = function(){
//     console.log(`Good day!`);
// };//semi-colons go at the end of expressions, so always place a semicolon at the end of function expressions

// speak();


//function declarations can be hoisted, but function expressions can't be hoisted

// const speak = function(name = `kid`, time = `night`){//can add default values here
//     console.log(`Good ${time}, ${name}!`);
// };

// speak(`Fred`, `morning`);
// speak();

// const calcArea = function(radius){
//     // let area = 3.14 * radius**2;//calculate the radius of a circle
//     // return area;//this brings the variable outside of the function

//     return 3.14 * radius**2;//condensed for cleanup
// }

// const area1 = calcArea(5);
// console.log(area1);

// //ARROW FUNCTIONS

// const calcArea = radius => 3.14 * radius**2;//this is the function above as an arrow function

// const calcArea = (radius, time) => 3.14 * radius ** 2;

// const bill = function(products, tax) {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// const bill = (products, tax) =>{
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// console.log(bill([10,15,30], 0.2));


//METHODS: 
// //methods are functions that use dot notation (name.toUpperCase), and it returns something. 
// name.toUpperCase()


//JONAS COURSE: ARRAYS

//two most important data structures in JS are arrays and objects. 
//Instead of this: 
// const friend1 = `Michael`;
// const friend2 = `Quinn`;
// const friend3 = `Sally`;

//arrays let us do this:

// const friends = [`Michael`, `Quinn`, `Sally`];
// console.log(friends);


// const y = new Array(1979, 2006, 2009, 2011, 2017); //this is also possible, but more typical to use the bracket syntax above

// console.log(friends[0]); //arrays are zero based, so element 1 is 0. 

// console.log(friends[2]); //this is the 3rd element in the array

// console.log(friends.length);//this tells us how many are in the array

// console.log(friends[friends.length -1]);// this gives us the last element in an array. It HAS to have -1

// //want to change elements from the array:
// friends[0] = `Voltron`;//can change elements of the array. This replaced Michael with Voltron
// console.log(friends);

// const firstName = `Fred`;
// const fred = [firstName, `Baker`, 2020-1979, `Coder`, friends]

// console.log(fred.length);
// console.log(fred.length);

//EXERCISE
// const calcAge = function (birthyear) {
//     return 2020 - birthyear;
// }

// const years = [1979, 1979, 2006, 2009, 2011, 2017]

// //can't do calcAge(years); bc it expects a single number, not an array

// const age1 = calcAge(years[0]);//use an array position as an input to our function
// const age2 = calcAge(years[2]);
// const age3 = calcAge(years [years.length - 1]);//use the last position in the array as an input
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years [years.length - 1])]; //can put function calls into a new array

// console.log(ages);

//METHODS can be applied directly to arrays

// const friends = [`Voltron`, `Woody`, `Sally`];
// friends.push(`Myrtle`);//push is a method to add an item to the END of an array, so we are adding Myrtle to the end of the friends array here.
// console.log(friends);

// //add elements
// const newLength = friends.push(`Jonesy`, `Cletus`);
// console.log(friends);
// console.log(newLength);

// friends.unshift(`Logan`);//adds elements to the BEGINNING of an array
// console.log(friends);

// friends.push(`tom`);
// console.log(friends);

// //remove elements
// friends.pop();//removes last emement
// console.log(friends)


// const popped = friends.pop();//tells you who was removed
// console.log(popped);

// friends.shift();//removes first element
// console.log(friends);

// //adding them back
// friends.unshift(`Logan`);
// friends.push(`Cletus`);
// console.log(friends);

// //FIND elements in array

// console.log(friends.indexOf(`Voltron`));//find out what position something on index is (this returns 1, where array shows (starts at 0): script.js:438 (7) ["Logan", "Voltron", "Woody", "Sally", "Myrtle", "Jonesy", "Cletus"])
// console.log(friends.indexOf(`Tim`));//if you ask for something NOT in the array, you get -1

// //You can also check to see IF an element is part of the array or not:
// console.log(friends.includes(`Voltron`));//True
// console.log(friends.includes(`Tim`));//False
// console.log(friends.includes(`voltron`));//false (uses STRICT equality, so the lower case v makes it false)

// //can use the .includes method to write conditionals:

// if (friends.includes(`Voltron`)) {
//     console.log(`You have a friend named Voltron!`);
// }


//CODING CHALLENGE #2: ARRAYS

// //super proud, because THIS is FUNCTIONAL AND I did it WITHOUT LOOKING ANYTHING UP!! Functions and arrays


// let totalBill = function calcTip(bill){
//     if (bill >=50 && bill <= 300) {
//         const tip = bill*.15;
//         const totalBill = bill+tip;
//         console.log(`The bill is $${bill}, plus a 15% tip of $${tip} brings the total bill to $${totalBill}! Party on!`);
//         return tip;
//     } else if (bill <=50 || bill >= 300){
//         const tip = bill*.20;
//         const totalBill = bill+tip;
//         console.log(`The bill is $${bill}, plus a 20% tip of $${tip} brings the total bill to $${totalBill}! Party on!`);
//         return tip;
//     }
// }

// //testing:
// // const bill0 = totalBill(100);
// // const bill1 = totalBill(125);
// // const bill2 = totalBill(555);
// // const bill3 = totalBill(44);

// // console.log(bill0);

// const bills = [125, 555, 44];
// console.log(bills);

// const tips = [totalBill(bills[0]), totalBill(bills[1]), totalBill(bills[2])];
// console.log(tips);

// const totals = [(bills[0]+tips[0]), (bills[1]+tips[1]), (bills[2]+tips[2])];
// console.log(totals);

// //this also works!
// // const promptedBill = prompt(`How much was your bill?`);
// // calcTip(+promptedBill);


//JONAS' SOLUTION

// const calcTip = function(bill) {
//     return bill >= 50 && 300 <=300 ? bill * 0.15 : bill * 0.2;
// }//this is MUCH cleaner and simpler than mine above. Need to learn how to do this.

// //OR

// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]),calcTip(bills[1]), calcTip(bills[2])];

// const totals = [bills [0] + tips[0], bills [1] + tips[1], bills [3] + tips[3]];

// console.log(bills, tips, totals);

//OBJECTS
//Up to now, we use arrays to store data, but you can only see position, not relationship of the data. With objects, we can define relationships.


//This is the Object Litereal Syntax. It allows the variable to hold a range of related variables, but order doesn't matter. Use Arrays for ordered data, and objects for other data.

// const fred= {
//     firstName: `Fred`,
//     lastName: `Baker`,
//     age: 2020-1979,
//     job: `coder`,
//     friends: [`Amy`, `voltron`, `Herbie`, `Joe`],
// };

// console.log(fred); //displays everything in alphabetical order

// console.log(fred.lastName); //Goes to the fred property, and returns the property name

// console.log(fred[`lastName`]);//this syntax allows us to compute from an operation, rather than typing in directly

// const nameKey = `Name`;
// console.log(fred [`first`+ nameKey]);//computes the variable firstName by combining our `first` with the nameKey variable, which is Name. 
// console.log(fred [`last` + nameKey]);//this pulls the last name from the object. This method allows us to build the variable from our input and a variable name

// console.log(nameKey); //reports `Name` from above

// console.log(fred.`last` + nameKey); //this won't work. dot notation isn't for adding variables.

// const interestedIn = prompt(`What do you want to know about Fred? Choose between firstName, lastName, age, job, and friends.`)//this returns a string that we store in a variable


// console.log(fred.interestedIn); //returns undefined. This won't work. Undefined is what you get when trying to access a property that doesn't exist.

// console.log(fred [interestedIn]);//this works! Use the bracket notation to replace the actual variable name with what the user entered

//can still get undefined if we enter something that isn't there, such as `location`

//undefined is a falsy value, so we can use an if else statement to filter true values from false

// if(fred[interestedIn]){//if the variable they enter is in the object
//     console.log(fred[interestedIn]);//if one of the true values were actually empty or zero, it would go to the else block. Not accounted for here.
// } else {
//     console.log(`Request not an option! Please try something on the list! Choose between firstName, lastName, age, job, and friends.`);
// }

//use dot and bracket notation to add new elements

// fred.location = `Florida`
// fred[`twitter`] = `@fredwbaker`;

// console.log(fred)


//Small CHALLENGE
//Return this: `Fred has 3 friends, and his best friend is named `Amy`.

// fred.friends = `Amy`; // this adds one letter at a time, so the request below shows A for position 0, rather than Amy. 

// console.log(fred);

// console.log(fred.friends);
// console.log(`${fred.firstName} has ${fred.friends.length} friends, and his best friend's name is ${fred.friends [0]}` );

//fred.friends.length gives the number of friends in an array


//OBJECT METHODS

//we can add functions to objects

// const fred= {
//     firstName: `Fred`,
//     lastName: `Baker`,
//     birthYear: 1979,
//     job: `coder`,
//     friends: [`Amy`, `voltron`, `Herbie`, `Joe`],
//     hasDriversLicense: true,

//     calcAge: function(birthYear) {//this makes calcAge an element in the object
//         return 2020-birthYear;
//     } 
// };

//any function attached to an object is called a method

//the calcAge in the object is the same as the function below, except it is in an object
// const calcAge = function(birthYear) {
//     return 2020 - birthYear;
// }


// console.log(fred.calcAge(1979));//this calls the object element just like you would for anything else, except you pass it info. 

// //passing the birthyear in isn't ideal, because it is already in the object. We can pull the birthyear directly from the object using THIS 

// console.log(fred [`calcAge`](1979)); //can also use bracket notation


//USING THE `THIS` ELEMENT

// const fred= {
//     firstName: `Fred`,
//     lastName: `Baker`,
//     birthYear: 1979,
//     job: `coder`,
//     friends: [`Amy`, `voltron`, `Herbie`, `Joe`],
//     hasDriversLicense: true,

//     calcAge: function() {
//         console.log(this);       
//         return 2020-this.birthYear;
//     } 
// };

//this stands in for the object calling the function. In this  case it is fred calling the function (fred.calcAge), so it pulls fred.calcAge from the object, then returns 2020 - fred.birthYear (i.e., this.birthYear)

// console.log(fred.calcAge());//returns 41

//this keyword helps us reference the object without having to repeat the name multiple times throughout the code. 
//This pulls the whole object

//what if we need to access the age multiple times in the project? 

// //We could call it multiple times
// console.log(fred.calcAge());
// console.log(fred.calcAge());
// console.log(fred.calcAge());

//OR we could calculate the property and tie it to a variable
// // console.log(fred.calcAge());

// const fred= {
//     firstName: `Fred`,
//     lastName: `Baker`,
//     birthYear: 1979,
//     job: `coder`,
//     friends: [`Amy`, `voltron`, `Herbie`, `Joe`],
//     hasDriversLicense: true,

//     calcAge: function() {
//         this.age = 2020-this.birthYear;//we are creating the age variable and appending it to the object, then returning it below      
//         return this.age;
//     }, //need to add a comma after previous function 

//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${ this.hasDriversLicense ? `a` : `no`} Driver's License.`
//     }
// };

// console.log(fred.calcAge());//calculate the age

// console.log(fred.age); //call the age variable itself that we calculated in the object

// //SMALL CHALLENGE: Get Summary Method

// //`Fred is a 41 year old Coder, and he has a/no driver's license`

// console.log(fred.getSummary());

// //don't forget the ternary operator!!  this.hasDriversLicense ? `a` : `no`


//CODING CHALLENGE #3 OBJECTS, METHODS, ARRAYS, FUNCTIONS

// const mark = {
//     firstName: `Mark`,
//     lastName:  `Miller`,
//     mass: 78,
//     height: 1.69,

//     calcBMI: function() {
//         this.BMI = this.mass / this.height *2;
//         return this.BMI;
//     }
// }

// console.log(mark.calcBMI());


// const mark = {
//     firstName: `John`,
//     lastName: `Smith`,
//     mass: 92,
//     height: 1.95,
    
//     calcBMI: function() {
//         this.BMI = this.mass / this.height *2;
//         return this.BMI;
//     },

//     getSummary: function(){
//     }
// }

// console.log(john.calcBMI());

// //this only works if I call the john.calcBMI AND the mark.calcBMI functions!

// if (mark.BMI > john.BMI) {
//     console.log(`${mark.firstName} ${mark.lastName}'s weight is ${mark.mass}, and his height is ${mark.height}, which makes his BMI ${mark.BMI}. This is more than ${john.firstName} ${john.lastName}'s BMI, which is ${mark.BMI}, because his weight is ${john.mass}, and his height is ${john.height}.`);
//     } else if (mark.BMI < john.BMI){
//     console.log(`${john.firstName} ${john.lastName}'s weight is ${john.mass}, and his height is ${john.height}, which makes his BMI ${john.BMI}.This is more than ${mark.firstName} ${mark.lastName}'s BMI, which is ${mark.BMI}, because his weight is ${john.mass}, and his height is ${mark.height}.`);
//     } else {
//     console.log(`${mark.firstName} ${mark.lastName}'s weight is ${mark.mass}, and his height is ${mark.height}, which makes his BMI ${mark.BMI}. ${john.firstName} ${john.lastName}'s weight is ${john.mass}, and his height is ${john.height}, which makes his BMI ${john.BMI}. These are equal.`);
// }



//JONAS' SOLUTION


//we can use object oriented programming to avoid the DRY code issue by putting the calcBMI function twice
// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function() {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi}).`)
// } else if (mark.bmi < john.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi}).`)
// } else {

    // console.log{
    //     `${john.fullName} and ${mark.fullName}'s BMIs are equal.`
    // }

// }

// updated this page 12/3/2020


//LOOPS
//loops allow us to automate repetetive tasks that we do over and over again. 

//if you needed to do 10 reps, you could do this: 
// console.log(`Lifting weights: repetition 1 🏋️‍♀️🏋`);
// console.log(`Lifting weights: repetition 2 🏋️‍♀️🏋`);
// console.log(`Lifting weights: repetition 3 🏋️‍♀️🏋`);

//but this violates the DRY criteria

//for statements create loops. Three parts: 
//create a variable (use let) and indicate the starting place
// for(let rep = 1)

//second part is a logical condition that is checked before running again. So long as this condition is true, the loop keeps running. Hit 10 reps, loop stops
// for(let rep = 1; rep <= 10)

//3rd part is to update the counter after each loop (rep = rep+1)
// for(let rep = 1; rep <= 10; rep = rep +1);

//but, we learned a shorter way to do this (rep++):
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights: repetition ${rep} 🏋️‍♀️🏋`);
// } //this counts up and automates the loop

//LOOPS, ARRAYS, BREAKING, and CONTINUING

// const fred = [
//     `Fred`,
//     `Baker`,
//     2020-1979,
//     `Front End Developer`,
//     [`MyAmy`, `Georgie Le Porge`, `Charlie Bear`, `Sammie Beans`, `Himmie Bimmie`],
// ];


// console.log(fred);
// console.log(fred.length);

// //i is a traditional variable name for for loops. arrays are 0 based, so start at 0
//fred{5] does not exist in the array above, so we stop i at 4 below


//this solution has a problem, because we hard coded the length at 5 (i < 5), so if our array changes, the code breaks
// for(let i = 0; i < 5 ; i++){
//     console.log(fred[i]) // this is like console.log(fred[0]);
// }

//adding an item to the array means it won't be logged, because the for loop is hard coded to stop at 5

// fred.push(`html`);
// fred.push(`css`);
// fred.push(`javascript`);
// console.log(fred);
// console.log(fred.length);

//we should compute the length in the array, rather than stating it

//create an empty array
// const types = [];

// for(let i = 0; i < fred.length; i++){
//     console.log(fred[i], typeof fred[i])//added typeof
//     //filling the types array
//     // types[i] = typeof fred[i];
    
//     //another way to fill the types array
//     types.push(typeof fred[i]);
// }    

// console.log(types);


//another loop, similar to the calcTip project with bills

// const years = [1979, 2006, 2009, 2011, 2017];

// years.unshift(1979);//to add a 2nd 1979 year

// //will fill up the ages array based on years array
// const ages = [];

// for(let i = 0; i < years.length; i++) {
//     ages.push(2020- years[i]);//fills the ages array
// }

// console.log(ages);


//CONTINUE and BREAK

//continue is to exit the current array and return somewhere
//break is to stop completely

// //want to print only strings: use continue. Continue exists the current iteration of the loop and then goes to the next
// console.log(`----Only Strings!-----`)
// for(let i = 0; i < fred.length; i++) {
//     if(typeof fred[i] !== `string`) continue; //IF the type of the current element is NOT a string, then continue. This means it will not print to console if not a string
//     console.log(fred[i], typeof fred[i]);//this doesn't print
// }

// console.log(typeof fred);

// //want to stop completely when we encounter a number. Use break
// console.log(`----break with number!-----`)
// for(let i = 0; i < fred.length; i++) {
//     if(typeof fred[i] === `number`) break; //iterates until it finds a number, then breaks from the loop
//     console.log(fred[i], typeof fred[i]);
// }

//LOOPING BACKWARDS and LOOPS IN LOOPS

//LOOPING Backwards
// const fred = [
//     `Fred`,
//     `Baker`,
//     2020-1979,
//     `HTML, CSS, & Javascript`,
//     `Front End Developer`,
//     [`MyAmy`, `Georgie Le Porge`, `Charlie Bear`, `Sammie Beans`, `Himmie Bimmie`],
// ];


// for(let i = fred.length -1; i >= 0; i--) {
//      console.log(i, fred[i], typeof fred[i]);   
// }

//Loop inside of a loop

//3 exercises, 5 reps each, 15 repetitions total

// for(let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-----Starting Exercise ${exercise}🏋️‍♂️`);   

//     for (let rep = 1; rep <6; rep++){
//         console.log(`Exercise ${exercise}: Lifting Weight repetition ${rep}🏋️‍♀️`)
//     }
// }

//WHILE LOOP

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`FOR LOOP: Lifting Weights Repetition ${rep}! 🏋️‍♀️`);
// }

//while loops have the same components, but we can only specify the condition

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE LOOP: Lifting Weights Repetition ${rep}! 🏋️‍`);
//     rep++;
// }

//while loop is more powerful because it only needs a condition. 


//roll dice, and keep rolling until we roll a 6. DOn't need a counter variable. 

// let dice = Math.random() * 6; //this will make a decimal #, so we need Math.trunc:
// console.log(dice);

// let dice = Math.trunc(Math.random() * 6) +1;
// console.log(dice);//this produces a random whole number between 1 and 6

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);//this would crash the browser by making an infinite loop without part below
//     dice = Math.trunc(Math.random() * 6) +1; //this adds a new dice roll
//     if (dice === 6) console.log(`Loop Ends! You rolled a ${dice}!! 🎲`);
// }

// //if the first roll is a 6, the loop is never entered.

//CODING CHALLENGE #4

//tip calculator with loops. 

//1. create an array called bills
//2. 


//MY SOLUTION

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; 

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// console.log(bills);

// const totals = [];
// const tips = [];

// for(let i = 0; i < bills.length; i++) {
//         tips.push(calcTip(bills[i])); 
//         console.log(`Tips: ${tips}`);   
//     }

// for(let i = 0; i < bills.length; i++) {
//     totals.push(bills[i] + tips[i]); 
//     console.log(`Totals: ${totals}`);   
// }

// console.log(totals);
// // const sum = [];
// // let arr =[];

// let sum = 0;

// for(let i = 0; i < totals.length; i++) {
//     sum += totals[i];
// }

// let average = sum / totals.length;

// console.log(average); //this part I couldn't get to calculate for some reason, but it follows https://stackoverflow.com/questions/29544371/finding-the-average-of-an-array-using-js


//JONAS' SOLUTION

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; 

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// for( let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]); //can use const bc we are actually creating a new variable
//     tips.push(tip);
//     totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         // sum = sum + arr[i];
//         sum += arr[i];
//     }
//     return sum / arr.length;
//     // console.log(sum);
// }

// console.log(calcAverage([2, 3, 7]));

// console.log(calcAverage(totals));
// console.log(calcAverage(tips));


//FINISH Javascript Fundamentals Part 2!!

