const menuBtn = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.nav-menu');


menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});