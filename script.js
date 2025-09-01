// Part 1: Event Handling
const toggleBtn = document.getElementById("toggleMessageBtn");
const message = document.getElementById("message");

toggleBtn.addEventListener("click", () => {
  message.style.display = (message.style.display === "none") ? "block" : "none";
});

// Part 2: Interactive Elements
// Light/Dark mode toggle
const modeToggle = document.getElementById("modeToggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter game
let counter = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("increase").addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});
document.getElementById("decrease").addEventListener("click", () => {
  counter--;
  counterDisplay.textContent = counter;
});

// Part 3: Form Validation
const form = document.getElementById("signupForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let errors = [];

  if (name.length < 3) errors.push("Name must be at least 3 characters.");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Invalid email format.");
  if (password.length < 6) errors.push("Password must be at least 6 characters.");

  if (errors.length > 0) {
    feedback.textContent = errors.join(" ");
    feedback.style.color = "red";
  } else {
    feedback.textContent = "✅ Form submitted successfully!";
    feedback.style.color = "green";
    form.reset();
  }
});
