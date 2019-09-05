"use strict";
console.clear();
/* ================================ */

const carousel = document.querySelector('.carousel');

// label the images to visually track them, just for convenience,

let i = 1;
for (let li of carousel.querySelectorAll('li')) {
  li.style.position = "relative";
  li.insertAdjacentHTML(
    "beforeend",
    `<span style="
      position: absolute; 
      left: 0; 
      top: 0; 
      font-size: 10px;
    ">${i}</span>`
  );
  i++;
}

// ...your code to make carousel alive!
