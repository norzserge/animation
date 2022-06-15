// nav menu
const burgerMenu = document.querySelector('.menu__burger');
const headerNav = document.querySelector('.header__nav');

function menuNavToggle() {
  headerNav.classList.toggle('menu--open');
  this.classList.toggle('burger-active')
}

burgerMenu.addEventListener('click', menuNavToggle);

// Contact form
const showModalBtn = document.querySelector('.slider__modal-btn');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal__close-btn');

const modalViewHandler = () => {
	modal.classList.toggle('modal--open');
}

showModalBtn.addEventListener('click', modalViewHandler);
closeModalBtn.addEventListener('click', modalViewHandler);

// faq
const faqButtons = document.querySelectorAll('.faq__question');
const FAQ_ITEM_OPENED = 'faq__item--open';

function toggleAnswers(e) {
  const currentFaqItem = e.target.closest('.faq__item');

  if (currentFaqItem.classList.contains(FAQ_ITEM_OPENED)) {
    currentFaqItem.classList.remove(FAQ_ITEM_OPENED);
  } else {
    faqButtons.forEach(function(button) {
      button.closest('.faq__item').classList.remove(FAQ_ITEM_OPENED);
    });
  
    currentFaqItem.classList.add(FAQ_ITEM_OPENED);
  }
}

faqButtons.forEach(function(button) {
  button.addEventListener('click', toggleAnswers);
});

// slider
const sliderBox = document.querySelector(".slider");
const slides = sliderBox.querySelectorAll(".slider__item");
const btnPrev = sliderBox.querySelector(".slider__btn--prev");
const btnNext = sliderBox.querySelector(".slider__btn--next");

let counter = 0;
const maxStep = slides.length - 1;
slides[counter].classList.add("slider__item--current");

function isFirst(counter) {
  if (counter === 0) {
    btnPrev.setAttribute("disabled", "disabled");
  } else {
    btnPrev.removeAttribute("disabled", "disabled");
  }
}

function isLast(counter) {
  if (counter === maxStep) {
    btnNext.setAttribute("disabled", "disabled");
  } else {
    btnNext.removeAttribute("disabled", "disabled");
  }
}

function nextBtnHandler() {
  slides[counter].classList.remove("slider__item--current");
  slides[counter].setAttribute("style", "transform: translate(0%)");

  counter++;
  isLast(counter);
  isFirst(counter);

  slides[counter].classList.add("slider__item--current");
}

function prevBtnHandler() {
  slides[counter].classList.remove("slider__item--current");

  counter--;
  isLast(counter);
  isFirst(counter);

  slides[counter].classList.add("slider__item--current");
  slides[counter].removeAttribute("style");
}

btnNext.addEventListener("click", nextBtnHandler);
btnPrev.addEventListener("click", prevBtnHandler);

// tabs
const tabLinks = document.querySelectorAll('.tabs__link');
const tabsContent = document.querySelectorAll('.tab-content__item');

tabLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    // Set active link
    tabLinks.forEach(link => {
      link.classList.remove('tabs__link--active');
    });
  
    e.target.classList.add('tabs__link--active');

    // Set active tab content
    const currentTabContent = document.querySelector(`#${e.target.dataset.work}`);

    tabsContent.forEach(function(tabContent) {
      tabContent.classList.remove('tab-content__item--active');
    });
    
    currentTabContent.classList.add('tab-content__item--active');
  });
});