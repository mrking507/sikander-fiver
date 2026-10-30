
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
  nav.classList.toggle("show");

  const isOpen = nav.classList.contains("show");
  menuBtn.textContent = isOpen ? "✕" : "☰";
});

const navLinks = document.querySelectorAll("#nav a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
    menuBtn.textContent = "☰";
  });
});
