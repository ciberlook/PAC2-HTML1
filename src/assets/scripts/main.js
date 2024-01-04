

const mButton = document.querySelector('.sandwich');
const menu = document.querySelector('.menu-principal');

mButton.addEventListener('click', (e) => {
  if (e.target.classList[0] === 'bar1' || e.target.classList[0] === 'bar2' || e.target.classList[0] === 'bar3')
    e.target.parentElement.classList.toggle("change");
  else
    e.target.classList.toggle("change");

  menu.classList.toggle('menu-principal--hidden');
}, false);