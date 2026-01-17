
const menuToggle = document.querySelector(".menu-toggle");
const navBar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

menuToggle.addEventListener("click", () => {
  navBar.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.remove("open");
  });
});
