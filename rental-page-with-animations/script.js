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
const sliderBtnPrev = document.querySelector('.slider__btn--prev');
const sliderBtnNext = document.querySelector('.slider__btn--next');
const sliderItems = document.querySelectorAll('.slider__item');
const sliderItemsLastIndex = sliderItems.length - 1;
let sliderItemIndex = 0;

function setActiveSlide() {
  sliderItems.forEach(function(slide) {
    slide.classList.remove('slider__item--current');
    if (+slide.dataset.index == sliderItemIndex) {
      sliderItems[sliderItemIndex].classList.add('slider__item--current');
    }
  });
}

function setBtnDisabled() {
  if (sliderItemIndex !== 0 && sliderItemIndex !== sliderItemsLastIndex) {
    sliderBtnPrev.disabled = false;
    sliderBtnNext.disabled = false;
  } else if (sliderItemIndex === 0) {
    sliderBtnPrev.disabled = true;
  } else {
    sliderBtnNext.disabled = true;
  }
}

sliderBtnNext.addEventListener('click', function() {
  sliderItemIndex++;

  if (sliderItemIndex > sliderItemsLastIndex) {
    sliderItemIndex = sliderItemsLastIndex;
  } else {
    setActiveSlide();
  }

  setBtnDisabled();
});

sliderBtnPrev.addEventListener('click', function() {
  sliderItemIndex--;

  if (sliderItemIndex < 0) {
    sliderItemIndex = 0;
  } else {
    setActiveSlide();
  }

  setBtnDisabled();
});

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