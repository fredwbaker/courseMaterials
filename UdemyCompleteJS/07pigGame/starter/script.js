'use strict';

//INITIAL SET UP
//selecting the score elements
const score0Element = document.querySelector(`#score--0`);
const score1Element = document.getElementById(`score--1`); //can also use getElementByID. May be a little faster if you have thousands of elements, but querySelector is fine
const currentScore0 = document.getElementById(`current--0`);
const currentScore1 = document.getElementById(`current--1`);

const diceElement = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

let currentScore = 0; //currentScore variable needs to be global so it doesn't reset each time the dice functions are run

//starting elements condition
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add(`hidden`); //adding the hidden class to the dice for starting condition

//FOLLOWING FLOWCHART: USER PRESSES ROLL DICE
//ROLLING DICE FUNCTIONALITY
btnRoll.addEventListener(`click`, function () {
  //1. generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //2 display the dice
  diceElement.classList.remove(`hidden`);
  diceElement.src = `dice-${dice}.png`; //this changes the source file displayed in html, and bc the dice roll equals that portion of the name in the picture file, we can just change the file name dynamically with the template literal.

  //3 check for rolled 1; if not 1, add dice to current score, if true, switch to next player
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice;
    currentScore0.textContent = currentScore; //TODO: CHANGE LATER TO ADD 2nd PlAYER
  } else {
    // if dice ===1, switch to next player
  }
});