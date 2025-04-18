document.addEventListener("DOMContentLoaded", () => {
    const burgerButton = document.getElementById('burger-button');
    const mainLinks = document.querySelector('.main-links');

    burgerButton.addEventListener('click', (e) => {
        e.preventDefault(); // предотвращает переход по #
        mainLinks.classList.toggle('main-links--open');
    });
});
