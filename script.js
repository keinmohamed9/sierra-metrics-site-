document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inquiryForm");
  const status = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      status.textContent = `Thank you, ${name}. Your inquiry has been logged for Sierra Metrics & Economic Research Ltd.`;
      form.reset();
    });
  }
});
