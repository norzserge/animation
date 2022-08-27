const section = document.querySelector(".reviews");
const list = section.querySelector(".reviews__list");

const sectionWidth = section.clientWidth;
const listWidth = list.scrollWidth;
let dist = 0;
const step = 50;
const maxDist = listWidth - sectionWidth + step;

section.addEventListener("wheel", wheelHandler);

function wheelHandler(evt) {
  evt.preventDefault();

  if (evt.deltaY > 0 &&
    dist <= 0 &&
    listWidth + dist > sectionWidth - step * 3) {
    dist = dist - step;
  } else if (dist < 0 && evt.deltaY < 0) {
    dist = dist + step;
  }

  list.setAttribute("style", `transform: translateX(${dist}px)`);
}
