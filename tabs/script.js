'use strict'
const tabLinks = document.querySelectorAll(".tablinks");
const tabContents = document.querySelectorAll(".tabcontent");

tabLinks.forEach(function(element) {
   element.addEventListener("click", openTabs);
});

function openTabs(evt) {
   const btnTarget = evt.currentTarget;
   const country = btnTarget.dataset.country;

   tabContents.forEach(function(item) {
      item.classList.remove("tabcontent-active");
   });

   tabLinks.forEach(function(item) {
      item.classList.remove("tablinks-active");
   });

   document.querySelector(`#${country}`).classList.add("tabcontent-active");

   btnTarget.classList.add("tablinks-active");
}
