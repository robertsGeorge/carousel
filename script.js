"use strict";
console.clear();
/* ================================ */

const carousel = document.querySelector('.carousel');
const carouselUl = carousel.querySelector('ul');
const carouselLi = carousel.querySelector('li');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

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

leftArrow.addEventListener('click', scrollCarousel);
rightArrow.addEventListener('click', scrollCarousel);

function scrollCarousel(event) {
  if (event.target.matches('.arrow.left')) {
    // scroll the ul by the width of the carousel
    carousel.scrollLeft -= carousel.clientWidth;
    return;
  }

  if (event.target.matches('.arrow.right')) {
    carousel.scrollLeft += carousel.clientWidth;
    return;
  }
}