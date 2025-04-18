document.addEventListener('DOMContentLoaded', () => {
    const button1 = document.querySelector('.view-collection-btn-1');
    const button2 = document.querySelector('.view-collection-btn-2');
    const productSection = document.querySelector('.products');
    const productCards = document.querySelectorAll('.products__card');

    
    button1.addEventListener('click', () => {
        productCards.forEach(card => {
            card.style.display = 'block';
        });
        productSection.scrollIntoView({ behavior: 'smooth' });
    });
    button2.addEventListener('click', () => {
        productCards.forEach(card => {
            card.style.display = 'block';
        });
        productSection.scrollIntoView({ behavior: 'smooth' });
    });

});