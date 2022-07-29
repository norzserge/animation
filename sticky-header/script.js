const header = document.querySelector('.header');
const firstBlock = document.querySelector('.part-1');
const scrolledHeaderStart = firstBlock.offsetHeight;

const backScrolledHeader = header.querySelector('.header__backscrolled');

let scrollStarted = 0;

document.addEventListener('scroll', function() {
  let scrollY = window.scrollY;
  
  if (scrollY > scrolledHeaderStart) {
    header.classList.add('header--fixed');
  } else {
    header.classList.remove('header--fixed');
  }

  let delta = scrollY - scrollStarted;

  if ((delta < 0) && (scrollY >= scrolledHeaderStart)) {
    backScrolledHeader.classList.add('header__backscrolled--show');
  } else {
    backScrolledHeader.classList.remove('header__backscrolled--show');
  }

  scrollStarted = scrollY;
});