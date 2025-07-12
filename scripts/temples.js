// Footer info
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger toggle
const menuButton = document.getElementById("menu");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
  const isOpen = navMenu.style.display === "flex";
  navMenu.style.display = isOpen ? "none" : "flex";
  menuButton.innerHTML = isOpen ? "&#9776;" : "&#10005;";
});
