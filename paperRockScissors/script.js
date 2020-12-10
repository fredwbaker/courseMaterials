//PAPER ROCK SCISSORS:

//DONE:
//1. random selection of rock, paper, scissors
//2. user entry of rock paper scissors
//3. Comparison of user and comp selections with response dependent upon comparison
//4. Need to prompt again if not the right response

//JUST NEEDS A FACE! Input screen with responses in a block like Jonas' number game.

const throws = [`Rock`, `Paper`, `Scissors`];

Array.prototype.random = function (length) {
  return this[Math.floor(Math.random() * length)];
};

const compThrow = throws.random(throws.length);
console.log(compThrow);

do {
  let userThrow = prompt(`Type 1 for rock, 2 for paper, or 3 for scissors.`);

  if (userThrow === "1") {
    if (compThrow === `Rock`) {
      alert("It's a Draw! You both selected Rock!");
    } else if (compThrow === `Paper`) {
      alert("Paper covers Rock! You lose this one!");
    } else if (compThrow === `Scissors`) {
      alert("Rock crushes Scissors! You win!!");
    }
  } else if (userThrow === "2") {
    if (compThrow === `Rock`) {
      alert("Paper covers Rock! You win!!");
    } else if (compThrow === `Paper`) {
      alert("It's a Draw! You both selected Paper!");
    } else if (compThrow === `Scissors`) {
      alert("Scissors cut Paper! You lose this one!!");
    }
  } else if (userThrow === "3") {
    if (compThrow === `Rock`) {
      alert("Rock crushes Scissors! You lose this one!!");
    } else if (compThrow === `Paper`) {
      alert("Scissors cut Paper! You Win!");
    } else if (compThrow === `Scissors`) {
      alert("It's a Draw! You both selected Scissors!");
    }
  }
} while (userThrow !== "1" && userThrow !== "2" && userThrow !== "3");

// //Python Script from source:

// import random

// list = [rock, paper, scissors]

// player = int(input("What do you choose? Type 0 for Rock, 1 for Paper or 2 for Scissors\n"))

// computer = random.randint(0, 2)

// if player >= 3 or player < 0:
//   print("You entered an invalid number, you lose.")
// else:
//   print(f"{list[player]}\n\nComputer chose:\n\n{list[computer]}")

//   if player == 0 and computer == 2:
//     print("You win!")
//   elif player == 2 and computer == 1:
//     print("You win!")
//   elif player == 1 and computer == 0:
//     print("You win!")
//   elif player == 0 and computer == 1:
//     print("You lose.")
//   elif player == 2 and computer == 0:
//     print("You lose.")
//   elif player == 1 and computer == 2:
//     print("You lose.")
//   else:
//     print("Draw.")
