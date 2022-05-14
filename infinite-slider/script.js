'use strict'

const sliderBox = document.querySelector('.slider');
const slides = sliderBox.querySelectorAll('.slider-item');
const btnPrev = sliderBox.querySelector('.slider-btn--prev');
const btnNext = sliderBox.querySelector('.slider-btn--next');

let counter = 0;

btnNext.addEventListener('click', function() {
	slides[counter].classList.toggle('slider-item--current');
	counter++;
  if (counter >= slides.length) {
    counter = 0;
  }
	slides[counter].classList.toggle('slider-item--current');
});

btnPrev.addEventListener('click', function() {
	slides[counter].classList.toggle('slider-item--current');
	counter--;
  if (counter < 0) {
    counter = slides.length - 1;
  }
	slides[counter].classList.toggle('slider-item--current');
});
