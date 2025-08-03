document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault(); // stop form from refreshing

  // Step 1: Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const messageDiv = document.getElementById("message");

  // Step 2: Validate
  if (!name || !email || !password) {
    messageDiv.style.color = "red";
    messageDiv.textContent = "All fields are required!";
    return;
  }

  // Step 3: POST request
  try {
    const res = await fetch("https://688f9ca7f21ab1769f89b17c.mockapi.io/users/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    const data = await res.json();
    messageDiv.style.color = "green";
    messageDiv.textContent = "Registration successful!";
    console.log(data); // just for checking

    // Optionally, clear the form
    document.getElementById("registerForm").reset();
  } catch (err) {
    messageDiv.style.color = "red";
    messageDiv.textContent = "Registration failed. Try again!";
    console.error(err);
  }
});
