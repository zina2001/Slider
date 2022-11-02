'use strict'
const slides = document.querySelectorAll('.slide');
const arrowRight = document.querySelector('#next');
const arrowLeft = document.querySelector('#prev');
const slidesArray = Array.from(slides);
let currentSlide = 0;
const lastPositionSlides = slidesArray.length - 1;


const next = () => {
    if (currentSlide !== lastPositionSlides) {
    slidesArray[currentSlide].classList.remove('current');
    currentSlide += 1;
    slidesArray[currentSlide].classList.add('current');
    }
    else {
        slidesArray[currentSlide].classList.remove('current');
        currentSlide = 0
        slidesArray[currentSlide].classList.add('current');
    }
}

const prev = () => {
   if (currentSlide !== 0) {
       slidesArray[currentSlide].classList.remove('current');
       currentSlide -= 1;
       slidesArray[currentSlide].classList.add('current');
   } else {
       slidesArray[currentSlide].classList.remove('current');
       currentSlide = lastPositionSlides;
       slidesArray[currentSlide].classList.add('current');
   }

}


arrowRight.addEventListener('click', next);
arrowLeft.addEventListener('click', prev);










