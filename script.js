const form = document.querySelector("#registrationForm");
const successMessage = document.querySelector(".success-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  form.querySelector("button").disabled = true;
  form.querySelector("button").innerHTML = "Registration received <span>✓</span>";
  successMessage.hidden = false;
  form.reset();
});
