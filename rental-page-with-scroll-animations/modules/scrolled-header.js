const header = document.querySelector('.header');
const scrolledHeaderStart = 400;

const backScrolledHeader = header.querySelector('.header__backscrolled');
let scrollStarted = 0;

window.addEventListener('scroll', headerScrollHandler);

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
