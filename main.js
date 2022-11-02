'use strict'
const slides = document.querySelectorAll('.slide');
const arrowRight = document.querySelector('#next');
const arrowLeft = document.querySelector('#prev');
const slidesArray = Array.from(slides);
let currentSlide = 0;
const lastPositionSlides = slidesArray.length - 1;

const changeSlide = (value) => {
    slidesArray[currentSlide].classList.remove('current');
    if (value === 1 && currentSlide === lastPositionSlides) {
        currentSlide = 0;
    } else if (value === -1 && currentSlide === 0) {
        currentSlide = lastPositionSlides;
    } else {
        currentSlide += value;
    }
    slidesArray[currentSlide].classList.add('current');
}

arrowRight.addEventListener('click', () => changeSlide(1));
arrowLeft.addEventListener('click', () => changeSlide(-1));










