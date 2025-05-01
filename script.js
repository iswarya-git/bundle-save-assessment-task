
const options = document.querySelectorAll('.option');
const totalDisplay = document.getElementById('total-amount');

options.forEach(option => {
  option.addEventListener('click', () => {
    // Remove "selected" from all options
    options.forEach(opt => opt.classList.remove('selected'));
    // Add "selected" to the clicked option
    option.classList.add('selected');

    // Update total price
    const price = option.getAttribute('data-price');
    totalDisplay.textContent = `DKK ${parseFloat(price).toFixed(2)}`;
  });
});
