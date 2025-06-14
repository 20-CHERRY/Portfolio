// Toggle mobile navigation menu
function toggleMenu() {
  const nav = document.getElementById("nav-links");
  nav.classList.toggle("show");
}

// Toggle dark mode and update icon
function toggleDarkMode() {
  const body = document.body;
  const toggleBtn = document.getElementById("modeToggle");

  const isDark = body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  toggleBtn.textContent = isDark ? "🌞" : "🌙";
}

// Initialize dark mode and scroll button on page load
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("modeToggle");
  const scrollBtn = document.getElementById("scrollToTopBtn");
  const savedTheme = localStorage.getItem("theme");

  // Set theme based on saved preference
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "🌞";
  } else {
    toggleBtn.textContent = "🌙";
  }

  // Hide scroll button initially
  scrollBtn.style.display = "none";

  // Optional: Close nav on link click (for mobile)
  const navLinks = document.querySelectorAll("#nav-links a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("nav-links").classList.remove("show");
    });
  });

  // Show/hide scroll button on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  // Scroll to top smoothly when clicked
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
