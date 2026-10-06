const menu = document.querySelector('.menu');
const navbar = document.querySelector('.navbar');
menu.addEventListener('click', () => navbar.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => navbar.classList.remove('open')));
