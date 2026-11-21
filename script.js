document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inquiryForm");
  const status = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.style.color = "#0F2537";
      status.textContent = "Sending inquiry...";

      const formData = new FormData(form);
      try {
        const response = await fetch("https://web3forms.com", {
          method: "POST",
          body: formData
        });
        const result = await response.json();

        if (result.success) {
          status.style.color = "#1B7A43";
          status.textContent = "✓ Thank you. Your inquiry has been delivered to Sierra Metrics & Economic Research Ltd.";
          form.reset();
        } else {
          status.style.color = "#B91C1C";
          status.textContent = "Submission failed. Please verify your Web3Forms Access Key.";
        }
      } catch (error) {
        status.style.color = "#B91C1C";
        status.textContent = "Network error. Please try again shortly.";
      }
    });
  }
});
