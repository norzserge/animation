'use strict'

const btnScrollTop= document.querySelector('.btn--scroll-to-top');
const btnScrollCenter= document.querySelector('.btn--scroll-to-center');
const btnScrollBottom= document.querySelector('.btn--scroll-to-bottom');
const element = document.querySelector('.box');

btnScrollTop.addEventListener('click', ()=>{
  element.scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
});

btnScrollCenter.addEventListener('click', ()=>{
  element.scrollIntoView({
    block: "center",
    behavior: "smooth"
  });
});

btnScrollBottom.addEventListener('click', ()=>{
  element.scrollIntoView({
    block: "end",
    behavior: "smooth"
  });
});
