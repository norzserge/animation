const menu = document.querySelector('.menu');
const burgerBtn = menu.querySelector('.burger');

burgerBtn.addEventListener('click', ()=>{
	menu.classList.toggle('menu--open');

  if (menu.classList.contains('menu--open')) {
    document.body.setAttribute('style', 'overflow: hidden');
  } else document.body.removeAttribute('style');
});