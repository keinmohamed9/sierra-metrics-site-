document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inquiryForm");
  const status = document.getElementById("formStatus");
  if (form && status) {
    form.addEventListener("submit", () => {
      status.style.color = "#0F2537";
      status.textContent = "Redirecting to confirmation...";
    });
  }
});
