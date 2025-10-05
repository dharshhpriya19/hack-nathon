document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual form submission
  const emailEl = document.getElementById("email");
  const pwdEl = document.getElementById("password");
  const emailErrorEl = document.getElementById("emailError");
  const pwdErrorEl = document.getElementById("passwordError");

  const email = emailEl.value.trim();
  const password = pwdEl.value.trim();

  // Clear previous errors
  emailErrorEl.textContent = "";
  pwdErrorEl.textContent = "";

  if (email === "" || password === "") {
    if (email === "") {
      emailErrorEl.textContent = "Please enter the email.";
      emailEl.focus();
    }
    if (password === "") {
      pwdErrorEl.textContent = "Please enter the password.";
      if (email !== "") pwdEl.focus();
    }
    return;
  }

  // Both fields filled - proceed (placeholder behavior)
  alert(`SSO link sent to ${email}`);
});
