const screenHeight = document.documentElement.clientHeight;

const listItems = document.querySelectorAll('.list-item');
const firstBox = document.querySelector('.box-1');
const secondBox = document.querySelector('.box-2');

document.addEventListener('scroll', () => {
  listItems.forEach(item => {
    if (isPartiallyVisible(item)) {
      item.classList.add('list-item--active');
    } else {
      item.classList.remove('list-item--active');
    }
  });

  if (isFullVisible(firstBox)) {
    firstBox.classList.add('box-1--active');
  } else {
    firstBox.classList.remove('box-1--active');
  }

  if (isFullVisible(secondBox)) {
    secondBox.classList.add('box-2--active');
  } else {
    secondBox.classList.remove('box-2--active');
  }

});

const isPartiallyVisible = (element) => {
  const { top, bottom } = element.getBoundingClientRect();

  if (top < screenHeight && bottom > 0) {
    return true;
  }
}

const isFullVisible = (element) => {
  const { bottom } = element.getBoundingClientRect();

  if (bottom < screenHeight) {
    return true;
  }
}