"use strict"

const item = document.querySelector('.parallax__assets');

const SPEED = 0.005;

function onCardMove (evt) {
	const a =  - (evt.offsetY - item.offsetHeight / 2) * SPEED;
	const b = (evt.offsetX - item.offsetWidth / 2) * SPEED;

	item.setAttribute('style', `transform: rotateX(${a}deg) rotateY(${b}deg)`);
}

function onCardOut () {
	item.removeAttribute('style');
}

item.addEventListener('mousemove', onCardMove);
item.addEventListener('mouseout', onCardOut);
