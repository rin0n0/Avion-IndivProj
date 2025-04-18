document.addEventListener("DOMContentLoaded", () =>{
    const quantityContainer = document.querySelector('.product__quantity');
    const plusBtn = quantityContainer.querySelector('a:first-of-type');
    const minusBtn = quantityContainer.querySelector('a:last-of-type');
    const countDisplay = quantityContainer.querySelector('p');

    let quantity = parseInt(countDisplay.textContent) || 1;

    plusBtn.addEventListener('click', () => {
        quantity++;
        countDisplay.textContent = quantity;
    });

    minusBtn.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            countDisplay.textContent = quantity;
        }
    });
});