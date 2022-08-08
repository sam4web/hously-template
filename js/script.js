const menuBar = document.querySelector('.menu-bar');
const navToggle = document.querySelector('.nav-toggle');

menuBar.addEventListener('click', function () {
  menuBar.classList.toggle('menu-bar-active');
  navToggle.classList.toggle('nav-toggle-active');
});
