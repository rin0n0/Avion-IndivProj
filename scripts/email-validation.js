document.addEventListener("DOMContentLoaded", () => {
    const mailingForms = document.querySelectorAll('.mailling__input');

    mailingForms.forEach(form => {
        const input = form.querySelector('input[type="email"]');
        const button = form.querySelector('button');
        const errorMessage = form.querySelector('.error-message');

        button.addEventListener('click', () => {
            const email = input.value.trim();
            const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

            if (!isValid) {
                input.classList.add('invalid');
                errorMessage.style.display = 'block';
            } else {
                input.classList.remove('invalid');
                errorMessage.style.display = 'none';
                console.log('Valid email:', email);
            }
        });
    });
});