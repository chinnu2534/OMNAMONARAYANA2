document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.getElementById('investmentDropdown');
    const quantityDisplay = document.getElementById('quantityDisplay');

    // Define quantities for each option
    const quantities = {
        'KITE': 129,
        'GROWW': 72
    };

    // Function to update quantity based on selection
    function updateQuantity() {
        const selectedValue = dropdown.value;
        console.log('Selected Value:', selectedValue); // Debugging line
        quantityDisplay.textContent = quantities[selectedValue] || 'N/A';
    }

    // Event listener for dropdown change
    dropdown.addEventListener('change', updateQuantity);

    // Initialize quantity display with the current dropdown value
    updateQuantity();
});
