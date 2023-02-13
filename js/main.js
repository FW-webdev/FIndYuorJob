const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar');
const closeMenu = document.querySelector('.close');

menuButton.addEventListener("click", toggleMenu);
closeMenu.addEventListener("click", toggleMenu);

function toggleMenu (event) {
    menu.classList.toggle('is-open')
}
