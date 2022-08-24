/**
 * Можно менять цвет с каким-то шагом по цветовому кругу. 
 * Для этого удобно воспользоваться цветовой моделью HSL https://ru.wikipedia.org/wiki/HSL,
 * где первый параметр hue отвечает за тон цвета. Измеряется в градусах от нуля до 360.
 * Исходный жёлтый цвет в CSS у body имеет запись hsl (53deg 98% 65%), 
 * что равнозначно #fde74c или rgb (253 233 78). При прокрутке вниз будем увеличивать тон на colorStep,
 * а при прокрутке наверх — уменьшать. Если прокрутка равна нулю, то есть мы вернулись в верхнюю точку,
 * цвет снова будет жёлтым.
 */

// Тон изначального желтого цвета body в HSL-формате 
let colorResultHSL = 53;
// Высота всего документа
const documentHeight = document.documentElement.scrollHeight;
// Высота видимой области
const screenHeight = window.innerHeight;
/** 
* colorStep - коэф. (шаг), позволяющий при конечном скроле отдать 360deg
* 360 - максмальное значение градуса в HSL-формате.
*/ 
const colorStep = (documentHeight - screenHeight) / 360;

function scrolling() {
  const { scrollTop } = document.documentElement;
  colorResultHSL = Math.ceil(scrollTop/colorStep);

  // если достигает начала документа, то сетаем значение дефолтного желтого цвета
  if (scrollTop === 0) {
    colorResultHSL = 53;
  } 

  document.body.setAttribute('style', `background-color: hsl(${colorResultHSL}deg 98% 65%);`);
}

window.addEventListener("scroll", scrolling);