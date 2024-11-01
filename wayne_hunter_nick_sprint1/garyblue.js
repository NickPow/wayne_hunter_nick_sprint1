//section element funncion
const SelectElement = function (element) {
  return document.querySelector(element);
};

let menuToggler = SelectElement(".menu-toggle");
let body = SelectElement("body");

menuToggler.addEventListener("click", function () {
  body.classList.toggle("open");
});

//scroll reveal
window.sr = ScrollReveal();
sr.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

// Nick's JavaScript for the order page
// Function to calculate the total price
function calculateSubtotal() {
  const tatersQuantity =
    parseInt(document.getElementById("tatersQuantity").value) || 0;
  const porkBitesQuantity =
    parseInt(document.getElementById("porkBitesQuantity").value) || 0;
  const nachosQuantity =
    parseInt(document.getElementById("nachosQuantity").value) || 0;
  const dipQuantity =
    parseInt(document.getElementById("dipQuantity").value) || 0;
  const bisonBurgerQuantity =
    parseInt(document.getElementById("bisonBurgerQuantity").value) || 0;
  const steakQuantity =
    parseInt(document.getElementById("steakQuantity").value) || 0;
  const bigGaryQuantity =
    parseInt(document.getElementById("bigGaryQuantity").value) || 0;
  const mushroomBurgerQuantity =
    parseInt(document.getElementById("mushroomBurgerQuantity").value) || 0;
  const macCheeseQuantity =
    parseInt(document.getElementById("macCheeseQuantity").value) || 0;
  const bakedPotatoQuantity =
    parseInt(document.getElementById("bakedPotatoQuantity").value) || 0;
  const coleslawQuantity =
    parseInt(document.getElementById("coleslawQuantity").value) || 0;
  const asparagusQuantity =
    parseInt(document.getElementById("asparagusQuantity").value) || 0;
  const lavaCakeQuantity =
    parseInt(document.getElementById("lavaCakeQuantity").value) || 0;
  const tiramisuQuantity =
    parseInt(document.getElementById("tiramisuQuantity").value) || 0;
  const oldFashionQuantity =
    parseInt(document.getElementById("oldFashionQuantity").value) || 0;
  const seasonalStoutQuantity =
    parseInt(document.getElementById("seasonalStoutQuantity").value) || 0;
  const whiskeySourQuantity =
    parseInt(document.getElementById("whiskeySourQuantity").value) || 0;
  const moscowMuleQuantity =
    parseInt(document.getElementById("moscowMuleQuantity").value) || 0;

  if (
    tatersQuantity < 0 ||
    porkBitesQuantity < 0 ||
    nachosQuantity < 0 ||
    oldFashionQuantity < 0 ||
    seasonalStoutQuantity < 0 ||
    dipQuantity < 0 ||
    bisonBurgerQuantity < 0 ||
    steakQuantity < 0 ||
    bigGaryQuantity < 0 ||
    mushroomBurgerQuantity < 0 ||
    macCheeseQuantity < 0 ||
    bakedPotatoQuantity < 0 ||
    coleslawQuantity < 0 ||
    asparagusQuantity < 0 ||
    lavaCakeQuantity < 0 ||
    moscowMuleQuantity < 0 ||
    whiskeySourQuantity < 0 ||
    tiramisuQuantity < 0
  ) {
    alert("Please enter a non-negative quantity for all items.");
    return 0;
  }

  const tatersPrice = 5.99;
  const porkBitesPrice = 5.5;
  const nachosPrice = 7.5;
  const dipPrice = 4.99;
  const bisonBurgerPrice = 7.99;
  const steakPrice = 10.99;
  const bigGaryPrice = 7.99;
  const mushroomBurgerPrice = 7.99;
  const macCheesePrice = 4.99;
  const bakedPotatoPrice = 4.99;
  const coleslawPrice = 4.99;
  const asparagusPrice = 4.99;
  const lavaCakePrice = 4.0;
  const tiramisuPrice = 4.0;
  const oldFashionPrice = 5.0;
  const seasonalStoutPrice = 5.0;
  const whiskeySourPrice = 5.0;
  const moscowMulePrice = 5.0;

  return (
    tatersQuantity * tatersPrice +
    porkBitesQuantity * porkBitesPrice +
    nachosQuantity * nachosPrice +
    dipQuantity * dipPrice +
    bisonBurgerQuantity * bisonBurgerPrice +
    steakQuantity * steakPrice +
    bigGaryQuantity * bigGaryPrice +
    mushroomBurgerQuantity * mushroomBurgerPrice +
    macCheeseQuantity * macCheesePrice +
    bakedPotatoQuantity * bakedPotatoPrice +
    coleslawQuantity * coleslawPrice +
    asparagusQuantity * asparagusPrice +
    lavaCakeQuantity * lavaCakePrice +
    seasonalStoutQuantity * seasonalStoutPrice +
    tiramisuQuantity * tiramisuPrice +
    whiskeySourQuantity * whiskeySourPrice +
    moscowMuleQuantity * moscowMulePrice +
    oldFashionQuantity * oldFashionPrice
  );
}

// Function to set tip based on percentage buttons
function setTipPercentage(percentage) {
  const subtotal = calculateSubtotal();
  const tipAmount = subtotal * (percentage / 100);
  document.getElementById("tip").value = tipAmount.toFixed(2);
  updateTotal();
}

// Function to update the displayed subtotal and total
function updateTotal() {
  const subtotal = calculateSubtotal();
  document.getElementById(
    "subtotalDisplay"
  ).textContent = `Subtotal: $${subtotal.toFixed(2)}`;

  const hstRate = 0.15;
  const deliveryFee = 5.0;
  const tip = parseFloat(document.getElementById("tip").value) || 0;

  const hstAmount = subtotal * hstRate;
  const total = subtotal + hstAmount + deliveryFee + tip;
  document.getElementById(
    "totalDisplay"
  ).textContent = `Total (incl. HST & delivery): $${total.toFixed(2)}`;
}

// Function to validate user input fields
function validateInputs() {
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const creditCard = document.getElementById("creditCard").value.trim();
  const tip = parseFloat(document.getElementById("tip").value) || 0;

  // Validate that all fields are filled
  if (!name || !address || !creditCard) {
    alert("Please fill in all fields!");
    return false;
  }

  // Basic credit card validation
  const cardNumberPattern = /^[0-9]{16}$/;
  if (!cardNumberPattern.test(creditCard)) {
    alert("Please enter a valid 16-digit credit card number!");
    return false;
  }

  if (tip < 0) {
    alert("Tip amount cannot be negative!");
    return false;
  }

  return true;
}

// Function to handle the order submission
function submitOrder() {
  if (!validateInputs()) {
    return;
  }

  const subtotal = calculateSubtotal();

  if (subtotal === 0) {
    alert("You haven't selected any items!");
    return;
  }

  const hstRate = 0.15;
  const deliveryFee = 5.0;
  const tip = parseFloat(document.getElementById("tip").value) || 0;

  const hstAmount = subtotal * hstRate;
  const finalTotal = subtotal + hstAmount + deliveryFee + tip;

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;

  document.getElementById(
    "totalPrice"
  ).textContent = `Thank you, ${name}! Your order total is $${finalTotal.toFixed(
    2
  )}. Your order will be delivered to ${address}. Please allow up to 45 minutes for delivery.`;
  alert("Order Placed.");
}

// Function to store order details in localStorage
function storeOrderDetails() {
  const orderDetails = {
    tatersQuantity:
      parseInt(document.getElementById("tatersQuantity").value) || 0,
    porkBitesQuantity:
      parseInt(document.getElementById("porkBitesQuantity").value) || 0,
    nachosQuantity:
      parseInt(document.getElementById("nachosQuantity").value) || 0,
    dipQuantity: parseInt(document.getElementById("dipQuantity").value) || 0,
    bisonBurgerQuantity:
      parseInt(document.getElementById("bisonBurgerQuantity").value) || 0,
    steakQuantity:
      parseInt(document.getElementById("steakQuantity").value) || 0,
    bigGaryQuantity:
      parseInt(document.getElementById("bigGaryQuantity").value) || 0,
    mushroomBurgerQuantity:
      parseInt(document.getElementById("mushroomBurgerQuantity").value) || 0,
    macCheeseQuantity:
      parseInt(document.getElementById("macCheeseQuantity").value) || 0,
    bakedPotatoQuantity:
      parseInt(document.getElementById("bakedPotatoQuantity").value) || 0,
    coleslawQuantity:
      parseInt(document.getElementById("coleslawQuantity").value) || 0,
    asparagusQuantity:
      parseInt(document.getElementById("asparagusQuantity").value) || 0,
    lavaCakeQuantity:
      parseInt(document.getElementById("lavaCakeQuantity").value) || 0,
    tiramisuQuantity:
      parseInt(document.getElementById("tiramisuQuantity").value) || 0,
    oldFashionQuantity:
      parseInt(document.getElementById("oldFashionQuantity").value) || 0,
    seasonalStoutQuantity:
      parseInt(document.getElementById("seasonalStoutQuantity").value) || 0,
    whiskeySourQuantity:
      parseInt(document.getElementById("whiskeySourQuantity").value) || 0,
    moscowMuleQuantity:
      parseInt(document.getElementById("moscowMuleQuantity").value) || 0,
    name: document.getElementById("name").value.trim(),
    address: document.getElementById("address").value.trim(),
    creditCard: document.getElementById("creditCard").value.trim(),
    tip: parseFloat(document.getElementById("tip").value) || 0,
  };

  localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
}

// Event listeners to store data when inputs are updated
document
  .querySelectorAll("input[type='number'], input[type='text']")
  .forEach((input) => {
    input.addEventListener("change", storeOrderDetails);
  });
document.getElementById("tip").addEventListener("input", storeOrderDetails);
