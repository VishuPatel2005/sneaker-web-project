// Get the form elements
const form = document.getElementById('payment-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const addressInput = document.getElementById('address');
const cardNumberInput = document.getElementById('card-number');
const expirationDateInput = document.getElementById('expiration-date');
const cvvInput = document.getElementById('cvv');
const payButton = document.getElementById('pay-button');

// Add event listener to the form
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate the form fields
    if (nameInput.value === '' || emailInput.value === '' || addressInput.value === '' || cardNumberInput.value === '' || expirationDateInput.value === '' || cvvInput.value === '') {
        alert('Please fill in all the fields');
        return;
    }

    // Process the payment (this is just a dummy implementation)
    alert('Payment processed successfully!');
});
