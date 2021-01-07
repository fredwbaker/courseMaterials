// //SPLASH SCREEN

// let intro = document.querySelector(".intro");
// let logo = document.querySelector(".logo-header");
// let logoSpan = document.querySelectorAll(".logo");

// window.addEventListener("DOMContentLoaded", () => (

//     setTimeout(()=>(

//         logoSpan.forEach((span, idx))=>(
//             setTimeout(()=>(
//                 span.classList.add('active');
//         ), (idx + 1) * 400)
//         ))
//     ))
// ))

// Typing Effect

const TypingText = document.querySelector(".typed-text");
const AutoTyping = document.querySelector(".TypeCursor");

const textArray = [
  "an expert Instructional Designer.",
  "a Front-End Web Developer.",
  "a Devoted Family Man.",
  "a Professional.",
  "a Consultant.",
];
const typingDelay = 50;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!AutoTyping.classList.contains("typing"))
      AutoTyping.classList.add("typing");
    TypingText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    AutoTyping.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!AutoTyping.classList.contains("typing"))
      AutoTyping.classList.add("typing");
    TypingText.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    AutoTyping.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
