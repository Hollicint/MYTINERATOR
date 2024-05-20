// Ensure this script runs only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the button
    var sayHiBtn = document.getElementById('sayHiBtn');

    // Add an event listener to the button
    sayHiBtn.addEventListener('click', function() {
        // Display an alert saying "Hi"
        alert('Hi');
    });
});
