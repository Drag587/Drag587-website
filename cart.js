
//* START THE CART PROCESS*  *WAD-FOOD-WEB*
function renderCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    

    cartItemsElement.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        
        const quantitySelect = document.createElement('select');
        quantitySelect.className = 'quantity-select';
        for (let i = 1; i <= item.quantity; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.text = i;
            quantitySelect.appendChild(option);
        }

        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} x ${item.quantity} - ₦${item.price * item.quantity}
        `;
        li.appendChild(quantitySelect);

        const removeBtn = document.createElement('button');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => removeFromCart(index, parseInt(quantitySelect.value));
        li.appendChild(removeBtn);

        cartItemsElement.appendChild(li);
    });
    

    totalPriceElement.textContent = `Total: ₦${total.toFixed(2)}`;
}

function clearCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
// CLEAR ANY DATA LISTED IN THE CART FROM THE LOCAL STORAGE   *WAD-FOOD-WEB*
if (cart.length === 0){
alert("You don't have any item in your cart. Browse and add items to your cart to checkout.");
        window.location.href = "index.html"
        return; 
}
localStorage.removeItem('cart');

// TO RE-RUN THE CART TO SHOW IT'S EMPTY *WAD-FOOD-WEB*


alert("All items have been removed from your cart.");
}

function removeFromCart(index, quantityToRemove) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart[index].quantity <= quantityToRemove) {
        
        cart.splice(index, 1);
    } else {
        
        cart[index].quantity -= quantityToRemove;
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}


window.onload = renderCart;