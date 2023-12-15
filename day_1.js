function validateForm() {
    // Perform your form validation here
    // Example: Ensure the message has more than 5 words
    var message = document.getElementById('message').value;
    if (message.split(/\s+/).length <= 5) {
        alert('Please enter a message with more than 5 words.');
        return false;
    }
    return true;
}

// Add this to your existing script.js file

function openProjectModal(projectId1, projectId2) {
    // Customize this function to show a modal or perform any other action based on the project IDs
    console.log('Open modal for project ' + projectId1 + ' and ' + projectId2);

    // Example: Display an alert with the project IDs
    alert('Open modal for project ' + projectId1 + ' and ' + projectId2);
}


// Add this to your existing script.js file

function validateForm() {
    // Get form inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

    // Basic validation
    if (name === '' || email === '' || phone === '' || message === '') {
        alert('All fields are required. Please fill them out.');
        return false;
    }

    // Additional validations
    if (message.split(/\s+/).length <= 5) {
        alert('The message should have more than 5 words.');
        return false;
    }

    if (!phone.startsWith('355')) {
        alert('Phone number should start with 355.');
        return false;
    }

    // You can add more specific validations as needed

    // If all validations pass, you can submit the form or perform other actions
    alert('Form submitted successfully!');
    return true;
}
