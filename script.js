// File: script.js

// Ensure the script runs after the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', function() {
    // Select the form and the feedback division.
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Add an event listener for the form's submit event.
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior (which would reload the page).
        event.preventDefault();

        // Retrieve and trim input values from the form fields.
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation variables.
        let isValid = true; // Tracks the overall validation status.
        const messages = []; // Stores validation error messages.

        // --- Username Validation ---
        // Check if username length is less than 3.
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // --- Email Validation ---
        // Check if email includes both '@' and '.' characters.
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // --- Password Validation ---
        // Ensure password length is at least 8.
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // --- Displaying Feedback ---

        // Make the feedbackDiv visible.
        feedbackDiv.style.display = "block";

        if (isValid) {
            // If all validations pass, display a success message.
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green color for success
            feedbackDiv.style.backgroundColor = "#d4edda"; // Light green background
            // Optionally, you could reset the form here: form.reset();
            console.log("Registration successful! Data:", { username, email, password });
        } else {
            // If any validation fails, join error messages and display them.
            feedbackDiv.innerHTML = messages.join('<br>'); // Use innerHTML to render <br> tags
            feedbackDiv.style.color = "#dc3545"; // Red color for errors
            feedbackDiv.style.backgroundColor = "#ffbaba"; // Light red background
            console.log("Registration failed. Errors:", messages);
        }
    });
});
