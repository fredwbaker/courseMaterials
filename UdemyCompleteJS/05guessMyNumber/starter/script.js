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

// const secretNumber = Math.trunc(Math.random() * 20 + 1);
// console.log(secretNumber);
// document.querySelector(`.number`).textContent = secretNumber;

// let score = 20; //this is a state variable, because it contains the state of the code.
// document.querySelector(`.check`).addEventListener(`click`, function () {
//   const guess = Number(document.querySelector(`.guess`).value);
//   console.log(guess, typeof guess);

//   if (!guess) {
//     document.querySelector(`.message`).textContent = `⛔ Needs a Number!`;
//   } else if (guess === secretNumber) {
//     document.querySelector(`.message`).textContent = `CORRECT!! 🎉`;
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       //only do the items below when score is over 0
//       document.querySelector(
//         `.message`
//       ).textContent = `📈 Too High... Try Again!`;
//       score--; //decrease the score by one, now need to display it:
//       document.querySelector(`.score`).textContent = score; //displays the new score
//     } else {
//       document.querySelector(
//         `.message`
//       ).textContent = `Game Over! 🎲 Better Luck Next Time!`;
//     }
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(
//         `.message`
//       ).textContent = `📉 Too Low... Try Again!`;
//       score--; //decrease the score by one
//       document.querySelector(`.score`).textContent = score; //displays the new score
//     } else {
//       document.querySelector(
//         `.message`
//       ).textContent = `Game Over! 🎲 Better Luck Next Time!`;
//     }
//   }
// });

//DOM MANIPULATION OF CSS- Change Screen to Green when user wins, and widen the score box

// const secretNumber = Math.trunc(Math.random() * 20 + 1);
// console.log(secretNumber);
// document.querySelector(`.number`).textContent = secretNumber;

// let score = 20; //this is a state variable, because it contains the state of the code.
// document.querySelector(`.check`).addEventListener(`click`, function () {
//   const guess = Number(document.querySelector(`.guess`).value);
//   console.log(guess, typeof guess);

//   //when there is no input
//   if (!guess) {
//     document.querySelector(`.message`).textContent = `⛔ Needs a Number!`;

//     //when player wins
//   } else if (guess === secretNumber) {
//     document.querySelector(`.message`).textContent = `CORRECT!! 🎉`;

//     //no .body (that is for classes), we are just selecting the whole element, not a class or id
//     //dashes aren't allowed in javascript, so to selecte background-color, you type backgroundColor. This is how you select anything with 2 words in css
//     document.querySelector(`body`).style.backgroundColor = `#60b347`;

//     //change the size of the box. Whenever manipulating a style, we need a string ``(not a number) and it has to have a unit!!
//     document.querySelector(`.number`).style.width = `30rem`;

//     //When guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       //only do the items below when score is over 0
//       document.querySelector(
//         `.message`
//       ).textContent = `📈 Too High... Try Again!`;
//       score--; //decrease the score by one, now need to display it:
//       document.querySelector(`.score`).textContent = score; //displays the new score

//       //When score runs out on too high
//     } else {
//       document.querySelector(
//         `.message`
//       ).textContent = `Game Over! 🎲 Better Luck Next Time!`;
//     }

//     //WHen guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(
//         `.message`
//       ).textContent = `📉 Too Low... Try Again!`;
//       score--; //decrease the score by one
//       document.querySelector(`.score`).textContent = score; //displays the new score

//       //when player loses with score too low
//     } else {
//       document.querySelector(
//         `.message`
//       ).textContent = `Game Over! 🎲 Better Luck Next Time!`;
//     }
//   }
// });

//IMPLEMENT THE AGAIN! BUTTON

//Select the element with the again class and attach a click event handler
//in the handler function, restore initial values of the score and number variables
//restore the initial conditions of the message, number, score, and guess input field
//restore the original background color (#222) and number width (15 rem)

// let secretNumber = Math.trunc(Math.random() * 20 + 1);

// //TODO: shows number in console, disable before final
// console.log(secretNumber);
// //NOTE:
// // document.querySelector(`.number`).textContent = secretNumber; // NOTE: Enable to show number on the screen

// let score = 20;

// document.querySelector(`.check`).addEventListener(`click`, function () {
//   const guess = Number(document.querySelector(`.guess`).value);
//   // console.log(guess, typeof guess); //NOTE: Enable to show number and type of in log

//   //when there is no input
//   if (!guess) {
//     document.querySelector(`.message`).textContent = `⛔ Needs a Number!`;

//     //when player wins
//   } else if (guess === secretNumber) {
//     document.querySelector(`.message`).textContent = `CORRECT!! 🎉`;
//     document.querySelector(`body`).style.backgroundColor = `#60b347`;
//     document.querySelector(`.number`).style.width = `30rem`;
//     document.querySelector(`.number`).textContent = secretNumber;

//     //When guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       //only do the items below when score is over 0
//       document.querySelector(
//         `.message`
//       ).textContent = `📈 Too High... Try Again!`;
//       score--; //decrease the score by one, now need to display it:
//       document.querySelector(`.score`).textContent = score; //displays the new score

//       //When score runs out on too high
//     } else {
//       document.querySelector(
//         `.message`
//       ).textContent = `Game Over! 🎲 Better Luck Next Time!`;
//     }

//     //WHen guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(
//         `.message`
//       ).textContent = `📉 Too Low... Try Again!`;
//       score--; //decrease the score by one
//       document.querySelector(`.score`).textContent = score; //displays the new score

//       //when player loses with score too low
//     } else {
//       document.querySelector(
//         `.message`
//       ).textContent = `Game Over! 🎲 Better Luck Next Time!`;
//     }
//   }
// });

// // //THIS WORKS!
// document.querySelector(`.again`).addEventListener(`click`, function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20 + 1);
//   document.querySelector(`.message`).textContent = `Start guessing...`;
//   document.querySelector(`.score`).textContent = score; //I forgot this part. Thought the score= took care of the reset.
//   document.querySelector(`body`).style.backgroundColor = `#222`;
//   document.querySelector(`.number`).style.width = `15rem`;
//   document.querySelector(`.number`).textContent = `?`;
//   document.querySelector(`.guess`).value = ``;
// });

//IMPLEMENT HIGHSCORE:

// let secretNumber = Math.trunc(Math.random() * 20 + 1);

// //TODO: shows number in console, disable before final
// // console.log(secretNumber);//no longer works on reset
// //NOTE:
// // document.querySelector(`.number`).textContent = secretNumber; // NOTE: Enable to show number on the screen

// let score = 20;
// let highScore = 0;

// document.querySelector(`.check`).addEventListener(`click`, function () {
//   const guess = Number(document.querySelector(`.guess`).value);
//   // console.log(guess, typeof guess); //NOTE: Enable to show number and type of in log

//   //when there is no input
//   if (!guess) {
//     document.querySelector(`.message`).textContent = `⛔ Needs a Number!`;

//     //when player wins
//   } else if (guess === secretNumber) {
//     document.querySelector(`.message`).textContent = `CORRECT!! 🎉`;
//     document.querySelector(`body`).style.backgroundColor = `#60b347`;
//     document.querySelector(`.number`).style.width = `30rem`;
//     document.querySelector(`.number`).textContent = secretNumber;

//     if (score > highScore) {
//       highScore = score;
//       document.querySelector(`.highscore`).textContent = highScore;
//     }

//     //When guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       //only do the items below when score is over 0
//       document.querySelector(
//         `.message`
//       ).textContent = `📈 Too High... Try Again!`;
//       score--; //decrease the score by one, now need to display it:
//       document.querySelector(`.score`).textContent = score; //displays the new score

//       //When score runs out on too high
//     } else {
//       document.querySelector(
//         `.message`
//       ).textContent = `Game Over! 🎲 Better Luck Next Time!`;
//     }

//     //WHen guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(
//         `.message`
//       ).textContent = `📉 Too Low... Try Again!`;
//       score--; //decrease the score by one
//       document.querySelector(`.score`).textContent = score; //displays the new score

//       //when player loses with score too low
//     } else {
//       document.querySelector(
//         `.message`
//       ).textContent = `Game Over! 🎲 Better Luck Next Time!`;
//     }
//   }
// });

// // //THIS WORKS!
// document.querySelector(`.again`).addEventListener(`click`, function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20 + 1);
//   document.querySelector(`.message`).textContent = `Start guessing...`;
//   document.querySelector(`.score`).textContent = score; //I forgot this part. Thought the score= took care of the reset.
//   document.querySelector(`body`).style.backgroundColor = `#222`;
//   document.querySelector(`.number`).style.width = `15rem`;
//   document.querySelector(`.number`).textContent = `?`;
//   document.querySelector(`.guess`).value = ``;
// });

//DRY CODE: Try your best to make code DRY so you don't have a lot of duplicate code.

// let secretNumber = Math.trunc(Math.random() * 20 + 1);
// let score = 20;
// let highScore = 0;

// document.querySelector(`.check`).addEventListener(`click`, function () {
//   const guess = Number(document.querySelector(`.guess`).value);
//   // console.log(guess, typeof guess); //NOTE: Enable to show number and type of in log

//   //when there is no input
//   if (!guess) {
//     document.querySelector(`.message`).textContent = `⛔ Needs a Number!`;

//     //when player wins
//   } else if (guess === secretNumber) {
//     document.querySelector(`.message`).textContent = `CORRECT!! 🎉`;
//     document.querySelector(`body`).style.backgroundColor = `#60b347`;
//     document.querySelector(`.number`).style.width = `30rem`;
//     document.querySelector(`.number`).textContent = secretNumber;

//     if (score > highScore) {
//       highScore = score;
//       document.querySelector(`.highscore`).textContent = highScore;
//     }
//   } else if (guess !== secretNumber) {
//   }
//   if (score > 1) {
//     document.querySelector(`.message`).textContent =
//       guess > secretNumber
//         ? `📈 Too High... Try Again!`
//         : `📉 Too Low... Try Again!`;
//     score--;
//     document.querySelector(`.score`).textContent = score;
//   } else {
//     document.querySelector(
//       `.message`
//     ).textContent = `Game Over! 🎲 Better Luck Next Time!`;
//   }
// });

// // //THIS WORKS!
// document.querySelector(`.again`).addEventListener(`click`, function () {
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20 + 1);
//   document.querySelector(`.message`).textContent = `Start guessing...`;
//   document.querySelector(`.score`).textContent = score; //I forgot this part. Thought the score= took care of the reset.
//   document.querySelector(`body`).style.backgroundColor = `#222`;
//   document.querySelector(`.number`).style.width = `15rem`;
//   document.querySelector(`.number`).textContent = `?`;
//   document.querySelector(`.guess`).value = ``;
// });

//MORE REFACTORING: ADDING FUNCTIONS

//Anywhere there is duplicate code (such as the document.querySelector and the secretNumber = Math.trunc line), you can create a function and call that instead of duplicating the code. This allows us to keep the code DRY and minimize the chance for bugs.

//Creating difficulty levels based on: https://codepen.io/notGeorge123/pen/PoGGVEY

// const levels = {
//   easy: 10,
//   normal: 50,
//   hard: 100,
//   legendary: 1000,
//   insane: 10000,
// };

//keep for user selected number
let highestNumber = Number(
  prompt(
    `Type in the highest possible number (for example, 20, 200, 2000, etc.)`
  )
);
// let highestNumber = 10; //TODO: clear once testing is complete. Uncomment code above.

let secretNumber = Math.trunc(Math.random() * highestNumber) + 1;
// let secretNumber = Math.trunc(Math.random() * 20 + 1);//use for between 1 and 20
console.log(highestNumber);
console.log(secretNumber);
//end difficulty levels

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(
  `.between`
).textContent = `(Between 1 and ${highestNumber})`;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  //   //when there is no input

  if (!guess) {
    // document.querySelector(`.message`).textContent = `⛔ Needs a Number!`;
    displayMessage(`⛔ Needs a Number!`);
    // document.querySelector(`body`).style.backgroundColor = `#616b04`; //FIXME: turns bg yellow, but doesn't turn back off.

    //when player wins
  } else if (guess === secretNumber) {
    // document.querySelector(`.message`).textContent = `CORRECT!! 🎉`;
    displayMessage(`CORRECT!! 🎉`);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = `Game Over! 🎲 Better Luck Next Time!`;
      displayMessage(
        `Game Over!
      🎲 Better Luck Next Time!`
      );
      document.querySelector(`body`).style.backgroundColor = `#851818`;
      document.querySelector('.score').textContent = 0;
    }
  }

  //FIXME: Something is wrong in this snippet
  // } else if (guess !== secretNumber) {
  // }
  // if (score > 1) {
  //   // document.querySelector(`.message`).textContent =
  //   //   guess > secretNumber
  //   //     ? `📈 Too High... Try Again!`
  //   //     : `📉 Too Low... Try Again!`;

  //   displayMessage(
  //     guess > secretNumber
  //       ? `📈 Too High... Try Again!`
  //       : `📉 Too Low... Try Again!`
  //   );

  //   score--;
  //   document.querySelector(`.score`).textContent = score;
  // } else {
  //   document.querySelector(
  //     `.message`
  //   ).textContent = `Game Over! 🎲 Better Luck Next Time!`;
  // }
});

// //THIS WORKS!
document.querySelector(`.again`).addEventListener(`click`, function () {
  highestNumber = Number(
    prompt(
      `Type in the highest possible number (for example, 20, 200, 2000, etc.)`
    )
  );
  score = 20;
  secretNumber = Math.trunc(Math.random() * highestNumber) + 1;
  // secretNumber = Math.trunc(Math.random() * 20 + 1);//use for between 1 and 20
  // document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(
    `.between`
  ).textContent = `(Between 1 and ${highestNumber})`;
  displayMessage(`Start guessing...`);

  console.log(highestNumber);
  console.log(secretNumber);

  document.querySelector(`.score`).textContent = score; //I forgot this part. Thought the score= took care of the reset.
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
});
