document.addEventListener('DOMContentLoaded', () => {
    const checkoutButton = document.querySelector('.checkout-button');
    const checkoutForm = document.getElementById('checkout-form');
    const cancelCheckoutButton = document.getElementById('cancel-checkout');
    const checkoutFormElement = document.getElementById('checkout');


    function showCheckoutForm() {
        checkoutForm.style.display = 'block';
    }


    function hideCheckoutForm() {
        checkoutForm.style.display = 'none';
    }


    function handleCheckout(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const paymentMethod = document.getElementById('payment').value;


        alert(`Thank you, ${name}! Your order has been placed. 
        \nAddress: ${address}
        \nPayment Method: ${paymentMethod}`);


        clearCart();
        hideCheckoutForm();
    }


    function clearCart() {
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = '';
        const totalElement = document.getElementById('total');
        totalElement.textContent = 'Total: $0';
        localStorage.removeItem('cart');
    }


    checkoutButton.addEventListener('click', () => {
        showCheckoutForm();

    });


    checkoutFormElement.addEventListener('submit', handleCheckout);



    function autoShowCheckoutIfCartNotEmpty() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length > 0) {
            showCheckoutForm();
        }
    }

    autoShowCheckoutIfCartNotEmpty();
});