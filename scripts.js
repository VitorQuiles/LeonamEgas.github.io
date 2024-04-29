const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const closeEl = document.querySelector('.close');
const liBtn = document.querySelectorAll('.menu li');
const body = document.querySelector('body');

const closeMenu = () => {
  menu.classList.remove('open');
  overlay.classList.remove('open');
  body.style.overflow = 'auto';
}

hamburguer.addEventListener('click', () => {
  if (menu.classList.contains('open')) {
    closeMenu();
    return;
  }
  menu.classList.add('open');
  overlay.classList.add('open');
  body.style.overflow = 'none';
})

closeEl.addEventListener('click', () => {
  closeMenu();
})

liBtn.forEach((li) => {
  li.addEventListener('click', () => {
    closeMenu();
  });
});