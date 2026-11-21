document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inquiryForm");
  const status = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.style.color = "#0F2537";
      status.textContent = "Sending inquiry...";

      const formData = new FormData(form);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      try {
        const response = await fetch("https://web3forms.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: json
        });
        const result = await response.json();

        if (result.success) {
          status.style.color = "#1B7A43";
          status.textContent = "✓ Thank you. Your inquiry has been delivered to Sierra Metrics & Economic Research Ltd.";
          form.reset();
        } else {
          status.style.color = "#B91C1C";
          status.textContent = result.message || "Submission failed. Please check your Web3Forms settings.";
        }
      } catch (error) {
        status.style.color = "#B91C1C";
        status.textContent = "Connection blocked by browser or network. Please check your internet and try again.";
      }
    });
  }
});
