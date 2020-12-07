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

//this give min and max temps
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== `number`) continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

// calcTempAmplitude([33, 66, 312, 88, 99]); testing
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

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

const combinedTemps = temperatures;

const calcTempAmplitudeNew = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== `number`) continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 6, 9], [9, 12, 33, 44]);
console.log(amplitudeNew);
