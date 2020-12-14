'use strict';

//working with classes is super common. Checking to see if they are present, adding and removing, and so on. This allows us to add and remove the hidden class to the modal and overlay elements to make them show and not.

//step 1, select all necessary elements and place into variables

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const buttonCloseModal = document.querySelector(`.close-modal`);
const buttonsOpenModal = document.querySelectorAll(`.show-modal`); //normal querySelector can only select the FIRST element where multiple elements are present. Need querySelectorAll()

const openModal = function () {
  modal.classList.remove(`hidden`); //DON'T use the dot! Just the class name. This removes the class. Can also remove multiple classes, add classes, etc.
  overlay.classList.remove(`hidden`);
};

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

//open modal when button is clicked
for (let i = 0; i < buttonsOpenModal.length; i++) {
  //   console.log(buttonsOpenModal[i].textContent); //gathers all three modal buttons, and treats them individually here
  buttonsOpenModal[i].addEventListener(`click`, openModal);
}

buttonCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

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
