const progressBar = document.querySelector('.progress-bar');
const progressBarValue = progressBar.querySelector('.progress-bar__value');
const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', ()=>{
	const windowScroll = window.pageYOffset;
	const progressBarWidth  = (windowScroll / windowHeight).toFixed(2);

	progressBarValue.setAttribute('style', `transform: scaleX(${progressBarWidth});`);
});