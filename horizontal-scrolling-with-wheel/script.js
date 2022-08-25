/**
 * Найдём элементы и запишем в переменные. 
 * Найдём ширину экрана sectionWidth и ширину прокручиваемых элементов listWidth.
 * Введём дополнительные переменные: progress для значения value индикатора выполнения, 
 * dist для хранения значения смещения элементов, 
 * которое будем подставлять в translateX(), и шаг прокрутки step в 50px.
 * Сразу же рассчитаем максимальное значение прокрутки maxDist с запасом на один шаг, 
 * чтобы последний элемент был немного сдвинут от края контейнера, а не прижат к нему вплотную.
 */
const section = document.querySelector(".scroller");
const list = section.querySelector(".scroller__list");
const progressBar = section.querySelector(".scroller__progress-bar");

const sectionWidth = section.clientWidth;
const listWidth = list.scrollWidth;

let progress = 0, dist = 0;
const step = 50;

const maxDist = listWidth - sectionWidth + step;

progressBar.value = progress;

/**
 * Для секции добавим слушатель события прокрутки колеса мыши wheel, 
 * в колбэк wheelHandler передадим событие evt, выключим поведение по умолчанию,
 * чтобы не происходило событие scroll.
 */
section.addEventListener("wheel", wheelHandler);

function wheelHandler(evt) {
  evt.preventDefault();

/**
 * Так как весь блок с элементами будет смещаться налево, значение dist должно быть меньше либо равно нулю. 
 * Больше нуля значение быть не должно, так как это означает, что первый элемент сместится направо. 
 * Поэтому в условии учтём ещё несколько факторов:
 * - (evt.deltaY > 0) означает, что было сделано движение колеса мыши;
 * - (listWidth + dist > sectionWidth - step * 2) означает, что мы не прокрутили элементы слишкомдалеко налево.
 * Внутри функции будем в зависимости от направления прокрутки evt.deltaY увеличивать или уменьшать dist на шаг step.
 */
  if (evt.deltaY > 0 &&
    dist <= 0 &&
    listWidth + dist > sectionWidth - step * 2) {
    dist = dist - step;
  } else if (dist < 0) {
    dist = dist + step;
  }

  list.setAttribute("style", `transform: translateX(${dist}px)`);
  progress = ((Math.abs(dist) * 100) / maxDist).toFixed(0);

  progressBar.value = progress;
}
