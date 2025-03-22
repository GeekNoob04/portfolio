(function () {
  emailjs.init("DO9l_PdQsidrEtOsB"); // Replace with your actual public key
})();

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const submitButton = this.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    // Basic form validation
    const fromName = this.querySelector('input[name="user_name"]').value.trim();
    const fromEmail = this.querySelector(
      'input[name="user_email"]'
    ).value.trim();
    const phone = this.querySelector('input[name="phone"]').value.trim(); // Optional field
    const message = this.querySelector('textarea[name="message"]').value.trim();

    if (!fromName || !fromEmail || !message) {
      alert("Please fill in all required fields (Name, Email, and Message).");
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
      return;
    }

    // Prepare the template parameters
    const templateParams = {
      from_name: fromName,
      from_email: fromEmail,
      to_name: "Harshit",
      phone: phone || "Not provided",
      message: message,
    };

    // Send the email
    emailjs
      .send(
        "service_el7aac4", // Replace with your service ID
        "template_ygvlqrm", // Replace with your template ID
        templateParams
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          document.getElementById("contactForm").reset();
        },
        function (error) {
          console.error("FAILED...", error);
          alert("Failed to send message. Please try again later.");
        }
      )
      .finally(function () {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      });
  });
