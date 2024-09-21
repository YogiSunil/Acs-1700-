// Get references to DOM elements
const billInput = document.querySelector('#input-bill');
const tipInput = document.querySelector('#input-tip');
const peopleInput = document.querySelector('#input-people');
const displayTip = document.querySelector('#display-tip');
const displayTotal = document.querySelector('#display-total');

// Add event listeners to the inputs
billInput.addEventListener('input', calculateTip);
tipInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);

// Function to calculate the tip and total per person
function calculateTip() {
  const bill = parseFloat(billInput.value);
  const percent = parseFloat(tipInput.value);
  const people = parseInt(peopleInput.value);

  if (bill && percent && people) {
    const tip = (bill * percent) / 100;
    const total = (bill + tip) / people;

    displayTip.innerHTML = `$${tip.toFixed(2)}`;
    displayTotal.innerHTML = `$${total.toFixed(2)}`;
  }
}
