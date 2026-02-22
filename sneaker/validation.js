document.querySelector('form').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var phone = document.getElementById('phone').value;

    // Email validation pattern
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Password validation pattern
    var passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;

    // Check if username is empty
    if (username === "") {
        event.preventDefault();
        alert("Username cannot be empty.");
        return;
    }

    // Check if email is empty or invalid
    if (email === "" || !email.match(emailPattern)) {
        event.preventDefault();
        alert("Please enter a valid email address.");
        return;
    }
    
     // Check if phone number is empty or invalid
    if (phone === "" || !phone.match(phonePattern)) {
        event.preventDefault();
        alert("Please enter a valid phone number.");
        return;
    }

    // Check if password is empty
    if (password === "") {
        event.preventDefault();
        alert("Password cannot be empty.");
        return;
    }

    // Check if password meets the requirements
    if (!password.match(passwordPattern)) {
        event.preventDefault();
        alert("Password must be at least 6 characters long, contain one uppercase letter, and one special character.");
        return;
    }

    // Check if confirm password is empty
    if (confirmPassword === "") {
        event.preventDefault();
        alert("Please confirm your password.");
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        event.preventDefault();
        alert("Passwords do not match. Please try again.");
        return;
    }

    // If all checks pass, allow the form to be submitted
});
