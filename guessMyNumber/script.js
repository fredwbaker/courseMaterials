let highestNumber = Number(
  prompt(
    `Type in the highest possible number (for example, 20, 200, 2000, etc.)`
  )
);

let secretNumber = Math.trunc(Math.random() * highestNumber) + 1;
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

  //when there is no input

  if (!guess) {
    displayMessage(`⛔ Needs a Number!`);

    //when player wins
  } else if (guess === secretNumber) {
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
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage(
        `Game Over!
        🎲 Better Luck Next Time!`
      );
      document.querySelector(`body`).style.backgroundColor = `#851818`;
      document.querySelector(".score").textContent = 0;
    }
  }
});

//This is to reset with Start Again button
document.querySelector(`.again`).addEventListener(`click`, function () {
  highestNumber = Number(
    prompt(
      `Type in the highest possible number (for example, 20, 200, 2000, etc.)`
    )
  );
  score = 20;
  secretNumber = Math.trunc(Math.random() * highestNumber) + 1;
  document.querySelector(
    `.between`
  ).textContent = `(Between 1 and ${highestNumber})`;
  displayMessage(`Start guessing...`);

  console.log(highestNumber);
  console.log(secretNumber);

  document.querySelector(`.score`).textContent = score;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
});
