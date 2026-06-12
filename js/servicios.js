const movil = document.getElementById('hamburger');
const menu = document.getElementById('menu');

movil.addEventListener('click', () => {
    menu.classList.toggle('active');
});