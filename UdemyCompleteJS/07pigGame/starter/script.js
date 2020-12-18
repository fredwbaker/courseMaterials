'use strict';

// //INITIAL SET UP
// //selecting the score elements
// const score0Element = document.querySelector(`#score--0`);
// const score1Element = document.getElementById(`score--1`); //can also use getElementByID. May be a little faster if you have thousands of elements, but querySelector is fine
// const currentScore0 = document.getElementById(`current--0`);
// const currentScore1 = document.getElementById(`current--1`);

// const diceElement = document.querySelector(`.dice`);
// const btnNew = document.querySelector(`.btn--new`);
// const btnRoll = document.querySelector(`.btn--roll`);
// const btnHold = document.querySelector(`.btn--hold`);

// let currentScore = 0; //currentScore variable needs to be global so it doesn't reset each time the dice functions are run

// //starting elements condition
// score0Element.textContent = 0;
// score1Element.textContent = 0;
// diceElement.classList.add(`hidden`); //adding the hidden class to the dice for starting condition

// //FOLLOWING FLOWCHART: USER PRESSES ROLL DICE
// //ROLLING DICE FUNCTIONALITY
// btnRoll.addEventListener(`click`, function () {
//   //1. generate a random dice roll
//   const dice = Math.trunc(Math.random() * 6) + 1;
//   console.log(dice);

//   //2 display the dice
//   diceElement.classList.remove(`hidden`);
//   diceElement.src = `dice-${dice}.png`; //this changes the source file displayed in html, and bc the dice roll equals that portion of the name in the picture file, we can just change the file name dynamically with the template literal.

//   //3 check for rolled 1; if not 1, add dice to current score, if true, switch to next player
//   if (dice !== 1) {
//     //add dice to current score
//     currentScore += dice;
//     currentScore0.textContent = currentScore; //TODO: CHANGE LATER TO ADD 2nd PlAYER. Need to track who is active player.
//   } else {
//     // if dice ===1, switch to next player
//   }
// });

//PHASE #2 SWITCH FROM ONE ACTIVE PLAYER TO THE OTHEr

// //Score elements
// const player0Element = document.querySelector(`.player--0`);
// const player1Element = document.querySelector(`.player--1`);

// const score0Element = document.querySelector(`#score--0`);
// const score1Element = document.getElementById(`score--1`);
// const currentScore0 = document.getElementById(`current--0`);
// const currentScore1 = document.getElementById(`current--1`);

// //Button and dice elements
// const diceElement = document.querySelector(`.dice`);
// const btnNew = document.querySelector(`.btn--new`);
// const btnRoll = document.querySelector(`.btn--roll`);
// const btnHold = document.querySelector(`.btn--hold`);

// //Score varible
// const scores = [0, 0]; //these are the big scores that lead to final score. BC of this, player 1 is marked 0 in the html, and P2 is 1
// let currentScore = 0;
// let activePlayer = 0; //because player 0 is player 1, and player 2 is player 1 in our HTML. This is bc of the final score being in an array above (const scores)

// //Game Elements starting condition
// score0Element.textContent = 0;
// score1Element.textContent = 0;
// diceElement.classList.add(`hidden`);

// //ROLLING DICE FUNCTIONALITY
// btnRoll.addEventListener(`click`, function () {
//   //1. generate a random dice roll
//   const dice = Math.trunc(Math.random() * 6) + 1;
//   console.log(dice);

//   //2 display the dice
//   diceElement.classList.remove(`hidden`);
//   diceElement.src = `dice-${dice}.png`;

//   //3 check for rolled 1; if not 1, add dice to current score, if true, switch to next player
//   if (dice !== 1) {
//     //add dice to current score
//     currentScore += dice;
//     document.getElementById(
//       `current--${activePlayer}`
//     ).textContent = currentScore; //replaced currentScore0.textContent = currentScore; with this
//   } else {
//     // if dice ===1, switch to next player
//     document.getElementById(`current--${activePlayer}`).textContent = 0; //set currentPlayer score to 0
//     currentScore = 0; //set current score to 0
//     activePlayer = activePlayer === 0 ? 1 : 0; //checking to see if active player equals 0, switch to 1, else 0. This happens whenever the dice === 1 above. WHen it !== 1 we stay in the top loop
//     player0Element.classList.toggle(`player--active`); //toggles the active player between the two- if player 0 has the `player--active` class, it removes it, same with player 1 below.
//     player1Element.classList.toggle(`player--active`);
//   }
// });

//12/15/2020 I made the typing animation and pig game today, but github isn't recognizing the commit!

//12/16/2020
//PHASE 3: Activate the hold button
//Player and Score elements
// const player0Element = document.querySelector(`.player--0`);
// const player1Element = document.querySelector(`.player--1`);

// const score0Element = document.querySelector(`#score--0`);
// const score1Element = document.getElementById(`score--1`);
// const currentScore0 = document.getElementById(`current--0`);
// const currentScore1 = document.getElementById(`current--1`);

// //Button and dice elements
// const diceElement = document.querySelector(`.dice`);
// const btnNew = document.querySelector(`.btn--new`);
// const btnRoll = document.querySelector(`.btn--roll`);
// const btnHold = document.querySelector(`.btn--hold`);

// //Score varible
// const scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;

// //Game Elements starting condition
// score0Element.textContent = 0;
// score1Element.textContent = 0;
// diceElement.classList.add(`hidden`);

// //ROLLING DICE FUNCTIONALITY
// btnRoll.addEventListener(`click`, function () {
//   //1. generate a random dice roll
//   const dice = Math.trunc(Math.random() * 6) + 1;
//   console.log(dice);

//   //2 display the dice
//   diceElement.classList.remove(`hidden`);
//   diceElement.src = `dice-${dice}.png`;

//   //3 check for rolled 1; if not 1, add dice to current score, if true, switch to next player
//   if (dice !== 1) {
//     //add dice to current score
//     currentScore += dice;
//     document.getElementById(
//       `current--${activePlayer}`
//     ).textContent = currentScore;
//   } else {
//     // if dice ===1, switch to next player
//     document.getElementById(`current--${activePlayer}`).textContent = 0;
//     currentScore = 0;
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     player0Element.classList.toggle(`player--active`);
//     player1Element.classList.toggle(`player--active`);
//   }
// });

//PHASE 4 Engage the Hold Score Button (at score less than 100):
// const player0Element = document.querySelector(`.player--0`);
// const player1Element = document.querySelector(`.player--1`);

// const score0Element = document.querySelector(`#score--0`);
// const score1Element = document.getElementById(`score--1`);
// const currentScore0 = document.getElementById(`current--0`);
// const currentScore1 = document.getElementById(`current--1`);

// //Button and dice elements
// const diceElement = document.querySelector(`.dice`);
// const btnNew = document.querySelector(`.btn--new`);
// const btnRoll = document.querySelector(`.btn--roll`);
// const btnHold = document.querySelector(`.btn--hold`);

// //Score varible
// const scores = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;

// //Game Elements starting condition
// score0Element.textContent = 0;
// score1Element.textContent = 0;
// diceElement.classList.add(`hidden`);

// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0Element.classList.toggle(`player--active`);
//   player1Element.classList.toggle(`player--active`);
// };

// //ROLLING DICE FUNCTIONALITY
// btnRoll.addEventListener(`click`, function () {
//   //1. generate a random dice roll
//   const dice = Math.trunc(Math.random() * 6) + 1;

//   //2 display the dice
//   diceElement.classList.remove(`hidden`);
//   diceElement.src = `dice-${dice}.png`;

//   //3 check for rolled 1; if not 1, add dice to current score, if true, switch to next player
//   if (dice !== 1) {
//     //add dice to current score
//     currentScore += dice;
//     document.getElementById(
//       `current--${activePlayer}`
//     ).textContent = currentScore;
//   } else {
//     // if dice ===1, switch to next player
//     switchPlayer();
//   }
// });
// btnHold.addEventListener(`click`, function () {
//   //1. add current score to active player's score
//   scores[activePlayer] += currentScore; // this is equivalent to: scores[1] = scores[1] + currentScore;

//   document.getElementById(`score--${activePlayer}`).textContent =
//     scores[activePlayer];

//   //check if player's score is >= 100
//   //finish the game

//   //else, switch player
//   switchPlayer();
// });

//PHASE 5: Set up New Game button:

//Player elements
const player0Element = document.querySelector(`.player--0`);
const player1Element = document.querySelector(`.player--1`);
//Score elements
const score0Element = document.querySelector(`#score--0`);
const score1Element = document.getElementById(`score--1`);
const currentScore0 = document.getElementById(`current--0`);
const currentScore1 = document.getElementById(`current--1`);

//Button and dice elements
const diceElement = document.querySelector(`.dice`);
const btnNew = document.querySelector(`.btn--new`);
const btnRoll = document.querySelector(`.btn--roll`);
const btnHold = document.querySelector(`.btn--hold`);

let scores, currentScore, activePlayer, playing; //declaring empty variables in the global scope

const reset = function () {
  //Score variable
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  //Game Elements starting condition
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  diceElement.classList.add(`hidden`);
  player0Element.classList.remove(`player--winner`);
  player1Element.classList.remove(`player--winner`);
  player1Element.classList.remove(`player--active`);
  player0Element.classList.add(`player--active`);
};

reset();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle(`player--active`);
  player1Element.classList.toggle(`player--active`);
};

//ROLLING DICE FUNCTIONALITY
btnRoll.addEventListener(`click`, function () {
  if (playing) {
    //1. generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2 display the dice
    diceElement.classList.remove(`hidden`);
    diceElement.src = `dice-${dice}.png`;

    //3 check for rolled 1; if not 1, add dice to current score, if true, switch to next player
    if (dice !== 1) {
      //add dice to current score
      currentScore += dice;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      // if dice ===1, switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener(`click`, function () {
  if (playing) {
    //1. add current score to active player's score
    scores[activePlayer] += currentScore; // this is equivalent to: scores[1] = scores[1] + currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      //finish the game
      playing = false;
      diceElement.classList.add(`hidden`);

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`player--${activePlayer}`)
        .classList.remove(`player--active`);
    } else {
      //else, switch player
      switchPlayer();
    }
  }
});

btnNew.addEventListener(`click`, reset);

//JONAS' Code:
// 'use strict';

// // Selecting elements
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');

// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');

// let scores, currentScore, activePlayer, playing;

// // Starting conditions
// const init = function () {
//   scores = [0, 0];
//   currentScore = 0;
//   activePlayer = 0;
//   playing = true;

//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;

//   diceEl.classList.add('hidden');
//   player0El.classList.remove('player--winner');
//   player1El.classList.remove('player--winner');
//   player0El.classList.add('player--active');
//   player1El.classList.remove('player--active');
// };
// init();

// const switchPlayer = function () {
//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0El.classList.toggle('player--active');
//   player1El.classList.toggle('player--active');
// };

// // Rolling dice functionality
// btnRoll.addEventListener('click', function () {
//   if (playing) {
//     // 1. Generating a random dice roll
//     const dice = Math.trunc(Math.random() * 6) + 1;

//     // 2. Display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     // 3. Check for rolled 1
//     if (dice !== 1) {
//       // Add dice to current score
//       currentScore += dice;
//       document.getElementById(
//         `current--${activePlayer}`
//       ).textContent = currentScore;
//     } else {
//       // Switch to next player
//       switchPlayer();
//     }
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playing) {
//     // 1. Add current score to active player's score
//     scores[activePlayer] += currentScore;
//     // scores[1] = scores[1] + currentScore

//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];

//     // 2. Check if player's score is >= 100
//     if (scores[activePlayer] >= 100) {
//       // Finish the game
//       playing = false;
//       diceEl.classList.add('hidden');

//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//     } else {
//       // Switch to the next player
//       switchPlayer();
//     }
//   }
// });

// btnNew.addEventListener('click', init);
