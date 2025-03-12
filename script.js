function toggleNightMode() {
  const bodyElement = document.body;
  bodyElement.classList.toggle("night-mode");

  // Optional: change the icon from sun to moon, etc.
  const icon = document.getElementById("toggle-icon");
  if (bodyElement.classList.contains("night-mode")) {
    icon.textContent = "☾";
  } else {
    icon.textContent = "☀";
  }
}
