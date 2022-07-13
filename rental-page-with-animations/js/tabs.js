const tabLinks = document.querySelectorAll(".tabs__link");
const tabContents = document.querySelectorAll(".tab-content__item");

tabLinks.forEach(function(element) {
   element.addEventListener("click", openTabs);
});

function openTabs(evt) {
   const btnTarget = evt.currentTarget;
   const workId = btnTarget.dataset.work;

   tabContents.forEach(function(item) {
      item.classList.remove("tab-content__item--active");
   });

   tabLinks.forEach(function(item) {
      item.classList.remove("tabs__link--active");
   });

   document.querySelector(`#${workId}`).classList.add("tab-content__item--active");

   btnTarget.classList.add("tabs__link--active");
}
