'use strict';

//DOM selection and DOM manipulation

// console.log(document.querySelector(`.message`)); //This is how you select html DOM elements in js. It shows <p class='message'>Start guessing . . .</p>

// console.log(document.querySelector(`.message`).textContent); //this shows just the text `start guessing`

// //the DOM is the Document Object Model. It allows us to select elements of the HTML page that we can select through JS. The DOM is a TREE Element, where everything in a class is underneath that item (why inheritance works).

// //DOCUMENT>ELEMENT (html)>HEAD & BODY elements> then whatever else is in the document

// //DOM methods and properties are web APIs (Application Programming Interface). All work the same in browsers. Also other types of APIs

//DOM MANIPULATION:

// document.querySelector(`.message`).textContent = `🎉 Correct!!`; //select with querySelector, specify element with `.message`, then set it equal to something new with =.

// //Changes start guessing to Correct!

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 10;
// console.log(document.querySelector(`.guess`).value); //Use .value to get the value property of something (such as an input field)

// document.querySelector(`.guess`).value = 23; //can also use to set the value
// console.log(document.querySelector(`.guess`).value);

//HOW DO WE PROCESS THE CLICK OF A BUTTON?

//event listener. We want something to happen when the user clicks the Check! button

//addEventListener is the most common listener. It expects the type of event (`click`), and what to do when that happens (the function):

// document.querySelector(`.check`).addEventListener(`click`, function () {
//   console.log(document.querySelector(`.guess`).value);
// }); //now logs the entry into the guess box to the console when the check button is selected. WE don't call this function. We pass it into the listener, and JS calls it when used.

// document.querySelector(`.check`).addEventListener(`click`, function () {
//   console.log(document.querySelector(`.guess`).value);

//   document.querySelector(`.message`).textContent = `🎉 Correct!!`; //now changes the text when submitted. Just to show
// });

// document.querySelector(`.check`).addEventListener(`click`, function () {
//   const guess = document.querySelector(`.guess`).value; //store guess in a variable, but this is a string
//   console.log(guess);
//   console.log(typeof guess);//string, but will need to be a number
// });

// document.querySelector(`.check`).addEventListener(`click`, function () {
//   const guess = Number(document.querySelector(`.guess`).value); //add number function
//   console.log(guess, typeof guess); //now it is a number

//   if (!guess) {
//     console.log(
//       (document.querySelector(`.message`).textContent = `⛔ Needs a Number!`) //if nothing is entered into the guess, we see the Needs a Number message
//     );
//   }
// });

//DEFINE the secret number (when we start the application). Define outside of the function.

// const number = Math.random();
// console.log(number); //shows number with decimal places

//Math.trunc cuts off the decimal. Multiplying it by 20 makes the number always between 1 and 19.9999 (19 when truncated), so we have to add 1 to make it the full range between 1 and 20.
// const secretNumber = Math.trunc(Math.random() * 20 + 1);
// console.log(secretNumber);

//display random number where ? is on screen while we are developing

// document.querySelector(`.number`).textContent = secretNumber;

// document.querySelector(`.check`).addEventListener(`click`, function () {
//   const guess = Number(document.querySelector(`.guess`).value); //add number function
//   console.log(guess, typeof guess); //now it is a number

//   if (!guess) {
//     document.querySelector(`.message`).textContent = `⛔ Needs a Number!`; //don't enter a number get this
//   } else if (guess === secretNumber) {
//     document.querySelector(`.message`).textContent = `CORRECT!! 🎉`; //guess correct number, get this
//   } else if (guess > secretNumber) {
//     document.querySelector(`.message`).textContent = `📈 Too High... Try Again!`; //message with high guess
//   } else if (guess < secretNumber) {
//     document.querySelector(`.message`).textContent = `📉 Too Low... Try Again!`; //message with low guess
//   }
// });

//NOW TO DECREASE SCORE FOR INCORRECT GUESSES:

//could read the score, decrease by one, and then reprint, but not best way.

//Better way is to create a score variable. This way the variable is in our code, rather than in the DOM.

//always keep state data in the code.

// let score = 20; //this is a state variable, because it contains the state of the code.
// document.querySelector(`.check`).addEventListener(`click`, function () {
//   const guess = Number(document.querySelector(`.guess`).value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     document.querySelector(`.message`).textContent = `⛔ Needs a Number!`;
//   } else if (guess === secretNumber) {
//     document.querySelector(`.message`).textContent = `CORRECT!! 🎉`;
//   } else if (guess > secretNumber) {
//     document.querySelector(
//       `.message`
//     ).textContent = `📈 Too High... Try Again!`;
//     score--; //decrease the score by one, now need to display it:
//     document.querySelector(`.score`).textContent = score; //displays the new score
//   } else if (guess < secretNumber) {
//     document.querySelector(`.message`).textContent = `📉 Too Low... Try Again!`;
//     score--; //decrease the score by one
//     document.querySelector(`.score`).textContent = score; //displays the new score
//   }
// });

//WHAT HAPPENS WHEN SCORE RUNS OUT?:

const secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
document.querySelector(`.number`).textContent = secretNumber;

let score = 20; //this is a state variable, because it contains the state of the code.
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(`.message`).textContent = `⛔ Needs a Number!`;
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `CORRECT!! 🎉`;
  } else if (guess > secretNumber) {
    if (score > 1) {
      //only do the items below when score is over 0
      document.querySelector(
        `.message`
      ).textContent = `📈 Too High... Try Again!`;
      score--; //decrease the score by one, now need to display it:
      document.querySelector(`.score`).textContent = score; //displays the new score
    } else {
      document.querySelector(
        `.message`
      ).textContent = `Game Over! 🎲 Better Luck Next Time!`;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(
        `.message`
      ).textContent = `📉 Too Low... Try Again!`;
      score--; //decrease the score by one
      document.querySelector(`.score`).textContent = score; //displays the new score
    } else {
      document.querySelector(
        `.message`
      ).textContent = `Game Over! 🎲 Better Luck Next Time!`;
    }
  }
});
