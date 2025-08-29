// This script handles the login functionality.
document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    // Check if the login form exists on the current page
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            // Prevent the form from submitting the default way
            event.preventDefault();

            // Get the values from the input fields
            const usernameInput = document.getElementById('username').value;
            const passwordInput = document.getElementById('password').value;

            // Check if the credentials are correct
            // Username: Rachit, Password: 1234
            if (usernameInput === 'Rachit' && passwordInput === '1234') {
                // If correct, show success and redirect to the homepage
                console.log('Login successful!');
                errorMessage.textContent = ''; // Clear any previous error messages
                
                // Redirect to the main homepage
                window.location.href = 'dashboard.html';

            } else {
                // If incorrect, show an error message
                console.log('Login failed. Incorrect username or password.');
                errorMessage.textContent = 'Invalid username or password.';
            }
        });
    }
});

