// Remember, we're gonna use strict mode in all scripts now!
'use strict'; //prettier default puts double quotes, but we created a .prettierrc file to make it singles

// const x = 23;

// if (x === 23) console.log(); //prettier automatically adds space between the if(

//also changes arrow functions to add () around the variables. Will not change this, but Jonas did.

// const calcAge = (birthYear) => 2020 - birthYear;
// console.log(calcAge(1979));

//ideas for projects:
//measurement converter using functions
//codewars
//codewars function solution:

// function multiply(a, b) {
//   return a * b;
// }

// console.log(multiply(2, 3));

//4 STEPS TO SOLVE PROBLEMS (this is what coding is all about)
//1. define and understand
//2. break the problem into small steps
//3. Do as much research as we need to- google or find MDN, or stack overflow (big part of a coder's job)
//4. (Prototype your way to a solution) For bigger problems, write pseudo-code to make sense of the problem (doesn't need to work, just to model). This is a prototype or an object to think about the problem with

//PROBLEM SOLVING CHALLENGE (Walkthrough):
//We work for a company building a smart home thermometer.
//TASK: `Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error.`

const temperatures = [3 - 2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];

//We need the array of temperatures- above
//what is amplitude, in this situation?- Difference between highest and lowest temperature in an array.
//-how do we calculate this from our data? max and min temperatures
//what do we do with errors? Throw them out? Correct them?- can see `error` in the data

//1. ignore/filter errors
//2. find highest temperatures
//3. find lowest temperatures
//4. subtract smaller from larger for temperature amplitude

//things I tried:

// const max = Math.max(...temperatures);

// console.log(max);

// const calcTempAmplitude = function (temps) {
//     temperatures.filter(temperatures, 13);
//     return temps;
//   };

// console.log(temperatures.filter(temperatures, 13));
// const filteredTemps = temperatures.filter(temperatures !== `error`);

// console.log(filteredTemps);

// console.log(Math.max(temperatures));

// const calcAmp = function (temperatures) {
// //   tempMin = Math.min(...temperatures);
// //   tempMax = Math.max(...temperatures);
// //   tempAmp = tempMax - tempMin;
// //   return tempAmp;
// };
// calAmp(99, 33, 55);
// console.log(tempAmp);

//   filteredTemps = temperatures.filter(temperatures !== `error`);
//   return filteredTemps;

// const filteredTemps = ``;
// console.log(filteredTemps);

// // console.log(Math.max.apply({}, temperatures));
// // highestTemperature(temperatures[i]);

//JONAS SOLUTION, following stack overflow model

// //this give min and max temps
// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== `number`) continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };

// // calcTempAmplitude([33, 66, 312, 88, 99]); testing
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

//test:

// calcTempAmplitude([66, 33, 44, 112]); //this returns 66

// const calcTempAmplitude = function (temps) {
//     let max = temps[0];
//     for (let i = 0; i > temps.length; i++) {
//       if (temps[i] > max) max = temps[i]; //if the temp at i is greater than max, that value becomes the new max
//     }
//     console.log(max);
//   };

//   calcTempAmplitude([66, 33, 44, 112]); //this returns 66

//PM Now says function should take 2 inputs of numbers, but everything else should work the same:

//solution is to merge the 2 arrays into one, THEN input into the function.

//THis code works:
// const combinedTemps = temperatures;

// const calcTempAmplitudeNew = function (temps1, temps2) {
//   const temps = temps1.concat(temps2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== `number`) continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 6, 9], [9, 12, 33, 44]);
// console.log(amplitudeNew);

//DEBUGGING PROCESS
//1. Identify that a bug exists
//2. Find the bug
//3. Fix the bug
//4. Prevent other instances of the bug

//Phase 1
// const measureKelvin = function () {
//   const measurement = {
//     type: `temp`,
//     unit: `celcius`,
//     value: prompt(`Degrees Celcius`),
//   };

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

//1. Identify bug: reading is 10273 (I entered 10 in prompt)

// const measureKelvin = function () {
//   const measurement = {
//     type: `temp`,
//     unit: `celcius`,
//     // value: prompt(`Degrees Celcius`),
//     value: Number(prompt(`Degrees Celcius`)), //3. FIX: add number function to conver this to a number
//   };

//   console.log(measurement.value); //this shows 10, so this is reading correctly

//   console.log(measurement); //2. FIND: look at the whole measurement, not just the value. THIS shows that the problem: The value is a string, because the prompt ALWAYS produces a string

//SIDE NOTES:
//   console.table(measurement);//produces a table that separates the type and value of objects (shows `type: temp` from above)
//   console.warn(measurement.value);//can generate warnings in console
//   console.error(measurement.value);//can generate errors in console
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

//Can use Debugger in Edge/Chrome to insert breaks in the code and watch it work in piecemeal. Click next to the line of code to create a break point, and DON'T forget to remove it when done!

//Go to DevTools in browser, click sources, script.js

// //BUG FIX:

// const measureKelvin = function () {
//   const measurement = {
//     type: `temp`,
//     unit: `celcius`,
//     // value: Number(prompt(`Degrees Celcius`)),
//     value: 10, //set to 10 so it doesn't keep prompting us
//   };
//   console.table(measurement);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// const calcTempAmplitudeBug = function (temps1, temps2) {
//   const temps = temps1.concat(temps2);
//   console.log(temps);

//   //   let max = temps[0];
//   //   let min = temps[0];

//   let max = 0; //introducing a bug to test the debugger
//   let min = 0; //this makes the minimum 0, no matter what

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== `number`) continue;

//     // debugger; //can open the debugger at a certain spot in your code, directly from the code!
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }

//   console.log(max, min);
//   return max - min;
// };

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(amplitudeBug);

// //Use the step feature in debugger to see the code happen line by line

//CODING CHALLENGE #1

//Thermometer takes in an array of temperatures, and outputs a string with the temps:

//[17, 21, 23] will print `... 17 degrees C in 1 days ... 21 degrees C in 2 days ... 23 degrees C in 3 days ...`

//Create a function printForecast which takes in arrar `arr` and logs the string to the console.

//build a function printForecast

//take in the array of temperatures

//output a console.log of a string with the individual array elements up to arr.length for up to 5 days

// const printForecast = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(
//       `...${arr[0]}°C in 1 day ... ${arr[1]}°C in 2 days ... ${arr[2]}°C in 3 days`
//     );
//   }
// };
// printForecast([3, 5, 4]);

// const printForecast = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       `...${arr[0]}°C in 1 day ... ${arr[1]}°C in 2 days ... ${arr[2]}°C in 3 days`
//     );
//   }
// };

// arr.forEach((element) => console.log(element));

// printForecast([3, 5, 4]);

// let temps1 = [17, 21, 23];
// let temps2 = [12, 5, -5, 0, 4];

// console.log((temps1 = temps1.join(`°C in 1 days ... `)));
// console.log((temps2 = temps2.join(`°C in 1 days ... `)));

// // temps1.forEach((element) => console.log(element));

// const printForecast = function (arr) {
//   console.log((arr = arr.join(`°C in 1 days ... `)));
// };

// printForecast([17, 21, 23]);

// for (let i = 0; i < temps1.length; i++) {
//   (`...${temps1[i]}°C in 1 days...`);
// }
// tempString.forEach((element) => console.log(element));

//THIS WORKS!! WOOT WOOT!!
// let tempString = ``;
// let days = 0;

// const printForecast = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     tempString += `...${arr[i]}°C in ${(days += 1)} days...`;

//     // console.log(tempString); //prints the output and each iteration concatenates it
//     // console.log(arr[i]); //prints each element of the array, the temp
//     // console.log(tempString [i]); // prints 2...wtf?
//   }
//   return tempString;
// };

// console.log(printForecast(temps1));

// console.log(printForecast(temps2));

//CLEAN VERSION:

// let temps1 = [17, 21, 23];
// let temps2 = [12, 5, -5, 0, 4];

// let tempString = ``;
// let days = 0;

// const printForecast = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     tempString += `...${arr[i]}°C in ${(days += 1)} days...`;
//   }
//   return tempString;
// };

// console.log(printForecast(temps1));

// console.log(printForecast(temps2));

//JONAS' SOLUTION
//Thermometer takes in an array of temperatures, and outputs a string with the temps:

//[17, 21, 23] will print `... 17 degrees C in 1 days ... 21 degrees C in 2 days ... 23 degrees C in 3 days ...`

//1) understanding the problem
// - array transformed to string, separated by ...
// - what is the x days? Answer: index + 1 (number of the index, plus 1)
// - Transform each element to string with °C
// -Sting needs to contain day (index + 1)
// add ... between elements and start and end of string
//-log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

//if only 3, you could just write: console.log(`...${data1[0]}°C ... ${data1[1]}°C ...`);

//the following converts the data into a string, and prints the string with °C through a for loop

// const printForecast = function (arr) {
//   let str = ``; //creating an empty string, then add the current value of the for loop to the string
//   for (let i = 0; i < arr.length; i++) {
//     str = str + `${arr[i]}°C `;
//   }
//   console.log(str);
// };

// printForecast(data1);

//Part 2:
// const printForecast = function (arr) {
//   let str = ``; //creating an empty string, then add the current value of the for loop to the string
//   for (let i = 0; i < arr.length; i++) {
//     str = str + `${arr[i]}°C in ${i + 1} days ... `; //added current index plus 1 for days.
//     //add dots to end, but can't add at beginning bc we would have too many dots.
//   }
//   console.log(`... ` + str); //solution for dots at beginning is to add them here in the console log
// };

// printForecast(data1);

//JONAS FINAL SOLUTION

const printForecast = function (arr) {
  let str = ``;
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ... `; //used += instead of = str +
  }
  console.log(`... ` + str);
};

printForecast(data1);
