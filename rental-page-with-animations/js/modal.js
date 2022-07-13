const btnOpen = document.querySelector('.slider__modal-btn');
const btnClose = document.querySelector('.modal__close-btn');
const modal = document.querySelector('.modal');
const modalWindow = modal.querySelector('.modal__wrap');

const animateIn = () => {
  modalWindow.classList.remove('modal-in');
  modalWindow.removeEventListener('animationend', animateIn);
};

const modalOpenHandler = () => {
  modalWindow.addEventListener('animationend', animateIn);
  modal.classList.add('modal--open');
  modalWindow.classList.add('modal-in');
}

const animateOut = () => {
  modalWindow.classList.remove('modal-out');
  modal.classList.remove('modal--open');
  modalWindow.removeEventListener('animationend', animateOut);
};

const modalCloseHandler = () => {
  modalWindow.addEventListener('animationend', animateOut);
  modalWindow.classList.add('modal-out'); 
}

btnOpen.addEventListener('click', modalOpenHandler);
btnClose.addEventListener('click', modalCloseHandler);
