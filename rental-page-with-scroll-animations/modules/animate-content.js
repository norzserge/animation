const screenHeight = document.documentElement.clientHeight;
const animateBlocks = document.querySelectorAll(".content__block");

function scrolling() {
  for (var i = 0; i < animateBlocks.length; i++) {
    const contentBlock = animateBlocks[i];
    const contentText = contentBlock.querySelector('.content__text-wrap');
    const contentImage = contentBlock.querySelector('.content__image');

    if (isHalfVisible(contentBlock)) {
      contentText.classList.add("content__text-wrap--animated");
      contentImage.classList.add("content__image--animated");
    }
  }
}

function isHalfVisible(element) {
  const elementBoundary = element.getBoundingClientRect();
  const top = elementBoundary.top;
  const height = elementBoundary.height;

  return (top + height >= 0) && (top + 0.5 * height <= screenHeight);
} 


window.addEventListener("scroll", scrolling);
