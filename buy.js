// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach((productCard) => {
        const minusButtons = productCard.querySelectorAll('.minus');
        const plusButtons = productCard.querySelectorAll('.plus');
        const quantityInputs = productCard.querySelectorAll('.quantity-input');
        const addToCartButtons = productCard.querySelectorAll('.add-to-cart');

        minusButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                const currentQuantity = parseInt(quantityInputs[index].value);
                if (currentQuantity > 1) {
                    quantityInputs[index].value = currentQuantity - 1;
                }
            });
        });

        plusButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                const currentQuantity = parseInt(quantityInputs[index].value);
                quantityInputs[index].value = currentQuantity + 1;
            });
        });

        addToCartButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                const quantity = parseInt(quantityInputs[index].value);
                const productName = productCard.querySelector('.product-name').innerText;

                addToCart(productName, quantity);
            });
        });
    });

    function addToCart(productName, quantity) {
        const cart = [];

        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }

        cart.push({ productName, quantity });

        localStorage.setItem('cart', JSON.stringify(cart));

        console.log(`${quantity} ${productName} added to cart.`);
    }
});