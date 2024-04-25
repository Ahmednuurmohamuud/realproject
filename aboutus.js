// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Find the "Book Now" button by its class
    var bookNowButton = document.querySelector('.btn-primary');

    // Add a click event listener to the button
    bookNowButton.addEventListener('click', function() {
        // Here you can define what should happen when the button is clicked
        // For example, you can redirect the user to a booking page
        window.location.href = 'booking-page.html'; // Replace 'booking-page.html' with the actual URL of your booking page
    });
});
