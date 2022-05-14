'use strict'

const accordeon = document.querySelector(".accordeon");
const accordeonTitles = accordeon.querySelectorAll(".accordeon__title");

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
  accordeonTitle.addEventListener("click", function () {
    const activeTitle = accordeon.querySelector(".accordeon__title--active");
    const activeDescr = accordeon.querySelector(".accordeon__descr.accordeon__descr--visible");
    const clickedDescr = accordeonTitle.parentElement.querySelector(".accordeon__descr");

    if (activeTitle) {
      activeTitle.classList.remove("accordeon__title--active");
    }

    accordeonTitle.classList.toggle("accordeon__title--active");

    if (activeDescr) {
      activeDescr.classList.remove("accordeon__descr--visible");
      activeDescr.style.maxHeight = null;
    }

    clickedDescr.classList.toggle("accordeon__descr--visible");
    clickedDescr.style.maxHeight = clickedDescr.scrollHeight + "px"; 
  });
});

