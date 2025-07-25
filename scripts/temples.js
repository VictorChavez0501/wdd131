// Fecha actual en el footer
document.getElementById("year").textContent = new Date().getFullYear();

// Fecha de última modificación
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Funcionalidad del menú hamburguesa
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

menuToggle.addEventListener("click", () => {
  navigation.classList.toggle("show");
  menuToggle.textContent = navigation.classList.contains("show") ? "✖" : "☰";
});
