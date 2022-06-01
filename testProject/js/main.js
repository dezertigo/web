let btnToggle = document.querySelector('.menu__btn');
let menu = document.querySelector('.menu__list');

btnToggle.addEventListener('click', ()=> {
  menu.classList.toggle('menu__list--active');
});