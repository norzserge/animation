const wrap = document.querySelector('.wrap');
const element = document.querySelector('.box');
let scale = 1;
const scaleStep = 0.05;

wrap.addEventListener('wheel', wheelHandler);

function wheelHandler(evt) {
	evt.preventDefault();
	const delta = evt.deltaY;

	if (delta > 0) {
		scale = scale + scaleStep;
	} else if (scale >= 0) {
		scale = scale - scaleStep;
	}
	element.setAttribute('style', `transform: scale(${scale});`);
}
