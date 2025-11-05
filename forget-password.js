// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("forgotPasswordForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting

    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
      alert("Password reset link sent to: " + email);
      form.reset();
    } else {
      alert("Please enter a valid email address.");
    }
  });

  function validateEmail(email) {
    // Basic email pattern check
    const pattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return pattern.test(email);
  }
});
