'use strict';

//working with classes is super common. Checking to see if they are present, adding and removing, and so on. This allows us to add and remove the hidden class to the modal and overlay elements to make them show and not.

//step 1, select all necessary elements and place into variables

// const modal = document.querySelector(`.modal`);
// const overlay = document.querySelector(`.overlay`);
// const buttonCloseModal = document.querySelector(`.close-modal`);
// const buttonsOpenModal = document.querySelectorAll(`.show-modal`); //normal querySelector can only select the FIRST element where multiple elements are present. Need querySelectorAll()

// const openModal = function () {
//   modal.classList.remove(`hidden`); //DON'T use the dot! Just the class name. This removes the class. Can also remove multiple classes, add classes, etc.
//   overlay.classList.remove(`hidden`);
// };

// const closeModal = function () {
//   modal.classList.add(`hidden`);
//   overlay.classList.add(`hidden`);
// };

// //open modal when button is clicked
// for (let i = 0; i < buttonsOpenModal.length; i++) {
//   //   console.log(buttonsOpenModal[i].textContent); //gathers all three modal buttons, and treats them individually here
//   buttonsOpenModal[i].addEventListener(`click`, openModal);
// }

// buttonCloseModal.addEventListener(`click`, closeModal);
// overlay.addEventListener(`click`, closeModal);

//these are redundant, replace with closeModal function above and rewrite as above
//close modal when x is clicked
// buttonCloseModal.addEventListener(`click`, function () {
//   modal.classList.add(`hidden`);
//   overlay.classList.add(`hidden`);
// });

// //close modal when overlay (blurry outside is clicked
// overlay.addEventListener(`click`, function () {
//   modal.classList.add(`hidden`);
//   overlay.classList.add(`hidden`);
// });

//KEYBOARD Events:

//keyboard events are global events (so not in a function) and use the event listener

//there is keyup, keydown, and keypress: keyup occurs when the key is lifted, keypress happens continuously while the key is being pressed, and keydown occurs when pressed.
//this function will happen for ANY key that is pressed, so it needs a parameter (add the e for esc)
// document.addEventListener(`keydown`, function (e) {
//   //   console.log(e); //logs any key, look in properties in dev tools to identify the "code" for the key
//   //   console.log(e.key); //this registers the key as itself, so f logs as f

// } if (e.key === `Escape`) console.log(`Esc was pressed`); {//this happens when the escape key is pressed.

//   }if (e.key === `Escape`) {
//       if(!modal.classList.contains(`hidden`))
//   }

// });

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const buttonCloseModal = document.querySelector(`.close-modal`);
const buttonsOpenModal = document.querySelectorAll(`.show-modal`);

const openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

for (let i = 0; i < buttonsOpenModal.length; i++) {
  buttonsOpenModal[i].addEventListener(`click`, openModal);
}

buttonCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

document.addEventListener(`keydown`, function (e) {
  console.log(e.key);

  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
  }

  //console didn't like this approach
  //   if (e.key === `Escape`) {
  //        if(!modal.classList.contains(`hidden`))
  //   }

  //alt method:
  //   if (
  //     e.key === `Escape` && !modal.classList.contains(`hidden`)
  //       ? closeModal()
  //       : ``
  //   );
});
