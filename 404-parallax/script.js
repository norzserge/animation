const parallaxBox = document.querySelector('.parallax');
const layers = parallaxBox.querySelectorAll('.parallax__layer');
// размер области просмотра
const parallaxWidth = parallaxBox.offsetWidth;
const parallaxHeight = parallaxBox.offsetHeight;

const parallax = (evt) => {
  const coordX = evt.clientX - parallaxWidth / 2;
  const coordY = evt.clientY - parallaxHeight / 2;

  layers.forEach((layer)=>{
    const layerSpeed = layer.dataset.speed;
    const x = (coordX * layerSpeed).toFixed(2);
    const y = (coordY * layerSpeed).toFixed(2);
    layer.setAttribute('style', `transform: translate(${x}px, ${y}px);`)
  });
};

parallaxBox.addEventListener('mousemove', parallax);

const stopParallax = (evt) => {
  layers.forEach((layer)=>{
    layer.removeAttribute('style');
  })
}

parallaxBox.addEventListener('mouseout', stopParallax);
