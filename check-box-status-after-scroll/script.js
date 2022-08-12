const main = document.querySelector('main');
const box = document.querySelector('.box');
const result = document.querySelector('.result');

window.addEventListener('scroll', function () {

	const boxTop = box.getBoundingClientRect().top;
	const boxBottom = box.getBoundingClientRect().bottom;
	const screenHeight = document.documentElement.clientHeight;

	if (boxTop >= screenHeight) {
		result.textContent = 'элемент скрыт внизу';
	}

	if (boxTop >= 0 && boxBottom <= screenHeight) {
		result.textContent = 'элемент виден полностью';
	}

	if (boxTop < screenHeight &&  boxBottom > screenHeight) {
		result.textContent = 'элемент виден частично верхней частью снизу экрана';
	}

	if (boxBottom > 0 && boxTop < 0) {
		result.textContent = 'элемент виден частично нижней частью наверху экрана';
	}

	if (boxBottom < 0) {
		result.textContent = 'элемент скрыт наверху';
	}
});