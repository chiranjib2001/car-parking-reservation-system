// Example script.js file

// Handle form submission for login page
const loginForm = document.getElementById('login-form');

if (loginForm) {
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform login logic
    // Replace this with your own logic to handle the login process

    // Clear form fields
    loginForm.reset();
  });
}

// Handle form submission for registration page
const registerForm = document.getElementById('register-form');

if (registerForm) {
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform registration logic
    // Replace this with your own logic to handle the registration process

    // Clear form fields
    registerForm.reset();
  });
}

// Handle form submission for requesting service
const requestForm = document.getElementById('request-form');

if (requestForm) {
  requestForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form values
    const place = document.getElementById('place').value;
    const vehicle = document.getElementById('vehicle').value;
    const duration = document.getElementById('duration').value;

    // Perform request service logic
    // Replace this with your own logic to handle the service request

    // Clear form fields
    requestForm.reset();
  });
}

// Handle form submission for checking service status
const statusForm = document.getElementById('status-form');

if (statusForm) {
  statusForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form values
    const requestId = document.getElementById('requestId').value;

    // Perform check status logic
    // Replace this with your own logic to handle the status check

    // Clear form fields
    statusForm.reset();
  });
}
