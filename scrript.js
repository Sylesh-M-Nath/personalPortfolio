const namee = document.getElementById('namee');
const phonenumber = document.getElementById('phonenumber');
const message = document.getElementById('message');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    let messages = [];
    const nameRegex = /^[A-Za-z]+$/;

   
    if (namee.value === '' || namee.value === null) {
        messages.push('Name is required');
    }
 else if (!nameRegex.test(namee.value)) {
    messages.push('Name should only contain letters (no numbers)');
}


    
    if (phonenumber.value === '' || phonenumber.value === null) {
        messages.push('Phone Number is required');
    } else if (!/^\d{10}$/.test(phonenumber.value)) {
        // Check if the phone number is not exactly 10 digits
        messages.push('Phone Number should be exactly 10 digits');
    }

    // Check if the message field is empty or null
    if (message.value === '' || message.value === null) {
        messages.push('Message is required');
    }

    // If there are error messages, prevent form submission and display them as an alert
    if (messages.length > 0) {
        e.preventDefault(); // Prevent the form from submitting

        // Display error messages as an alert
        alert(messages.join('\n'));
    }
});

