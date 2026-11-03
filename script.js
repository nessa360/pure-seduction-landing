const form = document.querySelector("#registrationForm");
const successMessage = document.querySelector(".success-message");
const errorMessage = document.querySelector(".error-message");
const submitButton = form.querySelector("button");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  submitButton.disabled = true;
  submitButton.innerHTML = "Sending registration <span>…</span>";
  successMessage.hidden = true;
  errorMessage.hidden = true;

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    submitButton.innerHTML = "Registration received <span>✓</span>";
    successMessage.hidden = false;
    form.reset();
  } catch (error) {
    submitButton.disabled = false;
    submitButton.innerHTML = "Complete registration <span>→</span>";
    errorMessage.hidden = false;
  }
});
