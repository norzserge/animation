const header = document.querySelector('.header');
const firstSection = document.querySelector('.part-1');

document.addEventListener('scroll', function() {
  if (window.scrollY > firstSection.scrollHeight) {
    header.classList.add('header--fixed');
  } else {
    header.classList.remove('header--fixed');
  }
});