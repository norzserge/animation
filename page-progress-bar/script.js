const progressBar = document.querySelector('.progressbar');
const documentHeight = document.documentElement.offsetHeight;
const visibleArea = document.documentElement.clientHeight;
const delta = documentHeight - visibleArea;

document.addEventListener('scroll', function() {
  let progress = Math.round(window.pageYOffset * 100 / delta)/100;
  progressBar.setAttribute('style', `transform: scaleX(${progress});`);
});