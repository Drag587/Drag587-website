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

    updateCartCounter();
}
function updateCartCounter(){
    const cartCount = document.getElementById('cart-count')
    const cartItems = JSON.parse(localStorage.getItem('cart)) || [];
    cartCount.textContent = cart.length
}


function goToCart(){
    window.location.href='Go To Cart.html'
}




  


