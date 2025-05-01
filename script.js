
const options = document.querySelectorAll('.option');
const totalDisplay = document.getElementById('total-amount');

options.forEach(option => {
  option.addEventListener('click', () => {
    options.forEach(opt => opt.classList.remove('selected'));
    option.classList.add('selected');
    const price = option.getAttribute('data-price');
    totalDisplay.textContent = `DKK ${parseFloat(price).toFixed(2)}`;
  });
});
