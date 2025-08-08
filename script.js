function addToCart(element) {
    const productElement = element.parentElement;
    const id = productElement.getAttribute('data-id');
    const name = productElement.getAttribute('data-name');
    const price = parseFloat(productElement.getAttribute('data-price'));

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

  // Optional: update a visual counter per item or total
    const counter = productElement.querySelector('.item-counter');
    if (counter) {
        counter.textContent = `Added: ${existingItem ? existingItem.quantity : 1}`;
    }
}


function goToCart(){
    window.location.href='Go To Cart.html'
}




  


