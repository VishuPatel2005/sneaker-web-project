document.addEventListener('DOMContentLoaded', () => {
    // Fetch cart data from localStorage or initialize an empty array if the cart is empty
    const cartItemsContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('total-amount');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the cart is empty, show a message, and exit
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty!</p>';
        return;
    }

    let totalAmount = 0;

    // Iterate through each item in the cart to display them
    cart.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        const imageSrc = item.image || 'images/default.jpg'; // Default image if none provided
        cartItemDiv.innerHTML = `
            <img src="${imageSrc}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h2>${item.name}</h2>
                <p>Price: ₹${item.price}</p>
                <div class="quantity-control">
                    <button class="quantity-btn decrease-btn" data-index="${index}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn increase-btn" data-index="${index}">+</button>
                </div>
                <button class="remove-item" data-index="${index}">Remove</button>
            </div>
        `;

        // Append the dynamically created item to the cart container
        cartItemsContainer.appendChild(cartItemDiv);
        // Calculate the total amount for all items in the cart
        totalAmount += item.price * item.quantity;
    });

    // Update the total amount displayed on the cart page
    totalElement.textContent = totalAmount.toLocaleString();

    // Handle click events for updating quantities or removing items
    cartItemsContainer.addEventListener('click', (e) => {
        const index = e.target.dataset.index;

        // Decrease the quantity if the "decrease" button is clicked
        if (e.target.classList.contains('decrease-btn') && cart[index].quantity > 1) {
            cart[index].quantity -= 1;
            updateCart();
        }

        // Increase the quantity if the "increase" button is clicked
        if (e.target.classList.contains('increase-btn')) {
            cart[index].quantity += 1;
            updateCart();
        }

        // Remove the item from the cart if the "remove" button is clicked
        if (e.target.classList.contains('remove-item')) {
            cart.splice(index, 1);
            updateCart();
        }
    });

    // Function to update the cart in localStorage and reload the page to reflect changes
    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.reload(); // Reload the page to update the UI
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add click event listeners to each "Add to Cart" button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const itemName = button.dataset.name;
            const itemPrice = parseFloat(button.dataset.price);
            const itemImage = button.dataset.image || 'images/default.jpg'; // Default image

            // Create a cart item object with name, price, image, and quantity
            const cartItem = { name: itemName, price: itemPrice, image: itemImage, quantity: 1 };

            // Get the existing cart data or initialize an empty array
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingItemIndex = cart.findIndex(item => item.name === itemName);

            // If the item is already in the cart, increase its quantity
            if (existingItemIndex > -1) {
                cart[existingItemIndex].quantity += 1;
            } else {
                const cartItem = {
                    id: id,
                    name: name,
                    price: price,
                    image: image, // Store the custom image URL
                    quantity: 1
                };
                // If the item is not in the cart, add it to the cart array
                cart.push(cartItem);
            }

            // Save the updated cart to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Notify the user that the item has been added to the cart
            alert(`${itemName} added to the cart!`);
        });
    });
});
