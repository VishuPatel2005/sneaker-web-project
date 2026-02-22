
if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
}

// Function to add an item to the cart
function addToCart(id, name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    
    // Check if the item already exists in the cart
    let existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;  // Increase quantity if item exists
    } else {
        // Add new item to the cart
        cart.push({
            id: id,
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }
    
    // Update the localStorage with new cart data
    localStorage.setItem('cart', JSON.stringify(cart));
    
    alert(`${name} has been added to the cart!`);
    
    // Display the updated cart
    displayCart();
}

// Function to get the cart contents
function getCart() {
    return JSON.parse(localStorage.getItem('cart'));
}

// Function to display the cart contents
function displayCart() {
    
    let cart = getCart();
    let cartHtml = '';
    
    for (let i = 0; i < cart.length; i++) {
        cartHtml += `
          <div>
            <img src="${cart[i].image}" alt="${cart[i].name}">
            <h4>${cart[i].name}</h4>
            <p>Price: ${cart[i].price} x ${cart[i].quantity}</p>
            
          </div>
        `;
    }
    
    // Display the cart HTML
    document.getElementById('cart').innerHTML = cartHtml;
}

