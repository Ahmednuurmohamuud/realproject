// Define a function to handle adding a product to the wishlist
function addToWishlist(productName) {
    // You can implement the logic here to add the product to the wishlist
    alert(`Added ${productName} to wishlist!`);
  }
  
  // Define a function to handle viewing product details
  function viewDetails(productName) {
    // You can implement the logic here to view the details of the product
    alert(`Viewing details of ${productName}!`);
  }
  
  // Add event listeners to each "Add to wishlist" button and "Details" button
  document.addEventListener("DOMContentLoaded", function() {
    const addToWishlistButtons = document.querySelectorAll('.btn-outline-primary');
    const viewDetailsButtons = document.querySelectorAll('.btn-primary');
  
    addToWishlistButtons.forEach(button => {
      button.addEventListener('click', function() {
        const productName = this.closest('.card-body').querySelector('h5').textContent;
        addToWishlist(productName);
      });
    });
  
    viewDetailsButtons.forEach(button => {
      button.addEventListener('click', function() {
        const productName = this.closest('.card-body').querySelector('h5').textContent;
        viewDetails(productName);
      });
    });
  });
  