/* ===================== Progress bar ========================== */

const progressBar = document.querySelector('.progress-bar');
const progressBarValue = progressBar.querySelector('.progress-bar__value');
const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

/* ===================== Content blocks ========================== */

const screenHeight = document.documentElement.clientHeight;
const animateBlocks = document.querySelectorAll(".content__block");

function isHalfVisible(element) {
  const elementBoundary = element.getBoundingClientRect();
  const top = elementBoundary.top;
  const height = elementBoundary.height;

  return (top + height >= 0) && (top + 0.5 * height <= screenHeight);
} 

/* ===================== Scrolled header ========================== */

const header = document.querySelector('.header');
const scrolledHeaderStart = 400;
const backScrolledHeader = header.querySelector('.header__backscrolled');
let scrollStarted = 0;

function headerScrollHandler () {
  const scrollTop = window.pageYOffset;
  const delta = scrollTop - scrollStarted;

  if (scrollTop >= scrolledHeaderStart) {
    header.classList.add('header--fixed');
    document.body.style.paddingTop = `${header.offsetHeight}px`;
  } else {
    header.classList.remove('header--fixed');
    document.body.style.paddingTop = `0px`;
  }

  if ((delta < 0) && (scrollTop >= scrolledHeaderStart)) {
    backScrolledHeader.classList.add('backscroll-header--show');
  } else {
    backScrolledHeader.classList.remove('backscroll-header--show');
  }

  scrollStarted = scrollTop;
};

/* ===================== Reviews ========================== */

const section = document.querySelector(".reviews");
const list = section.querySelector(".reviews__list");
const sectionWidth = section.clientWidth;
const listWidth = list.scrollWidth;
let dist = 0;
const step = 50;
const maxDist = listWidth - sectionWidth + step;

function wheelHandler(evt) {
  evt.preventDefault();
  if (evt.deltaY > 0 &&
    dist <= 0 &&
    listWidth + dist > sectionWidth - step * 3) {
    dist = dist - step;
  } else if (dist < 0 && evt.deltaY < 0) {
    dist = dist + step;
  }

  list.setAttribute("style", `transform: translateX(${dist}px)`);
};

section.addEventListener("wheel", wheelHandler);


/* ===================== Scroll event handler ========================== */

window.addEventListener('scroll', () => {
  // Progress bar
  const windowScroll = window.pageYOffset;
	const progressBarWidth  = (windowScroll / windowHeight).toFixed(2);

	progressBarValue.setAttribute('style', `transform: scaleX(${progressBarWidth});`);

  // Content blocks
  for (var i = 0; i < animateBlocks.length; i++) {
    const contentBlock = animateBlocks[i];
    const contentText = contentBlock.querySelector('.content__text-wrap');
    const contentImage = contentBlock.querySelector('.content__image');

    if (isHalfVisible(contentBlock)) {
      contentText.classList.add("content__text-wrap--animated");
      contentImage.classList.add("content__image--animated");
    }
  }

  // Scrolled header
  headerScrollHandler();
});